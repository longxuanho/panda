import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListFilterPanelModalThietLapTab.html';
import { name as TbisFilterPanelSolverService } from '../../../services/thietbis/tbisFilterPanelSolverService';

class tbisListFilterPanelModalThietLapTab {
    constructor(tbisFilterPanelSolverService, $timeout, $mdToast) {
        'ngInject';
        this.$timeout = $timeout;
        this.$mdToast = $mdToast;
        this.isKhoiTaoLoading = false;
        this.tbisFilterPanelSolverService = tbisFilterPanelSolverService;
    }

    solveFilterOptions() {
        this.isKhoiTaoLoading = true;
        this.tbisFilterPanelSolverService.queryFilterOptions().then((result) => {
            this.filterOptionsDb = result;
            this.isKhoiTaoLoading = false;
            this.tbisFilterPanelSolverService.setFilterOptions(result);
            this.$mdToast.show({
                hideDelay: 5000,
                position : 'top right',
                template : '<md-toast><span class="md-toast-text" flex>Đồng bộ danh mục dữ liệu thành công!</span></md-toast>'
            });
        }).catch((error) => {
            console.log('Có lỗi xảy ra khi truy vấn danh mục', error.message);
        });
    }
}

const name = 'tbisListFilterPanelModalThietLapTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisFilterPanelSolverService
]).component(name, {
    template: template,
    bindings: {
        filterOptionsDb: '=',
        filterPanelOptions: '='
    },
    controllerAs: name,
    controller: tbisListFilterPanelModalThietLapTab
});