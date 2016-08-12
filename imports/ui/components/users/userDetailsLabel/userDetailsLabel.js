import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsLabel.html';

// import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class UserDetailsLabel {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);


    }
}

const name = 'userDetailsLabel';

// create a module
export default angular.module(name, [
    angularMeteor,
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsLabel
});