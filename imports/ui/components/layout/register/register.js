import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import { name as NotificationService } from '../../../services/common/notificationService';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';

import template from './register.html';

class Register {
    constructor($scope, $reactive, $state, notificationService, authDataService, tbisPhanQuyenDataService) {
        'ngInject';

        $reactive(this).attach($scope);


        this.subscribe('tbishelpers');

        this.helpers({
            donviesOptions() {
                tbisPhanQuyenDataService.queryAll();
                return tbisPhanQuyenDataService.getSelectOptions();
            }
        });

        this.$state = $state;
        this.notificationService = notificationService;
        this.authDataService = authDataService;

        this.credentials = {
            email: '',
            password: '',
            profile: {}
        };

        this.error = '';
    }

    register() {
        this.authDataService.register(this.credentials).then(() => {
            this.notificationService.success('Chào mừng bạn đến với Skynet : )', 'Đăng ký thành công');
            this.$state.go('parties');
        }).catch((err) => {
            this.notificationService.error(err.reason, 'Đăng ký thất bại');
        });
    }
}

const name = 'register';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    NotificationService,
    AuthDataService,
    TbisPhanQuyenDataService
])
    .component(name, {
        template,
        controllerAs: name,
        controller: Register
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider.state('register', {
        url: '/register',
        template: '<register></register>'
    });
}