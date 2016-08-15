import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuyenHanTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetailsViewQuyenHanTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

    }
}

const name = 'userDetailsViewQuyenHanTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewQuyenHanTab
});