import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewLuotScnTab.html';
import modalTemplate from './tbisDetailsViewHistoryViewLuotScnTabModal.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as TbisHistoriesDataService } from '../../../services/thietbis/tbisHistoriesDataService';
import { name as TbisDetailsViewHistoryViewDurationToolbar } from '../tbisDetailsViewHistoryViewDurationToolbar/tbisDetailsViewHistoryViewDurationToolbar';
import { name as TbisDetailsViewHistoryViewTbisHistoryItem } from '../tbisDetailsViewHistoryViewTbisHistoryItem/tbisDetailsViewHistoryViewTbisHistoryItem';
import { name as TbisDetailsViewHistoryViewTbisHistoryInputForm } from '../tbisDetailsViewHistoryViewTbisHistoryInputForm/tbisDetailsViewHistoryViewTbisHistoryInputForm';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisDetailsViewHistoryViewLuotScnTab {
    constructor($reactive, $scope, $mdDialog, $mdMedia, userLocalSettingsService, tbisHistoriesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.durationToolbarOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails').modules.tbisHistories.durationToolbar;
        this.tbisHistoriesDataService = tbisHistoriesDataService;
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;

        this.helpers({
            tbisHistories() {
                return tbisHistoriesDataService.query({
                    'phan_loai.nhom': 'Sửa chữa nhỏ'
                });
            }
        });

    }

    open(event, tbisHistoryId) {
        this.tbisHistoriesDataService.setSelectedTbisHistory(tbisHistoryId);

        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, tbisHistoriesDataService, notificationService, metadataService, $mdToast) {
                'ngInject';
                this.thietbiId = tbisDataService.getSelectedThietBi().ma_thiet_bi.keyId;
                this.selectedTbisHistory = angular.copy(tbisHistoriesDataService.getSelectedTbisHistory());
                this.isModalOpen = true;

                this.close = () => {
                    this.isModalOpen = false;
                    tbisHistoriesDataService.clearSelectedTbisHistory();
                    $mdDialog.hide();
                };

                this.updateSelectedTbisHistory = () => {
                    try {
                        if (this.selectedTbisHistory.ghi_chu.html)
                            this.selectedTbisHistory.ghi_chu.text = $('#tbis-details-view-tbis-history-update-modal iframe').contents().find("body").text() || this.selectedTbisHistory.ghi_chu.html;
                        metadataService.buildNewMetadata(this.selectedTbisHistory, Meteor.user());
                        tbisHistoriesDataService.buildTimeString(this.selectedTbisHistory);
                        tbisHistoriesDataService.solveStatistics(this.selectedTbisHistory);

                        if(this.selectedTbisHistory.phan_loai.nhom != 'Sửa chữa nhỏ')
                            throw Error('Bạn không thể chuyển đổi nhóm sửa chữa của mục này.');

                        tbisHistoriesDataService.validateTbisHistoryInputData(this.selectedTbisHistory);
                        tbisHistoriesDataService.updateSelectedTbisHistory(this.selectedTbisHistory).then(() => {
                            notificationService.success('Nhật ký sửa chữa đã được cập nhật vào Skynet.', 'Cập nhật thành công');
                            this.reset();
                            this.close();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.removeSelectedTbisHistory = () => {
                    // $mdToast.show({
                    //     hideDelay: 5000,
                    //     position : 'top right',
                    //     controller: ($scope) => {
                    //         'ngInject';
                    //         $scope.yes = () => {
                    //             tbisHistoriesDataService.closeSelectedTbisReport(metadataService.generateNewAction('close', Meteor.user())).then(() => {
                    //                 notificationService.success('Thông báo của bạn đã được đóng thành công.', 'Đóng thông báo');
                    //                 this.close();
                    //             }).catch((err) => {
                    //                 notificationService.error(err.message, 'Không thể đóng mục này');
                    //             });
                    //             $mdToast.hide();
                    //         };
                    //         $scope.no = () => {
                    //             $mdToast.hide();
                    //         };
                    //     },
                    //     template : '<md-toast><span class="md-toast-text" flex>Đóng thông báo này?<md-button class="md-highlight" ng-click="yes()">OK, đóng!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
                    // });
                };

                this.reset = () => {
                    // Không cần thiết câu lệnh này do ta đóng modal sau khi update thành công
                    // tbisHistoriesDataService.setSelectedTbisHistory(this.selectedTbisHistory._id);
                    this.selectedTbisHistory = angular.copy(tbisHistoriesDataService.getSelectedTbisHistory());
                };
            },
            controllerAs: 'tbisDetailsViewHistoryViewLuotScnTabModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsViewHistoryViewLuotScnTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService,
    TbisDataService,
    TbisHistoriesDataService,
    MetadataService,
    NotificationService,
    TbisDetailsViewHistoryViewDurationToolbar,
    TbisDetailsViewHistoryViewTbisHistoryItem,
    TbisDetailsViewHistoryViewTbisHistoryInputForm
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewLuotScnTab
});