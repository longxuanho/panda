import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './userDetailsViewThietLapTabUpdateAvatarBtn.html';
import modalTemplate from './userDetailsViewThietLapTabUpdateAvatarModal.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class UserDetailsViewThietLapTabUpdateAvatarBtn {
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
                        // this.newTbisReport.noi_dung.text = $('iframe').contents().find("body").text() || this.newTbisReport.noi_dung.html;
                        // metadataService.buildNewMetadata(this.newTbisReport, Meteor.user());
                        // tbisReportsDataService.validateTbisReportsInputData(this.newTbisReport);
                        // tbisReportsDataService.buildSearchField(this.newTbisReport);
                        // tbisReportsDataService.addNew(this.newTbisReport).then(() => {
                        //     notificationService.success('Thông báo của bạn đã được ghi nhận vào Skynet.', 'Tạo mới thành công');
                        //     this.reset();
                        //     this.close();
                        // }).catch((err) => {
                        //     notificationService.error(err.message, 'Tạo mới thất bại');
                        // });
                    }
                    catch (error) {
                        // notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };
            },
            controllerAs: 'userDetailsViewThietLapTabUpdateAvatarModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'userDetailsViewThietLapTabUpdateAvatarBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    NotificationService,
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewThietLapTabUpdateAvatarBtn
});