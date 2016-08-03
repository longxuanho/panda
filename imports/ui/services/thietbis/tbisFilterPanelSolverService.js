import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

class TbisFilterPanelSolverService {

    constructor($q) {
        'ngInject';
        this.$q = $q;
        this.queryFilterOptions();

    }

    queryFilterOptions() {
        Meteor.call('getTbisSourceForPanelFilter', (error, result) => {
                if (error) {
                    defer.reject(error);
                } else {
                    this.tbisFilterOptions = result;
                    console.log('query done');
                }
            }
        );
    }

    getFilterOptions() {
        return this.tbisFilterOptions;
    }

}

const name = 'tbisFilterPanelSolverService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisFilterPanelSolverService);

