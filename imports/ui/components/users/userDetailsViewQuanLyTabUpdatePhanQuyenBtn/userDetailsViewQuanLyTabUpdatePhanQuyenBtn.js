import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import _ from 'underscore';

import template from './userDetailsViewQuanLyTabUpdatePhanQuyenBtn.html';
import modalTemplate from './userDetailsViewQuanLyTabUpdatePhanQuyenModal.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import { name as UserDetailsViewQuanLyTabUserLabel } from '../userDetailsViewQuanLyTabUserLabel/userDetailsViewQuanLyTabUserLabel';
import { name as UserDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab } from '../userDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab/userDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab';
import { name as UserDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab } from '../userDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab/userDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab';


class UserDetailsViewQuanLyTabUpdatePhanQuyenBtn {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, usersDataService, notificationService) {
                'ngInject';

                this.isModalOpen = true;
                this.selectedUser = angular.copy(usersDataService.getSelectedUser());
                this.selectedUserPhanQuyenDesc = angular.copy(this.selectedUser.profile.phan_quyen_desc) || [];

                usersDataService.querySelectedUserRoles(this.selectedUser._id, this.selectedUserRoles).then((result) => {
                    this.selectedUserRoles = result;
                }).catch((err) => {
                    notificationService.error(err.reason, 'Truy vấn thất bại');
                });

                this.updateSelectedUserPhanQuyenDesc = () => {
                    try {
                        usersDataService.validatePhanQuyenDesc(this.selectedUserPhanQuyenDesc);
                        usersDataService.updateSelectedUserPhanQuyenDesc(this.selectedUser._id, this.selectedUserPhanQuyenDesc).then(() => {
                            notificationService.success('Mô tả về phân quyền người dùng được cập nhật thành công.', 'Cập nhật thành công.');
                        }).catch((err) => {
                            notificationService.error(err.reason, 'Cập nhật thất bại');
                        });
                    } catch(error) {
                        notificationService.error(error.message, 'Thông tin không hợp lệ');
                    }

                };

                this.updateSelectedUserRoles = () => {
                    usersDataService.updateSelectedUserRoles(this.selectedUser._id, this.selectedUserRoles).then(() => {
                        notificationService.success('Thông tin phân quyền người dùng được cập nhật thành công.', 'Cập nhật thành công.');
                    }).catch((err) => {
                        notificationService.error(err.reason, 'Cập nhật thất bại');
                    });
                };

                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };
            },
            controllerAs: 'userDetailsViewQuanLyTabUpdatePhanQuyenModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'userDetailsViewQuanLyTabUpdatePhanQuyenBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    NotificationService,
    UserDetailsViewQuanLyTabUserLabel,
    UserDetailsViewQuanLyTabUpdatePhanQuyenModalThietLapTab,
    UserDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUpdatePhanQuyenBtn
});