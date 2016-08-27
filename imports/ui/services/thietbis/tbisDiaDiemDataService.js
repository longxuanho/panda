import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { name as DhelpsDataService } from '../../services/datahelpers/dhelpsDataService';

class TbisDiaDiemDataService {

    constructor(dhelpsDataService) {
        'ngInject';

        this.dhelpsDataService = dhelpsDataService;

        this.selectOptions = {
            quocgias: [],
            khuvucs: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        // Hàm reactive được gọi trong Helper(), reinvoke khi thietbishelper thay đổi
        this.queryQuocGias();
        this.queryKhuVucs();
    }

    queryQuocGias() {
        let quocgias = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "commons",
                stateName: "dhelpsList",
                subject: "quocgias"
            })
        );

        this.selectOptions.quocgias = buildQuocGiasOptions(quocgias);
    }
    
    queryKhuVucs() {
        let khuvucs = resolveSelectOptionsDB(
            this.dhelpsDataService.query({
                module: "thietbis",
                stateName: "tbisList",
                subject: "khuvucs"
            })
        );

        this.selectOptions.khuvucs = buildKhuVucsOptions(khuvucs);
    }
}

const name = 'tbisDiaDiemDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    DhelpsDataService
])
    .service(name, TbisDiaDiemDataService);

function resolveSelectOptionsDB(data) {
    return _.pluck(data, 'dataSource');
}

function buildQuocGiasOptions(quocgias) {
    "use strict";
    return _.pluck(quocgias, 'ten');
}

function buildKhuVucsOptions(khuvucs) {
    "use strict";
    return khuvucs;
}