import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTabLogOutUserBtn.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class UserDetailsViewQuanLyTabLogOutUserBtn {
    constructor($reactive, $scope, $mdToast, usersDataService, notificationService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.$mdToast = $mdToast;
        this.usersDataService = usersDataService;
        this.notificationService = notificationService;
    }

    logOutSelectedUser() {
        this.$mdToast.show({
            hideDelay: 5000,
            position : 'top right',
            controller: ($scope) => {
                'ngInject';
                $scope.yes = () => {
                    this.usersDataService.logOutSelectedUser(this.userDetails._id).then(() => {
                        this.notificationService.success('Tài khoản người dùng đã bị đăng xuất trên hệ thống.', 'Đăng xuất thành công');
                    }).catch((err) => {
                        this.notificationService.error(err.reason, 'Không thể đăng xuất người dùng');
                    });
                    this.$mdToast.hide();
                };
                $scope.no = () => {
                    this.$mdToast.hide();
                };
            },
            template : '<md-toast><span class="md-toast-text" flex>Đăng xuất người dùng khỏi hệ thống?<md-button class="md-highlight" ng-click="yes()">OK, tiếp tục!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
        });

    }

}

const name = 'userDetailsViewQuanLyTabLogOutUserBtn';

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
    controller: UserDetailsViewQuanLyTabLogOutUserBtn
});