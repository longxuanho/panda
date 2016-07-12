import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';

class TbisPhanLoaiDataService {

    constructor() {
        'ngInject';

        this.nhoms = [];
        this.chungloais = [];
        this.loais = [];

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
        // Thông tin về nhóm chứa trong trường dataObject của dữ liệu truy vấn
        this.nhoms = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'phanloais',
                category: 'nhoms'
            }, {
                sort: { order: 1 }
            }).fetch()
        );

        this.selectOptions.nhoms = buildNhomOptions(this.nhoms);
    }

    queryChungLoais() {
        this.chungloais = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'phanloais',
                category: 'chungloais'
            }).fetch()
        );

        this.selectOptions.chungloais = buildChungLoaiOptions(this.chungloais);
    }

    queryLoais() {
        this.loais = this.chungloais = resolveDataFromDB(
                TbisHelpers.find({
                subject: 'phanloais',
                category: 'loais'
            }).fetch()
        );

        this.selectOptions.loais = buildLoaiOptions(this.loais);
    }
}

const name = 'tbisPhanLoaiDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisPhanLoaiDataService);

function resolveDataFromDB(data) {
    "use strict";
    return _.pluck(data, 'dataObject');
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

