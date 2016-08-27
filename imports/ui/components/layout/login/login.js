import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as NotificationService } from '../../../services/common/notificationService';
import { name as AuthDataService } from '../../../services/users/authDataService';

import template from './login.html';

class Login {
    constructor($scope, $reactive, $state, notificationService, authDataService) {
        'ngInject';

        this.$state = $state;
        this.notificationService = notificationService;
        this.authDataService = authDataService;

        $reactive(this).attach($scope);

        this.credentials = {
            email: '',
            password: ''
        };

        this.isLogging = false;
    }

    login() {
        this.isLogging = true;
        this.authDataService.login(this.credentials).then(() => {
            this.notificationService.success('Welcome back : )', 'Đăng nhập thành công');
            this.$state.go('workspacesList');
        }).catch((err) => {
            this.isLogging = false;
            this.notificationService.error(err.reason, 'Đăng nhập thất bại');
        });
    }
}

const name = 'login';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    NotificationService,
    AuthDataService
])
    .component(name, {
        template,
        controllerAs: name,
        controller: Login
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('login', {
        url: '/login',
        template: '<login></login>'
    });
}