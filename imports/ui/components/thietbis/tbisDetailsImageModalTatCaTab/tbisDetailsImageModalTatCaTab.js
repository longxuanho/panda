import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Random } from 'meteor/random';

import template from './tbisDetailsImageModalTatCaTab.html';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';

class TbisDetailsImageModalTatCaTab {
    constructor(tbisDataService) {
        'ngInject';

        this.selectedThietBi = tbisDataService.getSelectedThietBi();
    }
}

const name = 'tbisDetailsImageModalTatCaTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataSerivce
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsImageModalTatCaTab
});