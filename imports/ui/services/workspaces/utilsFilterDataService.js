import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class UtilsFilterDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        this.allowedStateNames = ['tbisList'];

        this.currentUtilsFilterOptions = {
            utilsFilter: {}
        };
    }

    updateCurrentOptions(stateName) {
        // Check pandora.js - Hàm được gọi mỗi khi chuyển route thành công
        this.currentUtilsFilterOptions.utilsFilter = this.queryCurrentUtilsFilterOptions(stateName);
    }

    queryCurrentUtilsFilterOptions(stateName) {
        if (_.contains(this.allowedStateNames, stateName)) {
            return this.userLocalSettingsService.getPageSettings('workspaces', 'utilsFilters')[stateName];
        }
        return {};
    }

    getCurrentUtilsFilterOptions() {
        return this.currentUtilsFilterOptions;
    }

}

const name = 'utilsFilterDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
])
    .service(name, UtilsFilterDataService);