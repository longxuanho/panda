import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewFabMenu.html';
import { name as TbisDetailsViewReportViewAddNewMiniFab } from '../tbisDetailsViewReportViewAddNewMiniFab/tbisDetailsViewReportViewAddNewMiniFab';

class TbisDetailsViewReportViewFabMenu {
    constructor() {
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

]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewFabMenu
});