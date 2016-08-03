import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListFilterPanelModalTongQuanTab.html';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as TbisFilterPanelSolverService } from '../../../services/thietbis/tbisFilterPanelSolverService';

class TbisListFilterPanelModalTongQuanTab {
    constructor(userLocalSettingsService, tbisFilterPanelSolverService, $timeout) {
        'ngInject';
        this.$timeout = $timeout;
        this.tbisFilterPanelSolverService = tbisFilterPanelSolverService;
        this.tbisListPageOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;
        this.filterOptions = this.tbisFilterPanelSolverService.getFilterOptions() || undefined;

    }

    getFilterOptions() {
        this.isKhoiTaoLoading = true;
        this.$timeout(() => {
            this.filterOptions = this.tbisFilterPanelSolverService.getFilterOptions();
            this.isKhoiTaoLoading = false;
        }, 1000)

    }

}

const name = 'tbisListFilterPanelModalTongQuanTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService,
    TbisFilterPanelSolverService,
]).component(name, {
    template: template,
    controllerAs: name,
    controller: TbisListFilterPanelModalTongQuanTab
});