import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Random} from 'meteor/random';

import ngMessages from 'angular-messages';

import fabTemplate from './tbisDetailsImageMiniFab.html';
import modalTemplate from './tbisDetailsImageModal.html';

import { name as TbisDetailsImageQuanLyTab } from '../tbisDetailsImageQuanLyTab/tbisDetailsImageQuanLyTab';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';

// import { name as MetadataService } from '../../../services/common/metadataService';
// import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
// import { name as TbisDetailsUpdateThongSoTab } from '../tbisDetailsUpdateThongSoTab/tbisDetailsUpdateThongSoTab';
// import { name as TbisDetailsUpdateViTriTab } from '../tbisDetailsUpdateViTriTab/tbisDetailsUpdateViTriTab';

import { name as NotificationService } from '../../../services/common/notificationService';
// import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';


class TbisDetailsImageMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;

    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, notificationService) {
                'ngInject';


                this.tabSelected = '';
                this.tabModeSelected = 'addNew';
                this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());

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

                this.resetImages = () => {
                    this.thietbi = this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                };

                this.addNewImage = () => {
                    try {
                        this.newImage.ngay_tao = new Date();
                        tbisDataService.addNewImage(this.newImage).then(() => {
                            tbisDataService.validateNewImageInputData(this.newImage);
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

                this.setDefaultImage = (imageId) => {
                    // Cập nhật lại cờ isDefault trong Collections
                    _.each(this.thietbi.hinh_anh.collections, (item) => {
                        item.isDefault = (item._id === imageId) ? true : false;
                    });
                    // Cập nhật thông tin về hinh_anh.default
                    this.thietbi.hinh_anh.default = _.find(this.thietbi.hinh_anh.collections, (item) => {
                        return item._id = imageId
                    });
                    this.updateImages();
                };

                this.updateImages = () => {
                    tbisDataService.updateImages(this.thietbi).then(() => {
                        notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                        this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                    }).catch((err) => {
                        notificationService.error(err.message, 'Cập nhật thất bại');
                    });
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