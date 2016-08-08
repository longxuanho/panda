import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './userResolver.html';
import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';

class UserResolver {
    constructor($scope) {
        'ngInject';

        $scope.viewModel(this);

        this.helpers({
            user() {
                if (!this.userObj) {
                    return '';
                }

                const userId = this.userObj.keyId;

                if (Meteor.userId() !== null && userId === Meteor.userId()) {
                    return 'tôi';
                }

                return Meteor.users.findOne(userId) || 'Vô danh';
            }
        });
    }
}

const name = 'userResolver';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        userObj: '<'
    },
    controller: UserResolver
});