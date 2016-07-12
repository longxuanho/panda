import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';

class TbisDiaDiemDataService {

    constructor() {
        'ngInject';
        this.quocgias = [];
        this.khuvucs = [];

        this.selectOptions = {
            quocgias: [],
            khuvucs: []
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    queryAll() {
        this.queryQuocGias();
        this.queryKhuVucs();
    }

    queryQuocGias() {
        this.quocgias = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'diadiems',
                category: 'quocgias'
            }).fetch()
        );

        this.selectOptions.quocgias = buildQuocGiasOptions(this.quocgias);
    }
    
    queryKhuVucs() {
        this.khuvucs = resolveDataFromDB(
            TbisHelpers.find({
                subject: 'diadiems',
                category: 'khuvucs'
            }).fetch()
        );

        this.selectOptions.khuvucs = buildKhuVucsOptions(this.khuvucs);
    }
}

const name = 'tbisDiaDiemDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDiaDiemDataService);

function resolveDataFromDB(data) {
    "use strict";
    // console.log('resolveDataFromDB ', _.pluck(data, 'dataObject'));
    return _.pluck(data, 'dataObject');

}

function buildQuocGiasOptions(quocgias) {
    "use strict";
    return _.pluck(quocgias, 'ten');
}

function buildKhuVucsOptions(khuvucs) {
    "use strict";
    return khuvucs;
}