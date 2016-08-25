import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListKendoGridSettingsModalCauHinhTab.html';

import { name as CloudSettingsDataService } from '../../../services/cloudsettings/cloudSettingsDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import { name as TbisListKendoGridSettingsModalCauHinhTabAddNewForm } from '../tbisListKendoGridSettingsModalCauHinhTabAddNewForm/tbisListKendoGridSettingsModalCauHinhTabAddNewForm'
import { name as TbisListKendoGridSettingsModalCauHinhTabEditForm } from '../tbisListKendoGridSettingsModalCauHinhTabEditForm/tbisListKendoGridSettingsModalCauHinhTabEditForm'

class TbisListKendoGridSettingsModalCauHinhTab {
    constructor($reactive, $scope, cloudSettingsDataService, notificationService, kendoGridDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.cloudSettingsDataService = cloudSettingsDataService;
        this.notificationService = notificationService;
        this.kendoGridDataService = kendoGridDataService;

        this.currentKendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();
        this.selectedKendoGridOptions = kendoGridDataService.getSelectedKendoGridOptions();
        this.selectedCloudSetting = cloudSettingsDataService.getSelectedCloudSetting();

        this.mode = 'listView';
        // this.initNewCloudSetting();

        this.subscribe('cloudsettings', () => [
            {},
            {
                module: 'thietbis',
                stateName: 'tbisList',
                subject: 'kendoGrid'
            }
        ]);

        this.helpers({
            cloudSettingDescriptions() {
                return this.cloudSettingsDataService.queryForDescriptionList();
            }
        });

        $scope.$watch('tbisListKendoGridSettingsModalCauHinhTab.selectedCloudSetting.cloudSetting._id', (newVal) => {
            if (newVal) {
                this.selectedCloudSetting.cloudSetting = this.cloudSettingsDataService.queryOne(newVal);

                if (this.selectedCloudSetting.cloudSetting) {
                    if (this.selectedCloudSetting.cloudSetting.dataSource && this.selectedCloudSetting.cloudSetting.dataSource.options) {
                        this.selectedKendoGridOptions.options = JSON.parse(this.selectedCloudSetting.cloudSetting.dataSource.options);

                        this.kendoGridDataService.syncKendoGridOptions();

                        this.notificationService.success('Cấu hình mới được nạp thành công.', 'Khởi tạo thành công');
                    } else {
                        this.notificationService.success('Có lỗi khi đọc cấu hình hoặc cấu hình không tồn tại.', 'Khởi tạo thất bại');
                    }
                }
            }
        });
    }

    setMode(modeName) {
        // Hàm được gọi từ AddNewForm hoặc EditForm sau khi lưu hoặc cập nhật xong
        this.mode = modeName;
    }

    toggleAddNewMode() {
        this.mode = (this.mode === 'addNew') ? 'listView' : 'addNew';
    }

    toggleEditMode() {
        this.mode = (this.mode === 'edit') ? 'listView' : 'edit';
    }
}

const name = 'tbisListKendoGridSettingsModalCauHinhTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    CloudSettingsDataService,
    NotificationService,
    KendoGridDataService,

    TbisListKendoGridSettingsModalCauHinhTabAddNewForm,
    TbisListKendoGridSettingsModalCauHinhTabEditForm
]).component(name, {
    template: template,
    controllerAs: name,
    controller: TbisListKendoGridSettingsModalCauHinhTab
});