import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

    }
}

const name = 'userDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
]).component(name, {
    template,
    bindings: {
        selectedUserRoles: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab
});