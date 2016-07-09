import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListFabMenu.html';
import { name as TbisListMiniFabPageNavigation } from '../tbisListMiniFabPageNavigation/tbisListMiniFabPageNavigation';

class TbisListFabMenu {
    constructor($scope, $timeout) {
        'ngInject';
        this.clickIcon = 'menu';
        this.isOpen = false;

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

const name = 'tbisListFabMenu';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListMiniFabPageNavigation
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisListFabMenu
});