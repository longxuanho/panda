import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListKendoGridSettingsModalCauHinhTabAddNewForm.html';

import { name as CloudSettingsDataService } from '../../../services/cloudsettings/cloudSettingsDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisListKendoGridSettingsModalCauHinhTabAddNewForm {
    constructor(cloudSettingsDataService, notificationService, kendoGridDataService) {
        'ngInject';


        this.cloudSettingsDataService = cloudSettingsDataService;
        this.notificationService = notificationService;
        this.kendoGridDataService = kendoGridDataService;

        this.currentKendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();

        this.initNewCloudSetting();

    }

    initNewCloudSetting() {
        this.newCloudSetting = this.cloudSettingsDataService.initNewCloudSettingData('thietbis', 'tbisList', 'kendoGrid');
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

    resolveKendoOptionsBeforeInsert() {
        let currentKendoGridOptions = this.getCurrentKendoGridOptions();
        currentKendoGridOptions.dataSource.data = [];

        this.newCloudSetting.dataSource.options = JSON.stringify(currentKendoGridOptions);
    }

    getCurrentKendoGridOptions() {
        return this.currentKendoGridOptions.gridRef.getOptions();
    }
}

const name = 'tbisListKendoGridSettingsModalCauHinhTabAddNewForm';

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
        done: '&'
    },
    controller: TbisListKendoGridSettingsModalCauHinhTabAddNewForm
});