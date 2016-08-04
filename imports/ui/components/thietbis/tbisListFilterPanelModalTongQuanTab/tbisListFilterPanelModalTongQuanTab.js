import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListFilterPanelModalTongQuanTab.html';
import { name as TbisFilterPanelSolverService } from '../../../services/thietbis/tbisFilterPanelSolverService';

class TbisListFilterPanelModalTongQuanTab {
    constructor(tbisFilterPanelSolverService, $timeout) {
        'ngInject';
        this.$timeout = $timeout;
        this.tbisFilterPanelSolverService = tbisFilterPanelSolverService;
        this.isKhoiTaoLoading = false;



        this.filterOptions = tbisFilterPanelSolverService.getFilterOptions();
        if(!this.filterOptions)
            this.solveFilterOptions();
    }

    solveFilterOptions() {
        this.isKhoiTaoLoading = true;
        this.tbisFilterPanelSolverService.queryFilterOptions().then((result) => {
            this.filterOptions = result;
            this.isKhoiTaoLoading = false;
            this.tbisFilterPanelSolverService.setFilterOptions(result);
        }).catch((error) => {
            console.log('Có lỗi xảy ra khi truy vấn danh mục', error.message);
        });
    }
}

const name = 'tbisListFilterPanelModalTongQuanTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisFilterPanelSolverService,
]).component(name, {
    template: template,
    bindings: {
        filterOptions: '=',
        filterPanelOptions: '='
    },
    controllerAs: name,
    controller: TbisListFilterPanelModalTongQuanTab
});