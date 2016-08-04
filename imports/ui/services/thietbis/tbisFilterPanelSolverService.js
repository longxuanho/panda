import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

class TbisFilterPanelSolverService {

    constructor($q) {
        'ngInject';
        this.$q = $q;
    }

    queryFilterOptions() {
        let defer = this.$q.defer();
        Meteor.call('getTbisSourceForPanelFilter', (error, result) => {
                if (error) {
                    defer.reject(error);
                } else {
                    console.log('query done');
                    defer.resolve(result);
                }
            }
        );
        return defer.promise;
    }

    getFilterOptions() {
        return this.tbisFilterOptions;
    }

    setFilterOptions(options) {
        this.tbisFilterOptions = angular.copy(options);
    }

}

const name = 'tbisFilterPanelSolverService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisFilterPanelSolverService);

