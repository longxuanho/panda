import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewFabMenu.html';
// import { name as TbisListPageNavigationMiniFab } from '../tbisListPageNavigationMiniFab/tbisListPageNavigationMiniFab';
// import { name as TbisListAddNewMiniFab } from '../tbisListAddNewMiniFab/tbisListAddNewMiniFab';

class TbisDetailsViewFabMenu {
    constructor($scope, $timeout) {
        'ngInject';
        this.clickIcon = 'menu';
        this.isOpen = false;
        this.count = 0;

        $scope.$watch(() => this.isOpen, (newValue) => {
            // Thay đổi icon của FAB btn
            this.clickIcon = newValue ? 'more_vert' : 'menu';
        });
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
    // TbisListPageNavigationMiniFab,
    // TbisListAddNewMiniFab
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbiId: '@'
    },
    controller: TbisDetailsViewFabMenu
});