import { Meteor } from 'meteor/meteor';

import { TbisHistories } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tbishistories', function(options, searchString, nhom) {
        const selector = {
        };

        if (typeof searchString === 'string' && searchString.length) {
            // Tìm kiếm theo dạng chuỗi (Cẩu bờ : LB101 : Nội dung)
            let searchArr = searchString.split(/\s*:\s*/);
            if (searchArr.length === 1) {
                selector['thong_ke.searchField'] = {
                    $regex: `.*${searchString}.*`,
                    $options : 'i'
                };
            } else {
                selector.$and = [];
                _.each(searchArr, (searchKey) => {
                    selector.$and.push({
                        'thong_ke.searchField': {
                            $regex: `.*${searchKey}.*`,
                            $options : 'i'
                        }
                    });
                });
            }
        }

        if (typeof nhom === 'string' && nhom.length) {
            selector['phan_loai.nhom'] = nhom;
        }

        return TbisHistories.find(selector, options);
    });
}