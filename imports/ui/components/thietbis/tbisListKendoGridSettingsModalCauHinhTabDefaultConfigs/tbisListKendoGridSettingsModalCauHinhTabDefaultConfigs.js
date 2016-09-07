import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListKendoGridSettingsModalCauHinhTabDefaultConfigs.html';

import { name as CloudSettingsDataService } from '../../../services/cloudsettings/cloudSettingsDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as ImageFallback } from '../../../directives/common/imageFallback';

class TbisListKendoGridSettingsModalCauHinhTabDefaultConfigs {
    constructor($reactive, $scope, cloudSettingsDataService, notificationService, kendoGridDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.cloudSettingsDataService = cloudSettingsDataService;
        this.notificationService = notificationService;
        this.kendoGridDataService = kendoGridDataService;

        this.selectedCloudSetting = cloudSettingsDataService.getSelectedCloudSetting();
        this.selectedKendoGridOptions = kendoGridDataService.getSelectedKendoGridOptions();

        this.mode = 'listView';

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
                return this.cloudSettingsDataService.queryForDescriptionList({
                    'isPublic': true
                });
            }
        });
    }
}

const name = 'tbisListKendoGridSettingsModalCauHinhTabDefaultConfigs';

// create a module
export default angular.module(name, [
    angularMeteor,
    CloudSettingsDataService,
    NotificationService,
    KendoGridDataService,
    ImageFallback
]).component(name, {
    template: template,
    controllerAs: name,
    bindings: {
        selectedCloudSetting: '='
    },
    controller: TbisListKendoGridSettingsModalCauHinhTabDefaultConfigs
});