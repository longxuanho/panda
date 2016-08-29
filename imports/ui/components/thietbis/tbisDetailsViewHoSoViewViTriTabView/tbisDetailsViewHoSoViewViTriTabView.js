import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoViewViTriTabView.html';
import { name as TbisDetailsMap } from '../tbisDetailsMap/tbisDetailsMap';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';

class TbisDetailsViewHoSoViewViTriTabView {
    constructor($mdMedia, tbisDataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;

        this.selectedThietBi = tbisDataService.getSelectedThietBi();

    }


}

const name = 'tbisDetailsViewHoSoViewViTriTabView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsMap,
    TbisDataSerivce
]).component(name, {
    template,
    bindings: {
        tabSelected: '@',
        viewModel: '='
    },
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewViTriTabView
});