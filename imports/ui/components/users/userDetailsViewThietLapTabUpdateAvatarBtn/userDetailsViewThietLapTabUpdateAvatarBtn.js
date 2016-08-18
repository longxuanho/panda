import angular from 'angular';
import angularMeteor from 'angular-meteor';

import 'angular-md5';

import { Meteor } from 'meteor/meteor';

import template from './userDetailsViewThietLapTabUpdateAvatarBtn.html';
import modalTemplate from './userDetailsViewThietLapTabUpdateAvatarModal.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import { name as ImageFallback } from '../../../directives/common/imageFallback';

class UserDetailsViewThietLapTabUpdateAvatarBtn {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($scope, $mdDialog, authDataService, notificationService, md5) {
                'ngInject';

                this.isModalOpen = true;

                this.userAvatar = angular.copy(Meteor.user().profile.avatar);
                this.previewAvatar = '';

                $scope.$watch('userDetailsViewThietLapTabUpdateAvatarModal.userAvatar.isGAvatar', (newVal, oldVal) => {
                    if (newVal) this.userAvatar.url = undefined;
                    if (oldVal) { this.userAvatar.gAvatarUrl = undefined; this.userAvatar.gAvatarEmail = undefined;}
                });

                this.update = () => {
                    authDataService.updateCurrentUserAvatar(this.userAvatar).then(() => {
                        notificationService.success('Avatar của bạn đã được cập nhật thành công.', 'Cập nhật thành công');
                        this.close();
                    }).catch((err) => {
                        notificationService.error(err.reason, 'Cập nhật thất bại');
                    });
                };

                this.updatePreviewAvatar = () => {
                    if (this.userAvatar)
                        this.previewAvatar = (this.userAvatar.isGAvatar) ? this.userAvatar.gAvatarUrl : this.userAvatar.url;
                };

                this.updateGAvatar = () => {
                    if (this.userAvatar.gAvatarEmail)
                        this.userAvatar.gAvatarUrl = 'https://www.gravatar.com/avatar/' + md5.createHash(this.userAvatar.gAvatarEmail);
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
    'angular-md5',
    AuthDataService,
    NotificationService,
    ImageFallback
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetailsViewThietLapTabUpdateAvatarBtn
});