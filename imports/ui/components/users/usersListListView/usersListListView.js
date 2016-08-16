import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './usersListListView.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';

import { name as UserName } from '../../../directives/common/userName';
import { name as UserAvatar } from '../../../directives/common/userAvatar';
import { name as UserStatus } from '../../../directives/common/userStatus';


class UsersListListView {
    constructor($reactive, $scope, usersDataService) {
        'ngInject';
        $reactive(this).attach($scope);
        this.helpers({
            users() {
                return usersDataService.query();
            },
            usersCount() {
                return Counts.get('numberOfUsers');
            }
        });
    }
}

const name = 'usersListListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    UserName,
    UserAvatar,
    UserStatus
]).component(name, {
    template,
    bindings: {
    },
    controllerAs: name,
    controller: UsersListListView
});