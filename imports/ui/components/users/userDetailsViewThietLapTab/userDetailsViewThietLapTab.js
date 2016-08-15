import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewThietLapTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as UserDetailsViewThietLapTabChangePasswordBtn } from '../userDetailsViewThietLapTabChangePasswordBtn/userDetailsViewThietLapTabChangePasswordBtn'
import { name as UserDetailsuserDetailsViewThietLapTabUpdateAvatarBtn } from '../userDetailsViewThietLapTabUpdateAvatarBtn/userDetailsViewThietLapTabUpdateAvatarBtn'
import { name as UserDetailsuserDetailsViewThietLapTabUpdateContactBtn } from '../userDetailsViewThietLapTabUpdateContactBtn/userDetailsViewThietLapTabUpdateContactBtn'


class UserDetailsViewThietLapTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

    }
}

const name = 'userDetailsViewThietLapTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    UserDetailsViewThietLapTabChangePasswordBtn,
    UserDetailsuserDetailsViewThietLapTabUpdateAvatarBtn,
    UserDetailsuserDetailsViewThietLapTabUpdateContactBtn
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewThietLapTab
});