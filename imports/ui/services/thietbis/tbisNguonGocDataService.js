import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';

class TbisNguonGocDataService {

    constructor() {
        'ngInject';
        this.hangsanxuats = [];
        this.models = [];
        this.vendors = [];

        this.selectOptions = {
            hangsanxuats: [],
            models: [],
            vendors: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }
    
    queryAll() {
        this.queryHangSanXuats();
        this.queryModels();
        this.queryVendors();        
    }

    queryHangSanXuats() {
        // Hàm reactive được gọi trong Helper(), reinvoke khi thietbishelper thay đổi
        // Thông tin về hãng sản xuất chứa trong trường dataObject của dữ liệu truy vấn
        this.hangsanxuats = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'nguongocs',
                category: 'hangsanxuats'
            }).fetch()
        );

        this.selectOptions.hangsanxuats = buildHangSanXuatOptions(this.hangsanxuats);
    }

    queryModels() {
        this.models = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'nguongocs',
                category: 'models'
            }).fetch()
        );

        this.selectOptions.models = buildModelOptions(this.models);
    }

    queryVendors() {
        this.vendors = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'nguongocs',
                category: 'vendors'
            }).fetch()
        );

        this.selectOptions.vendors = buildVendorOptions(this.vendors);
    }
}

const name = 'tbisNguonGocDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisNguonGocDataService);

function resolveDataFromDB(data) {
    "use strict";
    return _.pluck(data, 'dataObject');

}

function buildHangSanXuatOptions(hangsanxuats) {
    "use strict";
    return _.pluck(hangsanxuats, 'ten');
}

function buildModelOptions(models) {
    "use strict";
    try {
        let result = _.groupBy(models, (model) => {
            return model.hang_san_xuat.ten;
        });
        return _.mapObject(result, function(val, key) {
            return _.pluck(val, 'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Nguồn Gốc > Model (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}

function buildVendorOptions(vendors) {
    "use strict";
    return _.pluck(vendors, 'ten');
}