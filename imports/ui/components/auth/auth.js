import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import template from './auth.html';
import { name as DisplayNameFilter } from '../../filters/common/displayNameFilter';
import { name as Login } from '../layout/login/login';
import { name as Register } from '../layout/register/register';
import { name as Password } from '../layout/password/password';

const name = 'auth';

class Auth {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            isLoggedIn() {
                return !!Meteor.userId();
            },
            currentUser() {
                return Meteor.user();
            }
        });
    }

    logout() {
        Accounts.logout();
    }
}

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
    Login,
    Register,
    Password
]).component(name, {
    template,
    controllerAs: name,
    controller: Auth
});