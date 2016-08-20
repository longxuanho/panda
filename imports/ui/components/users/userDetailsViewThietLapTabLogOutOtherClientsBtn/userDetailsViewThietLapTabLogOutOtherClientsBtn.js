import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewThietLapTabLogOutOtherClientsBtn.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class UserDetailsViewThietLapTabLogOutOtherClientsBtn {
    constructor($reactive, $scope, $mdToast, authDataService, notificationService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.$mdToast = $mdToast;
        this.authDataService = authDataService;
        this.notificationService = notificationService;
    }

    logOutOtherClients() {
        this.$mdToast.show({
            hideDelay: 5000,
            position : 'top right',
            controller: ($scope) => {
                'ngInject';
                $scope.yes = () => {
                    this.authDataService.logOutOtherClients().then(() => {
                        this.notificationService.success('Tài khoản của bạn đã được đăng xuất trên các thiết bị khác.', 'Đăng xuất thành công');
                    }).catch((err) => {
                        this.notificationService.error(err.reason, 'Không thể đăng xuất');
                    });
                    this.$mdToast.hide();
                };
                $scope.no = () => {
                    this.$mdToast.hide();
                };
            },
            template : '<md-toast><span class="md-toast-text" flex>Đăng xuất tài khoản của tôi trên các thiết bị khác?<md-button class="md-highlight" ng-click="yes()">OK, tiếp tục!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
        });

    }

}

const name = 'userDetailsViewThietLapTabLogOutOtherClientsBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    AuthDataService,
    NotificationService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        userDetails: '<'
    },
    controller: UserDetailsViewThietLapTabLogOutOtherClientsBtn
});