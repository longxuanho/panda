import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMessage from 'angular-messages';

import template from './tbisDetailsUpdateThongSoTab.html';

import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';

class TbisDetailsUpdateThongSoTab {
    constructor($scope, tsktThongSoKyThuatDataService) {
        'ngInject';

        this.options = {
            mode: 'thong_so_hoat_dong'
        }

        this.selectOptions = tsktThongSoKyThuatDataService.getSelectOptions();
        console.log('select tskt Options: ', this.selectOptions);
    }
}

const name = 'tbisDetailsUpdateThongSoTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessage,
    TsktThongSoKyThuatDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        viewModel: '<'
    },
    controller: TbisDetailsUpdateThongSoTab
});