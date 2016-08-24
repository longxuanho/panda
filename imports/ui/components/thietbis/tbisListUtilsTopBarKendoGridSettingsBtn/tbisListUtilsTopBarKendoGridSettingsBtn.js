import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './tbisListUtilsTopBarKendoGridSettingsBtn.html';
import modalTemplate from './tbisListUtilsTopBarKendoGridSettingsModal.html';

import { name as TbisListUtilsTopBarKendoGridSettingsModalHienThiTab } from '../tbisListUtilsTopBarKendoGridSettingsModalHienThiTab/tbisListUtilsTopBarKendoGridSettingsModalHienThiTab';
import { name as TbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab } from '../tbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab/tbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab';

// import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';

class TbisListUtilsTopBarKendoGridSettingsBtn {
    constructor($mdDialog, $mdMedia) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisReportsDataService, metadataService, notificationService) {
                'ngInject';

                this.isModalOpen = true;
                // this.seletedThietBi = angular.copy(tbisDataService.getSelectedThietBi());
                // this.newTbisReport = tbisReportsDataService.initNewTbisReportsData(this.seletedThietBi);

                this.reset = () => {
                    this.newTbisReport = tbisReportsDataService.initNewTbisReportsData(this.seletedThietBi);
                };

                this.addNew = () => {
                    try {
                        this.newTbisReport.noi_dung.text = $('iframe').contents().find("body").text() || this.newTbisReport.noi_dung.html;
                        metadataService.buildNewMetadata(this.newTbisReport, Meteor.user());
                        tbisReportsDataService.validateTbisReportsInputData(this.newTbisReport);
                        tbisReportsDataService.buildSearchField(this.newTbisReport);
                        tbisReportsDataService.addNew(this.newTbisReport).then(() => {
                            notificationService.success('Thông báo của bạn đã được ghi nhận vào Skynet.', 'Tạo mới thành công');
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
            controllerAs: 'tbisListUtilsTopBarKendoGridSettingsModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'tbisListUtilsTopBarKendoGridSettingsBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListUtilsTopBarKendoGridSettingsModalHienThiTab,
    TbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisListUtilsTopBarKendoGridSettingsBtn
});