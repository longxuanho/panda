import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewCommentItem.html';

// import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';

import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as CurrentUserService } from '../../../services/common/currentUserService';
import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as TbisDetailsViewKendoEditor } from '../tbisDetailsViewKendoEditor/tbisDetailsViewKendoEditor';

import { name as UserName } from '../../../directives/common/userName';

class TbisDetailsViewReportViewCommentItem {
    constructor(currentUserService, tbisReportsDataService, notificationService) {
        'ngInject';
        this.tbisReportsDataService = tbisReportsDataService;
        this.notificationService = notificationService;
        this.currentUserId = currentUserService.getCurrentUser()._id;
    }

    setEditMode() {
        this.newNoiDung = _.find(this.tbisReportsDataService.getSelectedTbisReport().comments, (item) => {
            return item._id === this.comment._id;
        }).noi_dung.html;
        this.isEditMode = true;
    }

    cancelUpdate() {
        this.isEditMode = false;
    }

    updateSelectedComment() {
        if (!this.newNoiDung) {
            this.notificationService.error('Bạn cần nhập nội dung trao đổi trước khi cập nhật', 'Không thể sửa đổi');
        }
        else {
            let componentId = 'comment-' + this.comment._id;
            let newNoiDungObj = {
                html: this.newNoiDung,
                text: $('#' + componentId + ' iframe').contents().find("body").text() || ''
            };
            this.tbisReportsDataService.updateNoiDungSelectedComment(this.comment._id, newNoiDungObj).then(() => {
                this.notificationService.success('Nội dung trao đổi được cập nhật thành công.', 'Thay đổi nội dung');
                this.isEditMode = false;
            }).catch((err) => {
                this.notificationService.error(err.reason, 'Không thể sửa đổi');
            });
        }
    }
}

const name = 'tbisDetailsViewReportViewCommentItem';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayRelativeTimeFilter,
    TbisReportsDataService,
    NotificationService,
    CurrentUserService,
    TbisDetailsViewKendoEditor,
    UserName
]).component(name, {
    template,
    bindings: {
        comment: '<',
        isEditable: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewCommentItem
});