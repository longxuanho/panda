import { Mongo } from 'meteor/mongo';
import { ThietBis } from './collection';
import _ from 'underscore';

ThietBis.before.insert((userId, doc) => {
    doc.metadata.searchField =  buildSearchField(doc);
});

ThietBis.before.update((userId, doc, fieldNames, modifier, options) => {
    // Check phân quyền người dùng, chỉ cho phép cập nhật các trường được cấp phép
    if (Roles.userIsInRole(userId, ['admin'], 'sky-project')) {
        // ok - do nothing!
    } else {
        let allowedUpdateFields = _.find(Roles.getRolesForUser(userId, 'updatefields'), (item) => {
            return item.match(/^tbis:/g)
        });

        if (allowedUpdateFields) {
            let allowedUpdateFieldsArr = allowedUpdateFields.replace('tbis:', '').split('|');

            // Trường hợp user được cấp quyền 'tbis:all' trong group 'updatefields', anh ta được cập nhật không giới hạn
            if (_.contains(allowedUpdateFieldsArr, 'all')) {
                // ok - do nothing!
            } else {
                // Lọc modifier và chỉ cho phép cập nhật các trường đã quy ước trong group 'updatefields' của user
                modifier.$set = _.pick(modifier.$set, function(value, key) {
                    return _.contains(allowedUpdateFieldsArr, key);
                });
            }
        } else
            // Nếu không có trường nào được quy định -> Không cho phép cập nhật
            modifier.$set = {};
    }

    if (_.isEmpty(!modifier.$set)) {
        // Cập nhật searchField cho thiết  bị
        if (modifier.$set.metadata)
            modifier.$set.metadata.searchField =  buildSearchField(doc);
        // Nếu là cập nhật hình ảnh -> cập nhật staticstics cho thiết bị
        if (modifier.$set.hinh_anh && modifier.$set.hinh_anh.collections)
            modifier.$set['statistics.hinh_anh.count'] = modifier.$set.hinh_anh.collections.length;
    }
    console.log('result: ', modifier);
});

function buildSearchField(doc) {
    return `[id]${doc.ma_thiet_bi.keyId} : [id]${doc.ma_thiet_bi.topX} : [id]${doc.ma_thiet_bi.maximo} : [hsx]${doc.nguon_goc.hang_san_xuat} : [model]${doc.nguon_goc.model} : [sokhung]${doc.ho_so.so_khung} : [somay]${doc.ho_so.so_may} : [bienso]${doc.ho_so.bien_so}`;
}