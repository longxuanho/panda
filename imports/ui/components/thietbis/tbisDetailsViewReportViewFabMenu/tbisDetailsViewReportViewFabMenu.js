import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewFabMenu.html';
import { name as TbisDetailsViewReportViewAddNewMiniFab } from '../tbisDetailsViewReportViewAddNewMiniFab/tbisDetailsViewReportViewAddNewMiniFab';
// import { name as TbisDetailsImageMiniFab } from '../tbisDetailsImageMiniFab/tbisDetailsImageMiniFab';
// import { name as TbisListAddNewMiniFab } from '../tbisListAddNewMiniFab/tbisListAddNewMiniFab';

class TbisDetailsViewReportViewFabMenu {
    constructor($scope, $timeout) {
        'ngInject';
        this.clickIcon = 'menu';
        this.isOpen = false;
        this.count = 0;
    }


    goUp() {
        $("body").velocity("scroll", {
            duration: 1000,
            easing: "easeInBack"
        });
    }

}

const name = 'tbisDetailsViewReportViewFabMenu';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewAddNewMiniFab,
    // TbisDetailsViewHoSoViewUpdateMiniFab,
    // TbisDetailsImageMiniFab
    // TbisListPageNavigationMiniFab,
    // TbisListAddNewMiniFab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewFabMenu
});