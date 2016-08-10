import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import template from './tbisDetailsViewReportViewTab.html';
import modalTemplate from './tbisDetailsViewReportViewTabModal.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewSearchTool } from '../tbisDetailsViewReportViewSearchTool/tbisDetailsViewReportViewSearchTool';
import { name as TbisDetailsViewReportViewIconDisplay } from '../tbisDetailsViewReportViewIconDisplay/tbisDetailsViewReportViewIconDisplay';

import { name as TbisDetailsViewReportViewTabDetails } from '../tbisDetailsViewReportViewTabDetails/tbisDetailsViewReportViewTabDetails';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as MetadataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import { name as UserName } from '../../../directives/common/userName';


class TbisDetailsViewReportViewTab {
    constructor($reactive, $scope, $mdDialog, $mdMedia, tbisReportsDataService, userLocalSettingsService) {
        'ngInject';
        $reactive(this).attach($scope);
        let vm = this;

        this.clientSortOrder = '-metadata.thoi_gian.tao_moi.ngay_tao_string';
        this.searchFilterBarOptions = userLocalSettingsService.getPageSettings('tbisreports', 'tbisrepList').searchFilterBar;
        $scope.$watch('tbisDetailsViewReportViewTab.searchFilterBarOptions.sort', (newVal) => {
            this.clientSortOrder = (newVal === '-1') ? '-metadata.thoi_gian.tao_moi.ngay_tao_string' : 'metadata.thoi_gian.tao_moi.ngay_tao_string';
        });


        vm.$mdDialog = $mdDialog;
        vm.$mdMedia = $mdMedia;
        vm.tbisReportDataService = tbisReportsDataService;

        vm.helpers({
            tbisReports() {
                return tbisReportsDataService.query();
            }
        });
    }

    open(event, tbisReportId) {
        this.tbisReportDataService.setSelectedTbisReport(tbisReportId);
        this.$mdDialog.show({
            controller($mdDialog, tbisReportsDataService, notificationService, metadataService, $mdToast) {
                'ngInject';
                this.thietbiId = tbisReportsDataService.getSelectedTbisReport().tham_chieu.ma_thiet_bi.keyId;
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
                    $mdToast.show({
                        hideDelay: 5000,
                        position : 'top right',
                        controller: ($scope) => {
                            'ngInject';
                            $scope.yes = () => {
                                tbisReportsDataService.closeSelectedTbisReport(metadataService.generateNewAction('close', Meteor.user())).then(() => {
                                    notificationService.success('Thông báo của bạn đã được đóng thành công.', 'Đóng thông báo');
                                    this.close();
                                }).catch((err) => {
                                    notificationService.error(err.message, 'Không thể đóng mục này');
                                });
                                $mdToast.hide();
                            };
                            $scope.no = () => {
                                $mdToast.hide();
                            };
                        },
                        template : '<md-toast><span class="md-toast-text" flex>Đóng thông báo này?<md-button class="md-highlight" ng-click="yes()">OK, đóng!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
                    });
                };

                this.reopenSelectedTbisReport = () => {
                    $mdToast.show({
                        hideDelay: 5000,
                        position : 'top right',
                        controller: ($scope) => {
                            'ngInject';
                            $scope.yes = () => {
                                tbisReportsDataService.reopenSelectedTbisReport(metadataService.generateNewAction('reopen', Meteor.user())).then(() => {
                                    notificationService.success('Thông báo của bạn đã được mở lại thành công.', 'Mở lại thông báo');
                                    this.close();
                                }).catch((err) => {
                                    notificationService.error(err.message, 'Không thể mở mục này');
                                });
                                $mdToast.hide();
                            };
                            $scope.no = () => {
                                $mdToast.hide();
                            };
                        },
                        template : '<md-toast><span class="md-toast-text" flex>Mở lại thông báo này?<md-button class="md-highlight" ng-click="yes()">OK, mở!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
                    });
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
            locals: {
                mode: this.mode
            },
            bindToController: true,
            controllerAs: 'tbisDetailsViewReportViewTabModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsViewReportViewTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewSearchTool,
    TbisDetailsViewReportViewIconDisplay,
    TbisDetailsViewReportViewTabDetails,
    TbisReportsDataService,
    UserLocalSettingsService,
    MetadataService,
    NotificationService,
    UserName,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        mode: '@',
        isMaThietBi: '<',
        module: '@'
    },
    controller: TbisDetailsViewReportViewTab
});