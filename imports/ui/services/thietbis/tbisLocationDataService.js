import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

class TbisLocationDataService {

    constructor($q) {
        'ngInject';
        this.$q = $q;
    }

    query() {
        let location = {
            latitude: 10.76 + Math.random()/100,
            longitude: 106.78 + Math.random()/100
        };
        let defer = this.$q.defer();

        setTimeout(function() {
            defer.resolve(location);
            // defer.reject('404 not found!');
        }, 100);
        return defer.promise;
    }
}

const name = 'tbisLocationDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisLocationDataService);
