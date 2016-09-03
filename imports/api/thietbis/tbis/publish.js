import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Roles } from 'meteor/alanning:roles';

import { ThietBis } from './collection';

import _ from 'underscore';

if (Meteor.isServer) {
    Meteor.publish('thietbis', function(options, searchString, filterOptions, category) {

        // PHASE 0: SET UP SELECTOR AND PROJECTOR

        const currentUserRoles = {
            zones: Roles.getRolesForUser(this.userId, 'zones'),
            donvies: Roles.getRolesForUser(this.userId, 'donvies'),
            assets: Roles.getRolesForUser(this.userId, 'assets')
        };

        const refNhomTbis = {
            'all': 'all',
            'tbn': 'Thiết bị nâng',
            'xmy': 'Xe máy',
            'tth': 'Tàu thuyền',
            'trn': 'Trạm nguồn',
            'thl': 'Thanh lý'
        };


        const refFilters = {
            'chungloais': 'phan_loai.chung_loai',
            'loais': 'phan_loai.loai',
            'khuvucs': 'dia_diem.khu_vuc.ten',
            'hangsanxuats': 'nguon_goc.hang_san_xuat',
            'dvsohuus': 'phan_quyen.so_huu.ten',
            'dvquanlies': 'phan_quyen.quan_ly.ten'
        };

        const selector = {
            // Chỉ những thiết bị còn active trong hệ thống
            $and: [{
                isActive: true
            }, {
                isActive: {
                    $exists: true
                }
            }]
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector['metadata.searchField'] = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        if (!_.isEmpty(filterOptions)) {
            let filters = filterOptions.filters;
            _.each(_.keys(filters), (key) => {
                if(_.isArray(filters[key]) && filters[key].length)
                    selector[refFilters[key]] = { $in: filters[key] };
            });
        }

        if (typeof category === 'string' && category.length && category != 'Tất cả') {
            selector['phan_loai.nhom'] = category
        }

        // PHASE 1: CHECK USER ROLES

        // Route 0: user là admin có thể bypass các bước kiểm tra phía dưới
        if (Roles.userIsInRole(this.userId, ['admin'], 'sky-project')) {
            Counts.publish(this, 'numberOfThietBis', ThietBis.find(selector), {
                noReady: true
            });
            return ThietBis.find(selector, options);
        }


        // Route 1: user phải ở một trong các role sau mới có quyền xem dữ liệu ở module này
        if (Roles.userIsInRole(this.userId, ['tbis:viux','tbis:viu', 'tbis:vi', 'tbis:v'], 'rights')) {

            // Route 1a: Cấu hình selector theo các phân quyền assets tương ứng
            let allowedAssets = _.find(currentUserRoles.assets, (item) => {
                return item.match(/^tbis:/g)
            });

            if (allowedAssets) {
                selector['ma_thiet_bi.keyId'] = { $in: allowedAssets.replace('tbis:', '').split('|') };

                Counts.publish(this, 'numberOfThietBis', ThietBis.find(selector), {
                    noReady: true
                });
                return ThietBis.find(selector, options);
            }

            // Route 1b: Cấu hình selector theo các phân quyền donvies và zones tương ứng
            let allowedZones = _.find(currentUserRoles.zones, (item) => {
                return item.match(/^tbis:/g)
            });

            let allowedDonvies = _.find(currentUserRoles.donvies, (item) => {
                return item.match(/^tbis:/g)
            });


            if (allowedZones && allowedDonvies) {
                let allowedZonesArr = _.map(allowedZones.replace('tbis:', '').split('|'), (item) => {
                    return refNhomTbis[item];
                });
                let allowedDonviesArr = allowedDonvies.replace('tbis:', '').split('|');

                // Trường hợp với các quyền ưu tiên 'tbis:all' trong group 'zones'
                if (!_.contains(allowedZonesArr, 'all')) {

                    if (typeof category === 'string' && category.length && category != 'Tất cả' && !_.contains(allowedZonesArr, category))
                        allowedZonesArr.push(category);

                    selector['phan_loai.nhom'] = { $in: allowedZonesArr };
                }

                // Trường hợp với các quyền ưu tiên 'tbis:all' trong group 'donvies'
                if (!_.contains(allowedDonviesArr, 'all')) {
                    selector.$or = [
                        {'phan_quyen.quan_ly.ma': { $in: allowedDonviesArr } },
                        {'phan_quyen.so_huu.ma': { $in: allowedDonviesArr } }
                    ];
                }

                Counts.publish(this, 'numberOfThietBis', ThietBis.find(selector), {
                    noReady: true
                });
                return ThietBis.find(selector, options);
            }
        }

        // Automatic fail với các trường hợp khác
        this.stop();
        return;

    });
}

// View:
// Kết hợp ít nhất 3 điều kiện (rights && (zones && donvies) || assets) để user có thể xem một record
// Rights tbis:viux || tbis:viu || tbis:vi || tbis:v
// Zones tbis:tbn|xmy|tth|trn|thl, tìm trong 'phan_loai.nhom'
// Donvies tbis:xncg|cpcl, tìm trong 'phan_quyen.quan_ly.ma' hoặc 'phan_quyen.so_huu.ma'
// Assets tbis:Q01|Q02, tìm theo 'ma_thiet_bi.keyId'