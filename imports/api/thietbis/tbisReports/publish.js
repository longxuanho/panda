import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

import { TbisReports } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tbisreports', function(options, searchString, status) {
        // const selector = {
        // };

        let selector = {};

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

        if (typeof status === 'string' && status.length) {
            selector.status = status;
        }

        return TbisReports.find(selector, options);
    });
}