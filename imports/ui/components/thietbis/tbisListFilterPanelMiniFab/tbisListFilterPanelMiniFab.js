import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Random } from 'meteor/random';

import _ from 'underscore';

import fabTemplate from './tbisListFilterPanelMiniFab.html';
import modalTemplate from './tbisListFilterPanelModal.html';

import { name as TbisListFilterPanelModalTongQuanTab } from '../tbisListFilterPanelModalTongQuanTab/tbisListFilterPanelModalTongQuanTab';
import { name as TbisListFilterPanelModalThietLapTab } from '../tbisListFilterPanelModalThietLapTab/tbisListFilterPanelModalThietLapTab';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as UtilsFilterDataService } from '../../../services/workspaces/utilsFilterDataService';

class TbisListFilterPanelMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, userLocalSettingsService, utilsFilterDataService, utilsTopBarDataService) {
                'ngInject';

                this.utilsFilterOptionsDB = [];
                this.utilsFilterOptions = utilsFilterDataService.getCurrentUtilsFilterOptions();

                this.refreshTriggerToken = () => {
                    // trigger truy vấn dữ liệu trong list viewMode của utilsTopBar
                    this.utilsFilterOptions.utilsFilter._token = Random.id();
                };

                this.close = () => {

                    this.refreshTriggerToken();
                    $mdDialog.hide();
                };

                this.reset = () => {
                    _.each(_.keys(this.utilsFilterOptions.utilsFilter.filters), (key) => {
                        this.utilsFilterOptions.utilsFilter.filters[key] = [];
                    });
                    this.refreshTriggerToken();
                };

            },
            controllerAs: 'tbisListFilterPanelModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisListFilterPanelMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListFilterPanelModalTongQuanTab,
    TbisListFilterPanelModalThietLapTab,
    UserLocalSettingsService,
    UtilsFilterDataService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    bindings: {
        mode: '@'
    },
    controller: TbisListFilterPanelMiniFab
});