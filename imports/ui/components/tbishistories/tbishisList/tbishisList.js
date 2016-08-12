import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbishisList.html';

import { name as TbishisListUtilsBar } from '../tbishisListUtilsBar/tbishisListUtilsBar';

// import { name as TbisrepListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';

// import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';

import { name as TbishisListListView } from '../tbishisListListView/tbishisListListView';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class TbishisList {
    constructor($scope, $reactive, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);

        // this.componentOptions = userLocalSettingsService.getPageSettings('tbishisList', 'tbishisList').utilsBar;
        // this.filterPanelOptions = userLocalSettingsService.getPageSettings('tbishisList', 'tbishisList').tbisFilterPanel;

        // console.log('componentOptions: ', this.componentOptions);
        // console.log('filterPanelOptions: ', this.filterPanelOptions);

        this.isOpen = false;

        this.subscribe('tbishistories');

        this.helpers({

        });
    }
}

const name = 'tbishisList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    TbishisListUtilsBar,
    TbishisListListView,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbishisList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('tbishistories', {
            url: '/quan-ly/nhat-ky-thiet-bi',
            template: '<tbishis-list></tbishis-list>',
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