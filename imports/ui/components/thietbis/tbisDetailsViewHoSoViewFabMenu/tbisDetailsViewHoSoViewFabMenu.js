import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoViewFabMenu.html';
import { name as TbisDetailsViewHoSoViewUpdateMiniFab } from '../tbisDetailsViewHoSoViewUpdateMiniFab/tbisDetailsViewHoSoViewUpdateMiniFab';
import { name as TbisDetailsImageMiniFab } from '../tbisDetailsImageMiniFab/tbisDetailsImageMiniFab';

class TbisDetailsViewHoSoViewFabMenu {
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

const name = 'tbisDetailsViewHoSoViewFabMenu';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewHoSoViewUpdateMiniFab,
    TbisDetailsImageMiniFab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewFabMenu
});