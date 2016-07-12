import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';

class TbisReferenceDataService {

    constructor() {
        'ngInject';
        this.tags = [];

        this.selectOptions = {
            tags: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        this.queryTags();
    }

    queryTags() {
        this.tags = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'references',
                category: 'tags'
            }).fetch()
        );

        this.selectOptions.tags = buildTagOptions(this.tags);
    }

}

const name = 'tbisReferenceDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisReferenceDataService);

function resolveDataFromDB(data) {
    "use strict";
    return _.pluck(data, 'dataObject');

}

function buildTagOptions(tags) {
    "use strict";
    try {
        let result = _.groupBy(tags, (tag) => {
            return tag.nhom.ten;
        });
        return _.mapObject(result, function(val, key) {
            return _.pluck(_.sortBy(val, 'order'),'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về References > Tag (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}