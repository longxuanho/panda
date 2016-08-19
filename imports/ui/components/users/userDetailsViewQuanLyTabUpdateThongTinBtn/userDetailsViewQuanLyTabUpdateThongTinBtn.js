import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './userDetailsViewQuanLyTabUpdateThongTinBtn.html';
import modalTemplate from './userDetailsViewQuanLyTabUpdateThongTinModal.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as UserDetailsViewQuanLyTabUserLabel } from '../userDetailsViewQuanLyTabUserLabel/userDetailsViewQuanLyTabUserLabel';

class UserDetailsViewQuanLyTabUpdateThongTinBtn {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, usersDataService, notificationService) {
                'ngInject';

                this.selectedUser = angular.copy(usersDataService.getSelectedUser());
                this.isModalOpen = true;

                this.update = () => {
                    usersDataService.updateSelectedUserProfile(this.selectedUser._id, this.selectedUser.profile).then(() => {
                        notificationService.success('Thông tin hồ sơ người dùng được cập nhật thành công.', 'Cập nhật thành công.');
                        this.close();
                    }).catch((err) => {
                        notificationService.error(err.reason, 'Cập nhật thất bại');
                    });
                };

                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };
            },
            controllerAs: 'userDetailsViewQuanLyTabUpdateThongTinModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'userDetailsViewQuanLyTabUpdateThongTinBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    NotificationService,
    UserDetailsViewQuanLyTabUserLabel
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUpdateThongTinBtn
});