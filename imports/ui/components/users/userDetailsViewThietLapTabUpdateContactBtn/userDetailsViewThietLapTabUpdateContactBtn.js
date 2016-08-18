import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './userDetailsViewThietLapTabUpdateContactBtn.html';
import modalTemplate from './userDetailsViewThietLapTabUpdateContactModal.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class UserDetailsViewThietLapTabUpdateContactBtn {
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
                this.lienHeData = angular.copy(Meteor.user().profile.lien_he);

                this.update = () => {
                    authDataService.updateCurrentUserContactInfo(this.lienHeData).then(() => {
                        notificationService.success('Thông tin liên hệ của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                        this.close();
                    }).catch((err) => {
                        notificationService.error(err.reason, 'Tạo mới thất bại');
                    });
                };

                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };
            },
            controllerAs: 'userDetailsViewThietLapTabUpdateContactModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'userDetailsViewThietLapTabUpdateContactBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    AuthDataService,
    NotificationService,
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewThietLapTabUpdateContactBtn
});