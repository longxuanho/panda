import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './dhelpsList';

// import { name as TbisListUtilsTopBar } from '../tbisListUtilsTopBar/tbisListUtilsTopBar';


class DhelpsList {
    constructor($scope, $reactive, utilsTopBarDataService, utilsFilterDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.utilsTopBarOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();
        this.utilsFilterOptions = utilsFilterDataService.getCurrentUtilsFilterOptions();

        this.isOpen = false;
    }
}

const name = 'dhelpsList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: DhelpsList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('dhelpsList', {
            url: '/quan-ly/datahelpers',
            template: '<dhelps-list></dhelps-list>',
            resolve: {
                currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        });
}