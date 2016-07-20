import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewFabMenu.html';
import { name as TbisDetailsUpdateMiniFab } from '../tbisDetailsUpdateMiniFab/tbisDetailsUpdateMiniFab';
import { name as TbisDetailsImageMiniFab } from '../tbisDetailsImageMiniFab/tbisDetailsImageMiniFab';
// import { name as TbisListAddNewMiniFab } from '../tbisListAddNewMiniFab/tbisListAddNewMiniFab';

class TbisDetailsViewFabMenu {
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

const name = 'tbisDetailsViewFabMenu';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsUpdateMiniFab,
    TbisDetailsImageMiniFab
    // TbisListPageNavigationMiniFab,
    // TbisListAddNewMiniFab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewFabMenu
});