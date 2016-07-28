import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import template from './tbisDetailsViewReportViewClosedTab.html';
import modalTemplate from './tbisDetailsViewReportViewClosedTabModal.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewSearchTool } from '../tbisDetailsViewReportViewSearchTool/tbisDetailsViewReportViewSearchTool';
import { name as TbisDetailsViewReportViewIconDisplay } from '../tbisDetailsViewReportViewIconDisplay/tbisDetailsViewReportViewIconDisplay';

import { name as TbisDetailsViewReportViewClosedTabDetails } from '../tbisDetailsViewReportViewClosedTabDetails/tbisDetailsViewReportViewClosedTabDetails';
import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';


class TbisDetailsViewReportViewClosedTab {
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
            controller($mdDialog, tbisDataService, tbisReportsDataService, notificationService, metadataService, $mdToast) {
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

                this.reopenSelectedTbisReport = () => {
                    $mdToast.show({
                        hideDelay: 5000,
                        position : 'top right',
                        controller: ($scope) => {
                            'ngInject';
                            $scope.yes = () => {
                                tbisReportsDataService.reopenSelectedTbisReport(this.generateAction('reopen', Meteor.user())).then(() => {
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

                this.generateAction = (actionName, user) => {
                    let actionRef = {
                        open: 'mở',
                        close: 'đóng',
                        reopen: 'mở lại',
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
            controllerAs: 'tbisDetailsViewReportViewClosedTabModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsViewReportViewClosedTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewSearchTool,
    TbisDetailsViewReportViewIconDisplay,
    TbisDetailsViewReportViewClosedTabDetails,
    TbisReportsDataService,
    TbisDataService,
    MetadataService,
    NotificationService,
    DisplayNameFilter,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewClosedTab
});