import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoViewThongSoTabView.html';

import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';

class TbisDetailsViewHoSoViewThongSoTabView {
    constructor($mdMedia, tbisDataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;

        this.selectedThietBi = tbisDataService.getSelectedThietBi();
    }


}

const name = 'tbisDetailsViewHoSoViewThongSoTabView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataSerivce
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewThongSoTabView
});