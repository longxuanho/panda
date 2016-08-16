import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './usersListSearchForm.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UsersListSearchForm {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);
    }

    submit() {
        console.log('submited!');
    }
}

const name = 'usersListSearchForm';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: UsersListSearchForm
});