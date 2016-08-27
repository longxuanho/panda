import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { name as DhelpsDataService } from '../../services/datahelpers/dhelpsDataService';

class TbisPhanQuyenDataService {

    constructor(dhelpsDataService) {
        'ngInject';

        this.dhelpsDataService = dhelpsDataService;

        this.selectOptions = {
            donvis: [],
            doivanhanhs: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        // Hàm reactive được gọi trong Helper(), reinvoke khi thietbishelper thay đổi
        this.queryDonVis();
        this.queryDoiVanHanhs();
    }

    queryDonVis() {
        // Thông tin về đơn vị chứa trong trường dataSource của dữ liệu truy vấn
        let donvis = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "commons",
                stateName: "dhelpsList",
                subject: "donvis"
            })
        );

        this.selectOptions.donvis = buildDonViOptions(donvis);
    }

    queryDoiVanHanhs() {
        let doivanhanhs = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "doivanhanhs"
            })
        );

        this.selectOptions.doivanhanhs = buildDoiVanHanhOptions(doivanhanhs);
    }

}

const name = 'tbisPhanQuyenDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    DhelpsDataService
])
    .service(name, TbisPhanQuyenDataService);

function resolveSelectOptionsDB(data) {
    return _.pluck(data, 'dataSource');
}

function buildDonViOptions(donvis) {
    "use strict";
    return donvis;
}

function buildDoiVanHanhOptions(doivanhanhs) {
    "use strict";
    try {
        let result = _.groupBy(doivanhanhs, (doivanhanh) => {
            // return doivanhanh.don_vi.ten;
            return doivanhanh.don_vi.ma;
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