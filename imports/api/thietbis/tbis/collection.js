import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';

export const ThietBis = new Mongo.Collection('thietbis');

ThietBis.allow({
    insert(userId, thietBi) {
        if (Roles.userIsInRole(userId, ['admin'], 'sky-project'))
            return true;

        // Để insert, user phải có một trong các quyền sau: tbis:viux || tbis:viu || tbis:vi
        if (Roles.userIsInRole(userId, ['tbis:viux','tbis:viu', 'tbis:vix','tbis:vi'], 'rights')) {

            // Tiếp theo, thiết bị phải nằm trong vùng cho phép đối với quyền hạn user
            let allowedZones = _.find(Roles.getRolesForUser(userId, 'zones'), (item) => {
                return item.match(/^tbis:/g)
            });

            let allowedDonvies = _.find(Roles.getRolesForUser(userId, 'donvies'), (item) => {
                return item.match(/^tbis:/g)
            });

            if (allowedZones && allowedDonvies) {

                let refNhomTbis = {
                    'all': 'all',
                    'tbn': 'Thiết bị nâng',
                    'xmy': 'Xe máy',
                    'tth': 'Tàu thuyền',
                    'trn': 'Trạm nguồn',
                    'thl': 'Thanh lý'
                };

                let allowedZonesArr = _.map(allowedZones.replace('tbis:', '').split('|'), (item) => {
                    return refNhomTbis[item];
                });
                let allowedDonviesArr = allowedDonvies.replace('tbis:', '').split('|');

                // Trường hợp với các quyền ưu tiên 'tbis:all' trong các group 'zones' và 'donvies'
                if (_.contains(allowedZonesArr, 'all') && _.contains(allowedDonviesArr, 'all'))
                    return true;
                else {
                    if (_.contains(allowedZonesArr, 'all'))
                        return (_.contains(allowedDonviesArr, thietBi.phan_quyen.quan_ly.ma) || _.contains(allowedDonviesArr, thietBi.phan_quyen.so_huu.ma));

                    if (_.contains(allowedDonviesArr, 'all'))
                        return _.contains(allowedZonesArr, thietBi.phan_loai.nhom);
                }


                if (thietBi && thietBi.phan_loai && thietBi.phan_quyen && thietBi.phan_quyen.quan_ly && thietBi.phan_quyen.so_huu)
                    return  _.contains(allowedZonesArr, thietBi.phan_loai.nhom) &&
                            (_.contains(allowedDonviesArr, thietBi.phan_quyen.quan_ly.ma) || _.contains(allowedDonviesArr, thietBi.phan_quyen.so_huu.ma));
            }
        }

        // Automatic fail nếu không thỏa các điều kiện trên
        return false;
    },
    update(userId, thietBi, fields, modifier) {
        if (Roles.userIsInRole(userId, ['admin'], 'sky-project'))
            return true;

        // Để update, user phải có một trong các quyền sau: tbis:viux || tbis:viu || tbis:vux || tbis:vu
        if (Roles.userIsInRole(userId, ['tbis:viux','tbis:viu', 'tbis:vux', 'tbis:vu'], 'rights')) {

            // Tiếp theo, thiết bị phải nằm trong vùng cho phép đối với quyền hạn user
            let allowedAssets = _.find(Roles.getRolesForUser(userId, 'assets'), (item) => {
                return item.match(/^tbis:/g)
            });

            if (allowedAssets) {
                let allowedAssetsArr = allowedAssets.replace('tbis:', '').split('|');
                return _.contains(allowedAssetsArr, thietBi.ma_thiet_bi.keyId);
            }

            let allowedZones = _.find(Roles.getRolesForUser(userId, 'zones'), (item) => {
                return item.match(/^tbis:/g)
            });
            let allowedDonvies = _.find(Roles.getRolesForUser(userId, 'donvies'), (item) => {
                return item.match(/^tbis:/g)
            });

            if (allowedZones && allowedDonvies) {
                let refNhomTbis = {
                    'all': 'all',
                    'tbn': 'Thiết bị nâng',
                    'xmy': 'Xe máy',
                    'tth': 'Tàu thuyền',
                    'trn': 'Trạm nguồn',
                    'thl': 'Thanh lý'
                };

                let allowedZonesArr = _.map(allowedZones.replace('tbis:', '').split('|'), (item) => {
                    return refNhomTbis[item];
                });
                let allowedDonviesArr = allowedDonvies.replace('tbis:', '').split('|');

                // Trường hợp với các quyền ưu tiên 'tbis:all' trong các group 'zones' và 'donvies'
                if (_.contains(allowedZonesArr, 'all') && _.contains(allowedDonviesArr, 'all'))
                    return true;
                else {
                    if (_.contains(allowedZonesArr, 'all'))
                        return (_.contains(allowedDonviesArr, thietBi.phan_quyen.quan_ly.ma) || _.contains(allowedDonviesArr, thietBi.phan_quyen.so_huu.ma));

                    if (_.contains(allowedDonviesArr, 'all'))
                        return _.contains(allowedZonesArr, thietBi.phan_loai.nhom);
                }

                if (thietBi && thietBi.phan_loai && thietBi.phan_quyen && thietBi.phan_quyen.quan_ly && thietBi.phan_quyen.so_huu)
                    return  _.contains(allowedZonesArr, thietBi.phan_loai.nhom) &&
                        (_.contains(allowedDonviesArr, thietBi.phan_quyen.quan_ly.ma) || _.contains(allowedDonviesArr, thietBi.phan_quyen.so_huu.ma));
            }
        }

        // Automatic fail nếu không thỏa các điều kiện trên
        return false;
    },
    // Trường hợp remove không cho quan tâm tới thông tin về group roles 'assets', chỉ quan tâm tới các group 'rights', 'zones' và 'donvies'
    remove(userId, thietBi) {
        if (Roles.userIsInRole(userId, ['admin'], 'sky-project'))
            return true;

        // Để remove, user phải có một trong các quyền sau: tbis:viux || tbis:vix || tbis:vux || tbis:vx
        if (Roles.userIsInRole(userId, ['tbis:viux','tbis:vix', 'tbis:vux', 'tbis:vx'], 'rights')) {

            // Tiếp theo, thiết bị phải nằm trong vùng cho phép đối với quyền hạn user
            let allowedZones = _.find(Roles.getRolesForUser(userId, 'zones'), (item) => {
                return item.match(/^tbis:/g)
            });
            let allowedDonvies = _.find(Roles.getRolesForUser(userId, 'donvies'), (item) => {
                return item.match(/^tbis:/g)
            });

            if (allowedZones && allowedDonvies) {
                let refNhomTbis = {
                    'all': 'all',
                    'tbn': 'Thiết bị nâng',
                    'xmy': 'Xe máy',
                    'tth': 'Tàu thuyền',
                    'trn': 'Trạm nguồn',
                    'thl': 'Thanh lý'
                };

                let allowedZonesArr = _.map(allowedZones.replace('tbis:', '').split('|'), (item) => {
                    return refNhomTbis[item];
                });
                let allowedDonviesArr = allowedDonvies.replace('tbis:', '').split('|');

                // Trường hợp với các quyền ưu tiên 'tbis:all' trong các group 'zones' và 'donvies'
                if (_.contains(allowedZonesArr, 'all') && _.contains(allowedDonviesArr, 'all'))
                    return true;
                else {
                    if (_.contains(allowedZonesArr, 'all'))
                        return (_.contains(allowedDonviesArr, thietBi.phan_quyen.quan_ly.ma) || _.contains(allowedDonviesArr, thietBi.phan_quyen.so_huu.ma));

                    if (_.contains(allowedDonviesArr, 'all'))
                        return _.contains(allowedZonesArr, thietBi.phan_loai.nhom);
                }

                if (thietBi && thietBi.phan_loai && thietBi.phan_quyen && thietBi.phan_quyen.quan_ly && thietBi.phan_quyen.so_huu)
                    return  _.contains(allowedZonesArr, thietBi.phan_loai.nhom) &&
                        (_.contains(allowedDonviesArr, thietBi.phan_quyen.quan_ly.ma) || _.contains(allowedDonviesArr, thietBi.phan_quyen.so_huu.ma));
            }
        }

        // Automatic fail nếu không thỏa các điều kiện trên
        return false;
    }
});