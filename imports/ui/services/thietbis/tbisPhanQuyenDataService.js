import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';

class TbisPhanQuyenDataService {

    constructor() {
        'ngInject';
        this.donvis = [];
        this.doivanhanhs = [];

        this.selectOptions = {
            donvis: [],
            doivanhanhs: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        this.queryDonVis();
        this.queryDoiVanHanhs();
    }

    queryDonVis() {
        this.donvis = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'phanquyens',
                category: 'donvis'
            }).fetch()
        );

        this.selectOptions.donvis = buildDonViOptions(this.donvis);
    }

    queryDoiVanHanhs() {
        this.doivanhanhs = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'phanquyens',
                category: 'doivanhanhs'
            }).fetch()
        );

        this.selectOptions.doivanhanhs = buildDoiVanHanhOptions(this.doivanhanhs);
    }

}

const name = 'tbisPhanQuyenDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisPhanQuyenDataService);

function resolveDataFromDB(data) {
    "use strict";
    // console.log('resolveDataFromDB ', _.pluck(data, 'dataObject'));
    return _.pluck(data, 'dataObject');

}

function buildDonViOptions(donvis) {
    "use strict";
    return donvis;
}

function buildDoiVanHanhOptions(doivanhanhs) {
    "use strict";
    try {
        let result = _.groupBy(doivanhanhs, (doivanhanh) => {
            return doivanhanh.don_vi.ten;
        });
        return _.mapObject(result, function(val, key) {
            return _.map(val, (doivanhanh) => {
                return _.pick(doivanhanh, '_id', 'ten', 'ma');
            })
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Phân Quyền > Đội Vận Hành (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}