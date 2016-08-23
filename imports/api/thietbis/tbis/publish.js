import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { ThietBis } from './collection';

if (Meteor.isServer) {
    Meteor.publish('thietbis', function(options, searchString, filterOptions, category) {
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

        const ref = {
            'chungloais': 'phan_loai.chung_loai',
            'loais': 'phan_loai.loai',
            'khuvucs': 'dia_diem.khu_vuc.ten',
            'hangsanxuats': 'nguon_goc.hang_san_xuat',
            'dvsohuus': 'phan_quyen.so_huu.ten',
            'dvquanlies': 'phan_quyen.quan_ly.ten'
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        if (!_.isEmpty(filterOptions)) {
            let filters = filterOptions.filters;
            _.each(_.keys(filters), (key) => {
                if(_.isArray(filters[key]) && filters[key].length)
                    selector[ref[key]] = { $in: filters[key] };
            });
        }

        if (typeof category === 'string' && category.length && category != 'Tất cả') {
            selector['phan_loai.nhom'] = category
        }

        Counts.publish(this, 'numberOfThietBis', ThietBis.find(selector), {
            noReady: true
        });

        return ThietBis.find(selector, options);
    });
}