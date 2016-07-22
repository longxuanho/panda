import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Random} from 'meteor/random';

import _ from 'underscore';
import ngMessages from 'angular-messages';

import fabTemplate from './tbisDetailsImageMiniFab.html';
import modalTemplate from './tbisDetailsImageModal.html';

import { name as TbisDetailsImageQuanLyTab } from '../tbisDetailsImageQuanLyTab/tbisDetailsImageQuanLyTab';


import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

// import { name as MetadataService } from '../../../services/common/metadataService';
// import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
// import { name as TbisDetailsUpdateThongSoTab } from '../tbisDetailsUpdateThongSoTab/tbisDetailsUpdateThongSoTab';
// import { name as TbisDetailsUpdateViTriTab } from '../tbisDetailsUpdateViTriTab/tbisDetailsUpdateViTriTab';


// import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';


class TbisDetailsImageMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;

    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, notificationService, $mdToast) {
                'ngInject';

                this.tabSelected = '';
                this.tabModeSelected = 'addNew';
                this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                this.selectedImage = {};

                this.newImage = {
                    _id: Random.id(),
                    isDefault: false
                };

                this.close = () => {
                    $mdDialog.hide();
                };

                this.resetNewImage = () => {
                    this.newImage = {
                        _id: Random.id(),
                        isDefault: false
                    }
                };

                this.resetSelectedImage = () => {
                    this.selectedImage = _.find(tbisDataService.getSelectedThietBi().hinh_anh.collections, (item) => {
                        return item._id === this.selectedImage._id;
                    });
                };

                this.addNewImage = () => {
                    try {
                        this.newImage.ngay_tao = new Date();
                        tbisDataService.validateImageInputData(this.newImage);
                        tbisDataService.addNewImage(this.newImage).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                            this.resetNewImage();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.removeImage = () => {
                    $mdToast.show({
                        hideDelay: 5000,
                        position : 'top right',
                        controller: ($scope) => {
                            'ngInject';
                            $scope.yes = () => {
                                tbisDataService.removeSelectedImage(this.selectedImage).then(() => {
                                    notificationService.success('Hình ảnh đã được gỡ bỏ khỏi Skynet.', 'Gỡ bỏ thành công');
                                    this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                                    this.selectedImage = {};
                                }).catch((err) => {
                                    notificationService.error(err.message, 'Gỡ bỏ thất bại');
                                });
                                $mdToast.hide();
                            };
                            $scope.no = () => {
                                $mdToast.hide();
                            };
                        },
                        template : '<md-toast><span class="md-toast-text" flex>Gỡ bỏ hình ảnh này?<md-button class="md-highlight" ng-click="yes()">OK, gỡ bỏ!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
                    });
                };

                this.updateSelectedImage = () => {
                    try {
                        tbisDataService.validateImageInputData(this.selectedImage);
                        tbisDataService.updateSelectedImage(this.selectedImage).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                            this.selectedImage = {};
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };
            },
            controllerAs: 'tbisDetailsImageModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsImageMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    TbisDetailsImageQuanLyTab,
    TbisDataSerivce,
    // TbisListMajorInputForm,
    // TbisDetailsUpdateThongSoTab,
    // TbisDetailsUpdateViTriTab,

    // MetadataService,
    // TsktThongSoKyThuatDataService,
    NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisDetailsImageMiniFab
});