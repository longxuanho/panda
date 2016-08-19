import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

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

                this.update = () => {
                    usersDataService.updateSelectedUserRoles(this.selectedUser._id, this.selectedUserRoles).then(() => {
                        notificationService.success('Thông tin phân quyền người dùng được cập nhật thành công.', 'Cập nhật thành công.');
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