import angular from 'angular';
import angularMeteor from 'angular-meteor';

import {Random} from 'meteor/random';

import _ from 'underscore';
import { TsktHelpers } from '../../../api/thietbis/tsktHelpers';

class TsktThongSoKyThuatDataService {

    constructor() {
        'ngInject';
        this.nhoms = [];
        this.tenthongsos = [];
        this.donvis = [];
        
        this.thongSoKyThuatDisplay = {};

        this.selectOptions = {
            nhoms: {},
            tenthongsos: {},
            donvis: {}
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        this.queryNhoms();
        this.queryTenThongSos();
        this.queryDonVis();
    }

    queryNhoms() {
        this.nhoms = resolveDataFromDB(
            TsktHelpers.find({
                subject: 'thongsokythuats',
                category: 'nhoms'
            }).fetch()
        );
        this.selectOptions.nhoms = buildNhomsOptions(this.nhoms);
    }

    queryTenThongSos() {
        this.tenthongsos = resolveDataFromDB(
            TsktHelpers.find({
                subject: 'thongsokythuats',
                category: 'tenthongsos'
            }).fetch()
        );
        this.selectOptions.tenthongsos = buildTenThongSosOptions(this.tenthongsos);
    }

    queryDonVis() {
        this.donvis = resolveDataFromDB(
            TsktHelpers.find({
                subject: 'thongsokythuats',
                category: 'donvis'
            }).fetch()
        );
        this.selectOptions.donvis = buildDonVisOptions(this.donvis);
    }

    validateNewThongSoKyThuatInputData(data) {
        data._id = Random.id();
        if (!data.nhom)
            throw Error('Chưa có thông tin về nhóm thông số');
        if (!data.ten_thong_so.ten)
            throw Error('Chưa có thông tin về tên thông số');
        if (!data.gia_tri)
            throw Error('Chưa có thông tin về giá trị thông số');
    }
}

const name = 'tsktThongSoKyThuatDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TsktThongSoKyThuatDataService);

function resolveDataFromDB(data) {
    "use strict";
    // console.log('resolveDataFromDB ', _.pluck(data, 'dataObject'));
    return _.pluck(data, 'dataObject');

}

function buildNhomsOptions(nhoms) {
    "use strict";
    try {
        let result = _.groupBy(nhoms, (nhom) => {
            return nhom.loai_thiet_bi;
        });
        // Kết quả của câu lệnh trên cho ra Object, ta sẽ xử lý obj này...
        return _.mapObject(result, function(val, key) {
            return _.pluck(_.sortBy(val, 'order'),'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về TsktThongSoKyThuatDataService > Nhoms (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return {};
}

function buildTenThongSosOptions(tenthongsos) {
    "use strict";
    try {
        let result = _.groupBy(tenthongsos, (tenthongso) => {
            return tenthongso.nhom.loai_thiet_bi;
        });
        result = _.mapObject(result, (val, key) => {
            let tmp = _.groupBy(val, (tenthongso) => {
                return tenthongso.nhom.ten;
            });
            return _.mapObject(tmp, (val, key) => {
               return  _.map(_.sortBy(val, 'order'), (item) => {
                   return {
                       ten: item.ten,
                       order: item.order
                   }
               });
            });
        });
        return result;
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về TsktThongSoKyThuatDataService > Tens (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return {};
}

function buildDonVisOptions(donvis) {
    "use strict";
    try {
        let result = _.groupBy(donvis, (donvi) => {
            return donvi.nhom.loai_thiet_bi;
        });
        result = _.mapObject(result, (val, key) => {
            let tmp = _.groupBy(val, (donvi) => {
                return donvi.nhom.ten;
            });
            return _.mapObject(tmp, (val, key) => {
                return  _.pluck(_.sortBy(val, 'ten'), 'ten');
            });
        });
        return result;
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về TsktThongSoKyThuatDataService > DonVis (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return {};
}