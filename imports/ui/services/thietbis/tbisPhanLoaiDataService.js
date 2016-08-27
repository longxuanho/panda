import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import { name as DhelpsDataService } from '../../services/datahelpers/dhelpsDataService';

class TbisPhanLoaiDataService {

    constructor(dhelpsDataService) {
        'ngInject';

        this.dhelpsDataService = dhelpsDataService;

        this.selectOptions = {
            nhoms: [],
            chungloais: [],
            loais: []
        };
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        // Hàm reactive được gọi trong Helper(), reinvoke khi thietbishelper thay đổi
        this.queryNhoms();
        this.queryChungLoais();
        this.queryLoais();
    }
    
    queryNhoms() {
        // Thông tin về nhóm chứa trong trường dataSource của dữ liệu truy vấn
        let nhoms = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "nhoms"
            })
        );

        this.selectOptions.nhoms = buildNhomOptions(nhoms);
    }

    queryChungLoais() {
        let chungloais = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "chungloais"
            })
        );
        this.selectOptions.chungloais = buildChungLoaiOptions(chungloais);

    }

    queryLoais() {
        let loais = this.chungloais = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "loais"
            })
        );

        this.selectOptions.loais = buildLoaiOptions(loais);
    }
}

const name = 'tbisPhanLoaiDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    DhelpsDataService
])
    .service(name, TbisPhanLoaiDataService);

function resolveSelectOptionsDB(data) {
    return _.pluck(data, 'dataSource');
}


function buildNhomOptions(nhoms) {
    "use strict";
    return _.pluck(_.sortBy(nhoms, 'order'), 'ten');
}

function buildChungLoaiOptions(chungloais) {
    "use strict";
    try {
        let result = _.groupBy(chungloais, (chungloai) => {
            return chungloai.nhom.ten;
        });
        // Chuyển key Thiết bị nâng từ [Object] thành ['String'] chỉ chứa tên các chủng lại 'Cẩu bờ', 'Cẩu khung',...
        return _.mapObject(result, function(val, key) {
            return _.pluck(_.sortBy(val, 'order'),'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Phân Loại > Chủng Loại (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}

function buildLoaiOptions(loais) {
    "use strict";
    try {
        let result = _.groupBy(loais, (loai) => {
            return loai.chung_loai.ten;
        });
        return _.mapObject(result, function(val, key) {
            return _.pluck(_.sortBy(val, 'order'),'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Phân Loại > Loại (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}

