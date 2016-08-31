import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsUpdateThongSoTab.html';

import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';

class TbisDetailsUpdateThongSoTab {
    constructor(tsktThongSoKyThuatDataService) {
        'ngInject';

        this.selectOptions = tsktThongSoKyThuatDataService.getSelectOptions();
    }

    addNew() {
        this.addNewThongSo();
    }
}

const name = 'tbisDetailsUpdateThongSoTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TsktThongSoKyThuatDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        addNewThongSo: '&',
        tabModeSelected: '=',
        mode: '@',
        viewModel: '=',
        thongsokythuats: '<',
        toggleRemoveThongSoKyThuat: '&'
    },
    controller: TbisDetailsUpdateThongSoTab
});