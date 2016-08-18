import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import template from './auth.html';
import { name as DisplayNameFilter } from '../../filters/common/displayNameFilter';
import { name as Login } from '../layout/login/login';
import { name as Register } from '../layout/register/register';
import { name as Password } from '../layout/password/password';
import { name as ResetPassword } from '../layout/resetPassword/resetPassword';


import { name as CurrentUserService } from '../../services/common/currentUserService';
import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';

const name = 'auth';

class Auth {
    constructor($scope, $reactive, currentUserService, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.currentUserService = currentUserService;
        this.userLocalSettingsService = userLocalSettingsService;


        this.helpers({
            isLoggedIn() {
                return !!Meteor.userId();
            },
            currentUser() {
                this.currentUserService.setCurrentUser(Meteor.user());
                this.userLocalSettingsService.initCurrentUserLocalSettings(this.currentUserService.getCurrentUser());
                return Meteor.user();
            }
        });
    }

    logout() {
        this.currentUserService.setCurrentUser({});
        this.userLocalSettingsService.initDefaultCurrentUserLocalSettings();
        Accounts.logout();
    }
}

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
    Login,
    Register,
    Password,
    ResetPassword,
    CurrentUserService,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: Auth
});