import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewMainReportTitle.html';
import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisDetailsViewReportViewMainReportTitle {
    constructor($scope, $reactive, tbisReportsDataService, notificationService) {
        'ngInject';
        $reactive(this).attach($scope);
        this.tbisReportsDataService = tbisReportsDataService;
        this.notificationService = notificationService;

        this.helpers({
            currentUserId() {
                return Meteor.userId();
            }
        });
    }

    setEditMode() {
        this.newTitle = this.tbisReportsDataService.getSelectedTbisReport().tieu_de;
        this.isEditMode = true;
    }

    cancelEdit() {
        this.isEditMode = false;
    }

    updateTitle() {
        if (!this.newTitle) {
            this.notificationService.error('Bạn cần gõ tiêu đề trước khi cập nhật', 'Không thể sửa đổi');
        }
        else {
            this.tbisReportsDataService.updateTieuDeSelectedTbisReport(this.newTitle).then(() => {
                this.notificationService.success('Tiêu đề thông báo được sửa đổi thành công.', 'Thay đổi tiêu đề');
                this.isEditMode = false;
            }).catch((err) => {
                this.notificationService.error(err.reason, 'Không thể sửa đổi');
            });
        }
    }
}

const name = 'tbisDetailsViewReportViewMainReportTitle';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisReportsDataService,
    NotificationService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        title: '@',
        commentsLength: '@',
        metadata: '<',
        isEditable: '<'
    },
    controller: TbisDetailsViewReportViewMainReportTitle
});