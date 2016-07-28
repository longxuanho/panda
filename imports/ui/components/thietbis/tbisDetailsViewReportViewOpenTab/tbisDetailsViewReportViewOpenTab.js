import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import template from './tbisDetailsViewReportViewOpenTab.html';
import modalTemplate from './tbisDetailsViewReportViewOpenTabModal.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewSearchTool } from '../tbisDetailsViewReportViewSearchTool/tbisDetailsViewReportViewSearchTool';
import { name as TbisDetailsViewReportViewIconDisplay } from '../tbisDetailsViewReportViewIconDisplay/tbisDetailsViewReportViewIconDisplay';

import { name as TbisDetailsViewReportViewOpenTabDetails } from '../tbisDetailsViewReportViewOpenTabDetails/tbisDetailsViewReportViewOpenTabDetails';
import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class TbisDetailsViewReportViewOpenTab {
    constructor($reactive, $scope, $mdDialog, $mdMedia, tbisReportsDataService) {
        'ngInject';
        $reactive(this).attach($scope);
        let vm = this;

        vm.$mdDialog = $mdDialog;
        vm.$mdMedia = $mdMedia;
        vm.tbisReportDataService = tbisReportsDataService;

        vm.subscribe('tbisreports');

        vm.helpers({
            tbisReports() {
                return tbisReportsDataService.query();
            }
        });
    }

    open(event, tbisReportId) {
        this.tbisReportDataService.setSelectedTbisReport(tbisReportId);
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, tbisReportsDataService, notificationService, metadataService) {
                'ngInject';
                this.thietbiId = tbisDataService.getSelectedThietBi().ma_thiet_bi.keyId;
                this.isModalOpen = true;

                this.newComment = {
                    _id: Random.id(),
                    noi_dung: {},
                    isActive: true,
                    metadata: {}
                };

                this.close = () => {
                    this.isModalOpen = false;
                    tbisReportsDataService.clearSelectedTbisReport();
                    $mdDialog.hide();
                };

                this.addNewComment = () => {
                    try {
                        this.newComment.noi_dung.text = $('iframe').contents().find("body").text() || this.newComment.noi_dung.html;
                        metadataService.buildNewMetadata(this.newComment, Meteor.user());
                        tbisReportsDataService.validateCommentInputData(this.newComment);
                        console.log('preparing: ', this.newComment);
                        tbisReportsDataService.addNewComment(this.newComment).then(() => {
                            notificationService.success('Bình luận của bạn đã được ghi nhận vào Skynet.', 'Gửi đi thành công');
                            this.resetNewComment();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Gửi đi thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.closeSelectedTbisReport = () => {
                    tbisReportsDataService.closeSelectedTbisReport(this.generateAction('close', Meteor.user())).then(() => {
                        notificationService.success('Thông báo của bạn đã được đóng thành công.', 'Đóng thông báo');
                        this.close();
                    }).catch((err) => {
                        notificationService.error(err.message, 'Không thể đóng mục này');
                    });
                };

                this.generateAction = (actionName, user) => {
                    let actionRef = {
                        close: 'đóng',
                        open: 'mở',
                        delete: 'xóa',
                        update: 'thay đổi'
                    };
                    let newAction =  {
                        _id: Random.id(),
                        action: actionName,
                        noi_dung: actionRef[actionName]
                    };
                    metadataService.buildNewMetadata(newAction, user);
                    return newAction;
                };

                this.resetNewComment = () => {
                    this.newComment = {
                        _id: Random.id(),
                        noi_dung: {},
                        isActive: true,
                        metadata: {}
                    };
                };
            },
            controllerAs: 'tbisDetailsViewReportViewOpenTabModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsViewReportViewOpenTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewSearchTool,
    TbisDetailsViewReportViewIconDisplay,
    TbisDetailsViewReportViewOpenTabDetails,
    TbisReportsDataService,
    TbisDataService,
    MetadataService,
    NotificationService,
    DisplayNameFilter,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTab
});