import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './tbisDetailsViewReportViewAddNewMiniFab.html';
import modalTemplate from './tbisDetailsViewReportViewAddNewModal.html';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as TbisReportDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as MetaDataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class TbisDetailsViewReportViewAddNewMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisReportsDataService, tbisDataService, metadataService, notificationService) {
                'ngInject';

                this.isModalOpen = true;
                this.kendoEditorOptions = {
                    tools: [
                        // "formatting", "foreColor",
                        "cleanFormatting", "bold", "italic", "underline", "insertUnorderedList", "insertOrderedList", "indent", "outdent", "insertImage", "createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn"
                    ],
                    serialization: {
                        entities: false,
                        scripts: true
                    }
                };
                this.seletedThietBi = angular.copy(tbisDataService.getSelectedThietBi());
                this.newTbisReport = tbisReportsDataService.initNewTbisReportsData(this.seletedThietBi);

                this.reset = () => {
                    this.newTbisReport = tbisReportsDataService.initNewTbisReportsData(this.seletedThietBi);
                };

                this.addNew = () => {
                    try {
                        this.newTbisReport.noi_dung.text = $('iframe').contents().find("body").text() || this.newTbisReport.noi_dung.html;
                        metadataService.buildNewMetadata(this.newTbisReport, Meteor.user());
                        tbisReportsDataService.validateTbisReportsInputData(this.newTbisReport);
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
            controllerAs: 'tbisDetailsViewReportViewAddNewModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'tbisDetailsViewReportViewAddNewMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataService,
    TbisReportDataService,
    MetaDataService,
    NotificationService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewAddNewMiniFab
});