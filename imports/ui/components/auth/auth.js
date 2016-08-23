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
import { name as NotificationService } from '../../services/common/notificationService';
import { name as WorkspacesDataService } from '../../services/workspaces/workspacesDataService';

import { name as UserAvatar } from '../../directives/common/userAvatar';

const name = 'auth';

class Auth {
    constructor($scope, $reactive, $state, currentUserService, userLocalSettingsService, notificationService, workspacesDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.currentUserService = currentUserService;
        this.userLocalSettingsService = userLocalSettingsService;
        this.notificationService = notificationService;
        this.workspacesDataService = workspacesDataService;
        this.$state = $state;

        this.helpers({
            isLoggedIn() {
                return !!Meteor.userId();
            },
            currentUserId() {
                return Meteor.userId();
            },
            currentUser() {
                this.currentUserService.setCurrentUser(Meteor.user());
                this.userLocalSettingsService.initCurrentUserLocalSettings(this.currentUserService.getCurrentUser());

                return Meteor.user();
            }
        });

        $scope.$watch('auth.currentUserId', (newVal) => {
            // Khi có sự thay đổi về Id người dùng -> refresh lại đường dẫn tới url trong navSideBar và workspace
            this.workspacesDataService.setUserProfileUrl(Meteor.userId());
            if (!newVal) {
                // Nếu người dùng logout/bị logout khỏi hệ thống -> Chuyển tới login
                this.$state.go('login');
            }
        });
    }

    logout() {
        this.currentUserService.setCurrentUser({});
        this.userLocalSettingsService.initDefaultCurrentUserLocalSettings();
        Accounts.logout();
        this.$state.go('login');
        this.notificationService.success('Bye : )', "Đăng xuất thành công");
    }
}

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
    UserAvatar,
    Login,
    Register,
    Password,
    ResetPassword,
    CurrentUserService,
    UserLocalSettingsService,
    NotificationService,
    WorkspacesDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: Auth
});