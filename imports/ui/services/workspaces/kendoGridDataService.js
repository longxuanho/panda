import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class KendoGridDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        this.allowedStateNames = ['tbisList', 'tbisrepList', 'tbishisList'];

        this.currentKendoGridOptions = {
            gridRef: {},
            options: {}
        };
    }

    updateCurrentOptions(stateName) {
        // Check pandora.js - Hàm được gọi mỗi khi chuyển route thành công
        this.currentKendoGridOptions.options = this.queryCurrentKendoGridOptions(stateName);
    }

    queryCurrentKendoGridOptions(stateName) {
        if (_.contains(this.allowedStateNames, stateName)) {
            return this.userLocalSettingsService.getPageSettings('workspaces', 'kendoGrid')[stateName];
        }
        return {};
    }

    getCurrentKendoGridOptions() {
        return this.currentKendoGridOptions;
    }

}

const name = 'kendoGridDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
])
    .service(name, KendoGridDataService);