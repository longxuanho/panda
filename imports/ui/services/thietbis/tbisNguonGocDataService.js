import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { name as DhelpsDataService } from '../../services/datahelpers/dhelpsDataService';

class TbisNguonGocDataService {

    constructor(dhelpsDataService) {
        'ngInject';

        this.dhelpsDataService = dhelpsDataService;

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
        // Hàm reactive được gọi trong Helper(), reinvoke khi thietbishelper thay đổi
        this.queryHangSanXuats();
        this.queryModels();
        this.queryVendors();        
    }

    queryHangSanXuats() {
        let hangsanxuats = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "hangsanxuats"
            })
        );

        this.selectOptions.hangsanxuats = buildHangSanXuatOptions(hangsanxuats);
    }

    queryModels() {
        let models = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "models"
            })
        );

        this.selectOptions.models = buildModelOptions(models);
    }

    queryVendors() {
        let vendors = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "vendors"
            })
        );

        this.selectOptions.vendors = buildVendorOptions(vendors);
    }
}

const name = 'tbisNguonGocDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    DhelpsDataService
])
    .service(name, TbisNguonGocDataService);

function resolveSelectOptionsDB(data) {
    return _.pluck(data, 'dataSource');
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