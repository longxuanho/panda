import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as UserDetailsViewQuanLyTabUpdateThongTinBtn } from '../userDetailsViewQuanLyTabUpdateThongTinBtn/userDetailsViewQuanLyTabUpdateThongTinBtn';
import { name as UserDetailsViewQuanLyTabUpdatePhanQuyenBtn } from '../userDetailsViewQuanLyTabUpdatePhanQuyenBtn/userDetailsViewQuanLyTabUpdatePhanQuyenBtn';


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
    UserDetailsViewQuanLyTabUpdatePhanQuyenBtn
]).component(name, {
    template,
    bindings: {
    },
    controllerAs: name,
    controller: UserDetailsViewQuanLyTab
});