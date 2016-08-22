import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbisrepList.html';

import { name as TbisrepListUtilsBar } from '../tbisrepListUtilsBar/tbisrepListUtilsBar';
import { name as TbisrepListListView } from '../tbisrepListListView/tbisrepListListView';


class TbisrepList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        this.helpers({
        });
    }
}

const name = 'tbisrepList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    TbisrepListUtilsBar,
    TbisrepListListView
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisrepList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('tbisrepList', {
            url: '/quan-ly/thong-bao-thiet-bi',
            template: '<tbisrep-list></tbisrep-list>',
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