import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import template from './tbisList.html';

import { name as TbisListUtilsTopBar } from '../tbisListUtilsTopBar/tbisListUtilsTopBar';

import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';
import { name as UtilsFilterDataService } from '../../../services/workspaces/utilsFilterDataService';

import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';
import { name as TbisDisplayGridView } from '../tbisDisplayGridView/tbisDisplayGridView';


class TbisList {
    constructor($scope, $reactive,
                utilsTopBarDataService, utilsFilterDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.utilsTopBarOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();
        this.utilsFilterOptions = utilsFilterDataService.getCurrentUtilsFilterOptions();

        this.isOpen = false;

        this.helpers({});
    }
}

const name = 'tbisList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    TbisListUtilsTopBar,

    TbisDisplayListView,
    TbisDisplayGridView,

    UtilsTopBarDataService,
    UtilsFilterDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('tbisList', {
            url: '/quan-ly/thiet-bi',
            template: '<tbis-list></tbis-list>',
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