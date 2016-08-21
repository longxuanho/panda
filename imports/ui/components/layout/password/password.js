import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './password.html';

import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class Password {
    constructor($scope, $reactive, $state, authDataService, notificationService) {
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.notificationService = notificationService;
        this.authDataService = authDataService;

        this.isResetting = false;

        this.credentials = {
            email: ''
        };

        this.error = '';
    }

    reset() {
        this.isResetting = true;
        this.authDataService.forgotPassword(this.credentials).then(() => {
            this.notificationService.success('Chúng tôi đã gửi mã token reset mật khẩu tới email của bạn.', 'Gửi token thành công');
            this.$state.go('login');
        }).catch((err) => {
            this.isResetting = false;
            this.notificationService.error(err.reason, 'Gửi token thất bại');
        });
    }
}

const name = 'password';

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
        controller: Password
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('password', {
        url: '/password',
        template: '<password></password>'
    });
}