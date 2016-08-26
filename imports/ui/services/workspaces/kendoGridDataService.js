import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class KendoGridDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        this.allowedStateNames = ['tbisList', 'tbisrepList', 'tbishisList', 'dhelpsList'];

        this.currentKendoGridOptions = {
            gridRef: {},
            options: {}
        };

        this.selectedKendoGridOptions = {
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

    getSelectedKendoGridOptions() {
        return this.selectedKendoGridOptions;
    }

    syncKendoGridOptions() {
        // copy options from selectedKendoGridOptions over currentKendoGridOptions
        if (!_.isEmpty(this.selectedKendoGridOptions.options)) {
            let dataSourceOptions = this.selectedKendoGridOptions.options.dataSource;
            let otherOptions = _.omit(this.selectedKendoGridOptions.options, 'dataSource');

            // Set dataSource options
            this.currentKendoGridOptions.options.dataSource.group(dataSourceOptions.group);
            this.currentKendoGridOptions.options.dataSource.pageSize(dataSourceOptions.pageSize);
            this.currentKendoGridOptions.options.dataSource.page(dataSourceOptions.page);
            this.currentKendoGridOptions.options.dataSource.sort(dataSourceOptions.sort);

            // Set other options
            this.currentKendoGridOptions.gridRef.setOptions(otherOptions);
        }

    }

}

const name = 'kendoGridDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
])
    .service(name, KendoGridDataService);