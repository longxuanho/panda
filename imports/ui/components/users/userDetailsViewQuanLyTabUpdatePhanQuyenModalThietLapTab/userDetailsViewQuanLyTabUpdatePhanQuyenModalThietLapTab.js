import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

        this.selectedUserRoles = {
            rights: [],
            zones: [],
            assets: [],
            donvies: []
        }
    }
}

const name = 'userDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
]).component(name, {
    template,
    bindings: {
        // selectedUserRoles: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab
});