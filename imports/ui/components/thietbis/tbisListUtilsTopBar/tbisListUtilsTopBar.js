import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import template from './tbisListUtilsTopBar.html';

import { name as TbisListUtilsTopBarKendoGridSettingsBtn } from '../tbisListUtilsTopBarKendoGridSettingsBtn/tbisListUtilsTopBarKendoGridSettingsBtn';

import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';
import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class TbisListUtilsTopBar {
    constructor(subscribeDataService, utilsTopBarDataService, workspacesDataService) {
        'ngInject';

        this.utilsTopBarDataService = utilsTopBarDataService;

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.componentOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();
        this.utilsSideBarOptions = workspacesDataService.getCurrentUtilsSideBarOptions();

        this.componentOptionsDB = utilsTopBarDataService.getUtilsTopBarOptionsDB();
        this.categoryOptionsDB = this.resolveOptionsDB(this.componentOptionsDB, 'categories').menuItems;
        this.viewModeOptionsDB = this.resolveOptionsDB(this.componentOptionsDB, 'viewModes').menuItems;

        this.initLiveOptions();
    }

    resolveOptionsDB(componentOptionsDB, optionName) {
        return _.find(componentOptionsDB, (item) => {
            return item.name === optionName;
        });
    }

    initLiveOptions() {
        this.liveOptions = {};

        let selectedCategory = this.subscribeOptions.subscribe.category;
        let selectedViewMode = this.componentOptions.viewMode;

        this.liveOptions.category = {
            icon: _.find(this.categoryOptionsDB, (item) => {
                return item.value == selectedCategory;
            }).icon
        };

        this.liveOptions.viewMode = {
            icon: _.find(this.viewModeOptionsDB, (item) => {
                return item.value == selectedViewMode;
            }).icon
        }
    }

    openMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    setCategory(selectedCategory) {
        this.subscribeOptions.subscribe.category = selectedCategory.value;
        this.liveOptions.category.icon = selectedCategory.icon;
    }

    setViewMode(selectedViewMode) {
        this.componentOptions.viewMode = selectedViewMode.value;
        this.liveOptions.viewMode.icon = selectedViewMode.icon;
    }

    triggerRefreshTokenInGridMode() {
        // Kích hoạt refresh token được watch trong tbisListGridViewKendoGrid
        this.utilsTopBarDataService.triggerRefreshToken();
    }

    toggleUtilsSideBar() {
        this.utilsSideBarOptions.isOpen = !this.utilsSideBarOptions.isOpen
    }
}

const name = 'tbisListUtilsTopBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    SubscribeDataService,
    UtilsTopBarDataService,
    WorkspacesDataService,
    TbisListUtilsTopBarKendoGridSettingsBtn
]).component(name, {
    template,
    bindings: {
        options: '<'
    },
    controllerAs: name,
    controller: TbisListUtilsTopBar
});