import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTabUserLabel.html';

import { name as UserAvatar } from '../../../directives/common/userAvatar';
import { name as UserStatus } from '../../../directives/common/userStatus';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetailsViewQuanLyTabUserLabel {
    constructor($reactive, $scope, usersDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.selectedUser = angular.copy(usersDataService.getSelectedUser());
    }
}

const name = 'userDetailsViewQuanLyTabUserLabel';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserAvatar,
    UserStatus,
    UsersDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUserLabel
});