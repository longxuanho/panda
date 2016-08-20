import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTabVerifyUserBtn.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class UserDetailsViewQuanLyTabVerifyUserBtn {
    constructor($reactive, $scope, $mdToast, notificationService, usersDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.$mdToast = $mdToast;
        this.notificationService = notificationService;
        this.usersDataService = usersDataService;
    }

    verifySelectedUserEmail() {
        this.$mdToast.show({
            hideDelay: 5000,
            position : 'top right',
            controller: ($scope) => {
                'ngInject';
                $scope.yes = () => {
                    this.usersDataService.verifySelectedUserEmail(this.userDetails._id).then(() => {
                        this.notificationService.success('Tài khoản người dùng đã được xác thực trên hệ thống.', 'Xác thực thành công');
                    }).catch((err) => {
                        this.notificationService.error(err.reason, 'Xác thực thất bại');
                    });
                    this.$mdToast.hide();
                };
                $scope.no = () => {
                    this.$mdToast.hide();
                };
            },
            template : '<md-toast><span class="md-toast-text" flex>Xác thực người dùng này?<md-button class="md-highlight" ng-click="yes()">OK, tiếp tục!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
        });
    }

    rejectSelectedUserEmail() {
        this.$mdToast.show({
            hideDelay: 5000,
            position : 'top right',
            controller: ($scope) => {
                'ngInject';
                $scope.yes = () => {
                    this.usersDataService.rejectSelectedUserEmail(this.userDetails._id).then(() => {
                        this.notificationService.success('Tài khoản người dùng đã bị vô hiệu trên hệ thống.', 'Vô hiệu hóa thành công');
                    }).catch((err) => {
                        this.notificationService.error(err.reason, 'Không thể vô hiệu người dùng');
                    });
                    this.$mdToast.hide();
                };
                $scope.no = () => {
                    this.$mdToast.hide();
                };
            },
            template : '<md-toast><span class="md-toast-text" flex>Vô hiệu hóa người dùng này?<md-button class="md-highlight" ng-click="yes()">OK, tiếp tục!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
        });
    }
}

const name = 'userDetailsViewQuanLyTabVerifyUserBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    NotificationService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        userDetails: '<'
    },
    controller: UserDetailsViewQuanLyTabVerifyUserBtn
});