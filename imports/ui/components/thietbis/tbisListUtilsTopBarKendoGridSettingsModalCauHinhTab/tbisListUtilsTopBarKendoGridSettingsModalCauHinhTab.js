import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import template from './tbisListUtilsTopBarKendoGridSettingsModalCauHinhTab.html';

import { name as CloudSettingsDataService } from '../../../services/cloudsettings/cloudSettingsDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisListUtilsTopBarKendoGridSettingsModalCauHinhTab {
    constructor(cloudSettingsDataService, notificationService, kendoGridDataService) {
        'ngInject';

        this.cloudSettingsDataService = cloudSettingsDataService;
        this.notificationService = notificationService;

        this.kendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();
        this.descriptionList = this.cloudSettingsDataService.queryForDescriptionList();

        this.initNewCloudSetting();

        this.mode = 'listView';
    }

    setMode(modeName) {
        this.mode = modeName;
    }

    initNewCloudSetting() {
        this.newCloudSetting = this.cloudSettingsDataService.initNewCloudSettingData('thietbis', 'tbisList', 'kendoGrid');
    }

    getCurrentKendoGridOptions() {
        return this.kendoGridOptions.gridRef.getOptions();
    }

    resolveKendoOptionsBeforeInsert() {
        let currentKendoGridOptions = this.getCurrentKendoGridOptions();
        currentKendoGridOptions.dataSource.data = [];

        this.newCloudSetting.dataSource.options = JSON.stringify(currentKendoGridOptions);
    }

    addNewCloudSetting() {
        this.resolveKendoOptionsBeforeInsert();

        try {
            this.cloudSettingsDataService.validateCloudSettingData(this.newCloudSetting);
            this.cloudSettingsDataService.addNew(this.newCloudSetting).then(() => {
                this.notificationService.success('Cấu hình của bạn đã được ghi nhận vào Skynet.', 'Lưu cấu hình thành công');
                this.initNewCloudSetting();
            }).catch((err) => {
                this.notificationService.error(err.message, 'Lưu cấu hình thất bại');
            });
        }
        catch (error) {
            this.notificationService.error(error.message, 'Thiếu thông tin');
        }
    }
}

const name = 'tbisListUtilsTopBarKendoGridSettingsModalCauHinhTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    CloudSettingsDataService,
    NotificationService,
    KendoGridDataService
]).component(name, {
    template: template,
    controllerAs: name,
    controller: TbisListUtilsTopBarKendoGridSettingsModalCauHinhTab
});