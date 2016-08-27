import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';
import { name as DhelpsDataService } from '../../services/datahelpers/dhelpsDataService';

class TbisReferenceDataService {

    constructor(dhelpsDataService) {
        'ngInject';

        this.dhelpsDataService = dhelpsDataService;

        this.selectOptions = {
            tags: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        // Hàm reactive được gọi trong Helper(), reinvoke khi thietbishelper thay đổi
        this.queryTags();
    }

    queryTags() {
        let tags = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "tags"
            })
        );

        this.selectOptions.tags = buildTagOptions(tags);
    }

}

const name = 'tbisReferenceDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    DhelpsDataService
])
    .service(name, TbisReferenceDataService);

function resolveSelectOptionsDB(data) {
    return _.pluck(data, 'dataSource');
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