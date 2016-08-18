import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './userDetailsViewThietLapTabChangePasswordBtn.html';
import modalTemplate from './userDetailsViewThietLapTabChangePasswordModal.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class UserDetailsViewThietLapTabChangePasswordBtn {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, authDataService, notificationService) {
                'ngInject';

                this.isModalOpen = true;

                this.changePassword = () => {
                    try {
                        this.validatePasswordMatch();
                        authDataService.changeCurrentUserPassword(this.credentials).then(() => {
                            notificationService.success('Mật khẩu đăng nhập của bạn đã được thay đổi thành công.', 'Đổi mật khẩu thành công.');
                            this.close();
                        }).catch((err) => {
                            notificationService.error(err.reason, 'Đổi mật khẩu thất bại');
                        });
                    } catch (error) {
                        notificationService.error(error.message, 'Xác nhận mật khẩu');
                    }
                };

                this.validatePasswordMatch = () => {
                    if (this.credentials.repeatNewPassword !== this.credentials.newPassword)
                        throw new Error('Xác nhận mật khẩu mới của bạn không khớp. Vui lòng thử lại.')
                };

                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };
            },
            controllerAs: 'userDetailsViewThietLapTabChangePasswordModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'userDetailsViewThietLapTabChangePasswordBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    AuthDataService,
    NotificationService,
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewThietLapTabChangePasswordBtn
});