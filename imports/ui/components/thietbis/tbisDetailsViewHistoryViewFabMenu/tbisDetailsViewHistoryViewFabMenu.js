import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewFabMenu.html';
import { name as TbisDetailsViewHistoryViewAddNewMiniFab } from '../tbisDetailsViewHistoryViewAddNewMiniFab/tbisDetailsViewHistoryViewAddNewMiniFab';
// import { name as TbisDetailsImageMiniFab } from '../tbisDetailsImageMiniFab/tbisDetailsImageMiniFab';
// import { name as TbisListAddNewMiniFab } from '../tbisListAddNewMiniFab/tbisListAddNewMiniFab';

class TbisDetailsViewHistoryViewFabMenu {
    constructor() {
        'ngInject';
        this.clickIcon = 'menu';
        this.isOpen = false;
        this.count = 0;
    }

}

const name = 'tbisDetailsViewHistoryViewFabMenu';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewHistoryViewAddNewMiniFab,
    // TbisDetailsViewHoSoViewUpdateMiniFab,
    // TbisDetailsImageMiniFab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewFabMenu
});