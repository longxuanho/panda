import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './tbisDetailsViewHistoryViewAddNewMiniFab.html';
import modalTemplate from './tbisDetailsViewHistoryViewAddNewModal.html';

import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as TbisHistoriesDataService } from '../../../services/thietbis/tbisHistoriesDataService';
import { name as MetaDataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import  { name as TbisDetailsViewHistoryViewTbisHistoryInputForm } from '../tbisDetailsViewHistoryViewTbisHistoryInputForm/tbisDetailsViewHistoryViewTbisHistoryInputForm';

class TbisDetailsViewHistoryViewAddNewMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisHistoriesDataService, tbisDataService, metadataService, notificationService) {
                'ngInject';

                this.isModalOpen = true;
                this.seletedThietBi = angular.copy(tbisDataService.getSelectedThietBi());
                this.newTbisHistory = tbisHistoriesDataService.initNewTbisHistoryData(this.seletedThietBi);


                this.reset = () => {
                    this.newTbisHistory = tbisHistoriesDataService.initNewTbisHistoryData(this.seletedThietBi);
                };

                this.addNew = () => {
                    try {
                        if (this.newTbisHistory.ghi_chu.html)
                            this.newTbisHistory.ghi_chu.text = $('#tbis-details-add-new-history-modal iframe').contents().find("body").text() || this.newTbisHistory.ghi_chu.html;
                        metadataService.buildNewMetadata(this.newTbisHistory, Meteor.user());
                        tbisHistoriesDataService.buildTimeString(this.newTbisHistory);
                        tbisHistoriesDataService.solveStatistics(this.newTbisHistory);
                        tbisHistoriesDataService.validateTbisHistoryInputData(this.newTbisHistory);
                        tbisHistoriesDataService.addNew(this.newTbisHistory).then(() => {
                            notificationService.success('Nhật ký sửa chữa của bạn đã được ghi nhận vào Skynet.', 'Tạo mới thành công');
                            this.reset();
                            this.close();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Tạo mới thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };


            },
            controllerAs: 'tbisDetailsViewHistoryViewAddNewModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'tbisDetailsViewHistoryViewAddNewMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataService,
    TbisHistoriesDataService,
    MetaDataService,
    NotificationService,
    TbisDetailsViewHistoryViewTbisHistoryInputForm
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewAddNewMiniFab
});