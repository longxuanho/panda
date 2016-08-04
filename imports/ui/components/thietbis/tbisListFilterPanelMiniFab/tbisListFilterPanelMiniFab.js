import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Random } from 'meteor/random';

import _ from 'underscore';

import fabTemplate from './tbisListFilterPanelMiniFab.html';
import modalTemplate from './tbisListFilterPanelModal.html';

import { name as TbisListFilterPanelModalTongQuanTab } from '../tbisListFilterPanelModalTongQuanTab/tbisListFilterPanelModalTongQuanTab';
import { name as TbisListFilterPanelModalThietLapTab } from '../tbisListFilterPanelModalThietLapTab/tbisListFilterPanelModalThietLapTab';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisListFilterPanelMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, $scope, userLocalSettingsService) {
                'ngInject';

                this.filterOptions = {};
                this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').tbisFilterPanel;

                this.refreshTriggerToken = () => {
                    // Trigger thay đổi trong subcribe() hoặc getReactive() này bằng cách set lại _token của filter
                    this.componentOptions._token = Random.id();
                };

                this.close = () => {
                    this.refreshTriggerToken();
                    $mdDialog.hide();
                };

                this.reset = () => {
                    _.each(_.keys(this.componentOptions.filters), (key) => {
                            this.componentOptions.filters[key] = [];
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
    UserLocalSettingsService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisListFilterPanelMiniFab
});