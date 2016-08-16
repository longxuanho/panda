import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './userDetailsViewQuanLyTabUpdatePhanQuyenBtn.html';
import modalTemplate from './userDetailsViewQuanLyTabUpdatePhanQuyenModal.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


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

                this.cancel = () => {

                };

                this.changePassword = () => {
                    try {

                    }
                    catch (error) {

                    }
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
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUpdatePhanQuyenBtn
});