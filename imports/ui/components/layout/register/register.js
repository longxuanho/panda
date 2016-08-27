import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

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
            donvisOptions() {
                tbisPhanQuyenDataService.queryAll();
                return tbisPhanQuyenDataService.getSelectOptions().donvis;
            }
        });

        this.isRegistering = false;
        this.$state = $state;
        this.notificationService = notificationService;
        this.authDataService = authDataService;

        this.credentials = {
            email: '',
            password: '',
            profile: {
                name: 'Đang chờ kiểm duyệt...'
            }
        };

        this.error = '';
    }

    register() {
        this.isRegistering = true;
        this.authDataService.register(this.credentials).then(() => {
            this.notificationService.success('Chào mừng đến với Skynet!', 'Đăng ký thành công');
            this.$state.go('workspacesList');
        }).catch((err) => {
            this.isRegistering = false;
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