import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewLuotScnTab.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as TbisHistoriesDataService } from '../../../services/thietbis/tbisHistoriesDataService';
import { name as TbisDetailsViewHistoryViewDurationToolbar } from '../tbisDetailsViewHistoryViewDurationToolbar/tbisDetailsViewHistoryViewDurationToolbar';
import { name as TbisDetailsViewHistoryViewTbisHistoryItem } from '../tbisDetailsViewHistoryViewTbisHistoryItem/tbisDetailsViewHistoryViewTbisHistoryItem';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisDetailsViewHistoryViewLuotScnTab {
    constructor($reactive, $scope, userLocalSettingsService, tbisHistoriesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.durationToolbarOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails').modules.tbisHistories.durationToolbar;

        this.helpers({
            tbisHistories() {
                return tbisHistoriesDataService.query({
                    'phan_loai.nhom': 'Sửa chữa nhỏ'
                });
            }
        });

    }

    open(event, tbisHistoryId) {
        this.tbisReportDataService.setSelectedTbisReport(tbisHistoryId);
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, tbisHistoriesDataService, notificationService, metadataService, $mdToast) {
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
                    tbisHistoriesDataService.clearSelectedTbisReport();
                    $mdDialog.hide();
                };

                this.addNewComment = () => {
                    try {
                        this.newComment.noi_dung.text = $('iframe').contents().find("body").text() || this.newComment.noi_dung.html;
                        metadataService.buildNewMetadata(this.newComment, Meteor.user());
                        tbisHistoriesDataService.validateCommentInputData(this.newComment);
                        console.log('preparing: ', this.newComment);
                        tbisHistoriesDataService.addNewComment(this.newComment).then(() => {
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
                                tbisHistoriesDataService.closeSelectedTbisReport(metadataService.generateNewAction('close', Meteor.user())).then(() => {
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
    TbisDetailsViewHistoryViewTbisHistoryItem
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewLuotScnTab
});