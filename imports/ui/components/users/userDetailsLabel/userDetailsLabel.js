import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsLabel.html';

// import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

import { name as UserName } from '../../../directives/common/userName';
import { name as UserAvatar } from '../../../directives/common/userAvatar';
import { name as UserStatus } from '../../../directives/common/userStatus';


class UserDetailsLabel {
    constructor($reactive, $scope, $stateParams) {
        'ngInject';
        $reactive(this).attach($scope);

        this.userId = $stateParams.userId;
    }
}

const name = 'userDetailsLabel';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserName,
    UserAvatar,
    UserStatus
]).component(name, {
    template,
    bindings: {
        userDetails: '<',
    },
    controllerAs: name,
    controller: UserDetailsLabel
});