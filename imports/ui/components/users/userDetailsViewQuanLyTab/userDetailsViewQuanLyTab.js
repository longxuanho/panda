import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as UserDetailsViewQuanLyTabUpdateThongTinBtn } from '../userDetailsViewQuanLyTabUpdateThongTinBtn/userDetailsViewQuanLyTabUpdateThongTinBtn';
import { name as UserDetailsViewQuanLyTabUpdatePhanQuyenBtn } from '../userDetailsViewQuanLyTabUpdatePhanQuyenBtn/userDetailsViewQuanLyTabUpdatePhanQuyenBtn';
import { name as UserDetailsViewQuanLyTabLogOutUserBtn } from '../userDetailsViewQuanLyTabLogOutUserBtn/userDetailsViewQuanLyTabLogOutUserBtn';
import { name as UserDetailsViewQuanLyTabVerifyUserBtn } from '../userDetailsViewQuanLyTabVerifyUserBtn/userDetailsViewQuanLyTabVerifyUserBtn';


class UserDetailsViewQuanLyTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);
    }

}

const name = 'userDetailsViewQuanLyTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    UserDetailsViewQuanLyTabUpdateThongTinBtn,
    UserDetailsViewQuanLyTabUpdatePhanQuyenBtn,
    UserDetailsViewQuanLyTabLogOutUserBtn,
    UserDetailsViewQuanLyTabVerifyUserBtn
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewQuanLyTab
});