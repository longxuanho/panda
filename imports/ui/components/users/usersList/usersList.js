import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './usersList.html';

import { name as UsersListListView } from '../usersListListView/usersListListView';
import { name as UsersListSearchForm } from '../usersListSearchForm/usersListSearchForm';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class UsersList {
    constructor($scope, $reactive, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.isOpen = false;

        this.subscribe('users');
    }
}

const name = 'usersList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    UserLocalSettingsService,
    UsersListListView,
    UsersListSearchForm
]).component(name, {
    template,
    controllerAs: name,
    controller: UsersList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('usersList', {
            url: '/quan-ly/users',
            template: '<users-list></users-list>',
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