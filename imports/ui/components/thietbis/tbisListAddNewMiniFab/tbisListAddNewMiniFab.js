import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';
import { Meteor } from 'meteor/meteor';

import _ from 'underscore';
import fabTemplate from './tbisListAddNewMiniFab.html';
import modalTemplate from './tbisListAddNewModal.html';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class TbisListAddNewMiniFab {
    constructor($scope, $mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($scope, $mdDialog, tbisDataService, metadataService, notificationService) {
                'ngInject';

                this.newThietBi = tbisDataService.initNewThietBiData();

                this.addNew = () => {
                    try {
                        metadataService.buildNewMetadata(this.newThietBi, Meteor.user());
                        tbisDataService.validateMajorInputThietBiData(this.newThietBi);
                        tbisDataService.addNew(this.newThietBi).then(() => {
                            notificationService.success('Thiết bị của bạn đã được ghi nhận vào Skynet.', 'Tạo mới thành công');
                            this.reset();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Tạo mới thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.reset = () => {
                    $scope.$broadcast('reset-tbis-list-major-input-form');
                    this.newThietBi = tbisDataService.initNewThietBiData();
                };

                this.close = () => {
                    $mdDialog.hide();
                };
            },
            controllerAs: 'tbisListAddNewModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'tbisListAddNewMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    TbisListMajorInputForm,
    TbisDataSerivce,
    MetadataService,
    NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisListAddNewMiniFab
});