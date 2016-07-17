import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import fabTemplate from './tbisDetailsUpdateMiniFab.html';
import modalTemplate from './tbisDetailsUpdateModal.html';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
import { name as TbisDetailsUpdateThongSoTab } from '../tbisDetailsUpdateThongSoTab/tbisDetailsUpdateThongSoTab';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class TbisDetailsUpdateMiniFab {
    constructor($mdDialog, $mdMedia, $timeout) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, metadataService, notificationService, $stateParams) {
                'ngInject';

                tbisDataService.setSelectedThietBi($stateParams.thietbiId);
                this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                
                this.save = () => {
                    try {
                        metadataService.buildUpdateMetadata(this.thietbi, Meteor.user());
                        tbisDataService.validateMajorInputThietBiData(this.thietbi);
                        tbisDataService.updateMajorForm(this.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            tbisDataService.setSelectedThietBi($stateParams.thietbiId);
                            this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.reset = () => {
                    this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                };

                this.close = () => {
                    $mdDialog.hide();
                };
            },
            controllerAs: 'tbisDetailsUpdateModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsUpdateMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    TbisListMajorInputForm,
    TbisDetailsUpdateThongSoTab,
    TbisDataSerivce,
    MetadataService,
    NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisDetailsUpdateMiniFab
});