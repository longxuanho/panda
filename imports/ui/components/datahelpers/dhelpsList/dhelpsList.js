import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Roles } from 'meteor/alanning:roles';
import uiRouter from 'angular-ui-router';

import template from './dhelpsList.html';

import { name as DhelpsListUtilsTopBar } from '../dhelpsListUtilsTopBar/dhelpsListUtilsTopBar';
import { name as DhelpsListGridView } from '../dhelpsListGridView/dhelpsListGridView';



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
    uiRouter,
    DhelpsListUtilsTopBar,
    DhelpsListGridView
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
                    if (Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project')) {
                        return $q.resolve();
                    } else {
                        return $q.reject('AUTH_REQUIRED');
                    }
                }
            }
        });
}