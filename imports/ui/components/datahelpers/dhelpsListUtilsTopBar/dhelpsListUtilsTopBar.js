import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import template from './dhelpsListUtilsTopBar.html';


import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';

class DhelpsListUtilsTopBar {
    constructor(subscribeDataService, utilsTopBarDataService) {
        'ngInject';

        this.utilsTopBarDataService = utilsTopBarDataService;

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.componentOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();

        this.componentOptionsDB = utilsTopBarDataService.getUtilsTopBarOptionsDB();
        this.categoryOptionsDB = this.resolveOptionsDB(this.componentOptionsDB, 'categories').menuItems;

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

        this.liveOptions.category = {
            icon: _.find(this.categoryOptionsDB, (item) => {
                return item.value == selectedCategory;
            }).icon
        };
    }

    openMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    setCategory(selectedCategory) {
        this.subscribeOptions.subscribe.category = selectedCategory.value;
        this.liveOptions.category.icon = selectedCategory.icon;
    }

    triggerRefreshTokenInGridMode() {
        // Kích hoạt refresh token được watch trong tbisListGridViewKendoGrid
        this.utilsTopBarDataService.triggerRefreshToken();
    }
}

const name = 'dhelpsListUtilsTopBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    SubscribeDataService,
    UtilsTopBarDataService,
]).component(name, {
    template,
    controllerAs: name,
    controller: DhelpsListUtilsTopBar
});