import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import template from './utilsTopBar.html';
import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';

class UtilsTopBar {
    constructor(subscribeDataService, utilsTopBarDataService) {
        'ngInject';

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.componentOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();

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
}

const name = 'utilsTopBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    SubscribeDataService,
    UtilsTopBarDataService
]).component(name, {
    template,
    bindings: {
        options: '<'
    },
    controllerAs: name,
    controller: UtilsTopBar
});