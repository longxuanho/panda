import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsUpdateTongQuanTab.html';

class TbisDetailsUpdateTongQuanTab {
    constructor($mdMedia) {
        'ngInject';

        this.$mdMedia = $mdMedia;
    }
}

const name = 'tbisDetailsUpdateTongQuanTab';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    bindings: {
        thietbi: '='
    },
    controllerAs: name,
    controller: TbisDetailsUpdateTongQuanTab
});