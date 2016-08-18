import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './resetPassword.html';

import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class ResetPassword {
    constructor($scope, $reactive, $state, $stateParams, authDataService, notificationService) {
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.notificationService = notificationService;
        this.authDataService = authDataService;

        this.isResetting = false;

        this.credentials = {
            token: $stateParams.token,
            password: '',
            repeatPassword: ''
        };
    }

    reset() {
        try {
            this.verifyPasswordMatch();

            this.isResetting = true;
            this.authDataService.resetPassword(this.credentials).then(() => {
                this.notificationService.success('Mật khẩu của bạn đã được khôi phục thành công.', 'Reset mật khẩu thành công');
                this.$state.go('parties');
            }).catch((err) => {
                this.isResetting = false;
                this.notificationService.error(err.reason, 'Reset mật khẩu thất bại');
            });
        }
        catch (error) {
            this.notificationService.error(error.message, 'Opps!');
        }
    }

    verifyPasswordMatch() {
        if (this.credentials.password !== this.credentials.repeatPassword)
            throw Error('Mật khẩu mới và mật khẩu xác nhận không khớp. Xin thử lại.');
    }
}

const name = 'resetPassword';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    AuthDataService,
    NotificationService
])
    .component(name, {
        template,
        controllerAs: name,
        controller: ResetPassword
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('resetPassword', {
        url: '/reset-password/:token',
        template: '<reset-password></reset-password>'
    });
}