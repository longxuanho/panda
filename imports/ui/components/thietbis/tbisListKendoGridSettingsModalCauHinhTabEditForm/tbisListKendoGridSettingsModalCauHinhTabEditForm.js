import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListKendoGridSettingsModalCauHinhTabEditForm.html';

import { name as CloudSettingsDataService } from '../../../services/cloudsettings/cloudSettingsDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisListKendoGridSettingsModalCauHinhTabEditForm {
    constructor($scope, cloudSettingsDataService, notificationService, kendoGridDataService, $mdToast) {
        'ngInject';

        this.$mdToast = $mdToast;

        this.cloudSettingsDataService = cloudSettingsDataService;
        this.notificationService = notificationService;
        this.kendoGridDataService = kendoGridDataService;

        this.selectedCloudSetting = {};

        $scope.$watch('tbisListKendoGridSettingsModalCauHinhTabEditForm.selectedCloudSettingId', (newVal) => {
            this.selectedCloudSetting = this.cloudSettingsDataService.queryOne(newVal);
        });
    }

    updateSelectedCloudSetting() {
        try {
            if (!this.selectedCloudSetting || !this.selectedCloudSetting._id)
                throw Error("Chưa có cấu hình được chọn.");
            this.cloudSettingsDataService.validateCloudSettingData(this.selectedCloudSetting);
            this.cloudSettingsDataService.updateSelectedCloudSettingDescription(this.selectedCloudSetting).then(() => {
                this.notificationService.success('Cấu hình của bạn đã được cập nhật thành công.', 'Lưu cấu hình thành công');
                this.done();
            }).catch((err) => {
                this.notificationService.error(err.message, 'Lưu cấu hình thất bại');
            });
        }
        catch (error) {
            this.notificationService.error(error.message, 'Thiếu thông tin');
        }
    }

    removeSelectedCloudSetting() {
        this.$mdToast.show({
            hideDelay: 5000,
            position : 'top right',
            controller: ($scope) => {
                'ngInject';
                $scope.yes = () => {
                    this.cloudSettingsDataService.removeSelectedCloudSetting(this.selectedCloudSetting._id).then(() => {
                        this.notificationService.info('Cấu hình của bạn đã được gỡ bỏ khỏi hệ thống.', 'Đã gỡ bỏ cấu hình');
                        this.done();
                    }).catch((err) => {
                        this.notificationService.error(err.message, 'Gở bỏ cấu hình thất bại');
                    });
                    this.$mdToast.hide();
                };
                $scope.no = () => {
                    this.$mdToast.hide();
                };
            },
            template : '<md-toast><span class="md-toast-text" flex>Gỡ bỏ cấu hình này?<md-button class="md-highlight" ng-click="yes()">OK, gỡ bỏ!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
        });


    }

    addNewCloudSetting() {
        this.resolveKendoOptionsBeforeInsert();

        try {
            this.cloudSettingsDataService.validateCloudSettingData(this.newCloudSetting);
            this.cloudSettingsDataService.addNew(this.newCloudSetting).then(() => {
                this.notificationService.success('Cấu hình của bạn đã được ghi nhận vào Skynet.', 'Lưu cấu hình thành công');
                this.initNewCloudSetting();
                this.done();
            }).catch((err) => {
                this.notificationService.error(err.message, 'Lưu cấu hình thất bại');
            });
        }
        catch (error) {
            this.notificationService.error(error.message, 'Thiếu thông tin');
        }
    }


}

const name = 'tbisListKendoGridSettingsModalCauHinhTabEditForm';

// create a module
export default angular.module(name, [
    angularMeteor,
    CloudSettingsDataService,
    NotificationService,
    KendoGridDataService
]).component(name, {
    template: template,
    controllerAs: name,
    bindings: {
        done: '&',
        cloudSettingDescriptions: '<'
    },
    controller: TbisListKendoGridSettingsModalCauHinhTabEditForm
});