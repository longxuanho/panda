import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import fabTemplate from './dhelpsListUpdateFab.html';
import modalTemplate from './dhelpsListUpdateModal.html';

import { name as DhelpsDataService } from '../../../services/datahelpers/dhelpsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import { name as DhelpsListInputForm } from '../dhelpsListInputForm/dhelpsListInputForm';


class DhelpsListUpdateFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, dhelpsDataService, notificationService, $mdToast) {
                'ngInject';

                this.selectedDataHelper = dhelpsDataService.getSelectedDataHelper();

                this.liveOptions = {
                    isFormInvalid: false
                };

                this.update = () => {
                    try {
                        dhelpsDataService.validateInputDataHelper(this.selectedDataHelper.dataHelper);
                        dhelpsDataService.updateDataHelper(this.selectedDataHelper.dataHelper).then(() => {
                            notificationService.success('DataHelper đã được cập nhật thành công.', 'Cập nhật thành công');
                            dhelpsDataService.setSelectedDataHelper(null);
                            this.close();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.reset = () => {
                    dhelpsDataService.setSelectedDataHelper(this.selectedDataHelper.dataHelper._id);
                };

                this.remove = () => {
                    $mdToast.show({
                        hideDelay: 5000,
                        position : 'top right',
                        controller: ($scope) => {
                            'ngInject';
                            $scope.yes = () => {
                                dhelpsDataService.remove(this.selectedDataHelper.dataHelper._id).then(() => {
                                    notificationService.info('DataHelper đã được gỡ bỏ thành công.', 'Gỡ bỏ thành công');
                                    dhelpsDataService.setSelectedDataHelper(null);
                                    this.close();
                                }).catch((err) => {
                                    notificationService.error(err.message, 'Gỡ bỏ thất bại');
                                });
                                $mdToast.hide();
                            };
                            $scope.no = () => {
                                $mdToast.hide();
                            };
                        },
                        template : '<md-toast><span class="md-toast-text" flex>Gỡ bỏ DataHelper này?<md-button class="md-highlight" ng-click="yes()">OK, tiếp tục!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
                    });
                };

                this.close = () => {
                    $mdDialog.hide();
                };
            },
            controllerAs: 'dhelpsListUpdateModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'dhelpsListUpdateFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    DhelpsDataService,
    NotificationService,
    DhelpsListInputForm
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: DhelpsListUpdateFab
});