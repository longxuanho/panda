import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewMainReportDisplay.html';
import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as TbisDetailsViewKendoEditor } from '../tbisDetailsViewKendoEditor/tbisDetailsViewKendoEditor';

import { name as UserName } from '../../../directives/common/userName';
import { name as UserAvatar } from '../../../directives/common/userAvatar';

class TbisDetailsViewReportViewMainReportDisplay {
    constructor($scope, $reactive, tbisReportsDataService, notificationService, metadataService) {
        'ngInject';
        $reactive(this).attach($scope);
        this.tbisReportsDataService = tbisReportsDataService;
        this.notificationService = notificationService;
        this.metadataService = metadataService;

        this.helpers({
            currentUserId() {
                return Meteor.userId();
            }
        });
    }

    setEditMode() {
        this.newNoiDung = this.tbisReportsDataService.getSelectedTbisReport().noi_dung.html;
        this.isEditMode = true;
    }

    cancelUpdate() {
        this.isEditMode = false;
    }

    updateNoiDung() {
        if (!this.newNoiDung) {
            this.notificationService.error('Bạn cần gõ nội dung trước khi cập nhật', 'Không thể sửa đổi');
        }
        else {
            let newNoiDungObj = {
                html: this.newNoiDung,
                text: $('tbis-details-view-report-view-main-report-display iframe').contents().find("body").text() || ''
            };
            this.tbisReportsDataService.updateNoiDungSelectedTbisReport(newNoiDungObj).then(() => {
                this.notificationService.success('Nội dung thông báo được sửa đổi thành công.', 'Thay đổi nội dung');
                this.isEditMode = false;
            }).catch((err) => {
                this.notificationService.error(err.message, 'Không thể sửa đổi');
            });
        }

    }
}

const name = 'tbisDetailsViewReportViewMainReportDisplay';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
    DisplayRelativeTimeFilter,
    TbisReportsDataService,
    NotificationService,
    TbisDetailsViewKendoEditor,
    UserName,
    UserAvatar
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        metadata: '<',
        noiDung: '@',
        isEditable: '<'
    },
    controller: TbisDetailsViewReportViewMainReportDisplay
});