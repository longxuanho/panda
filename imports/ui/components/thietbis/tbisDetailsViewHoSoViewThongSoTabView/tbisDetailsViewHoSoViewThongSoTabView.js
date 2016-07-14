import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoViewThongSoTabView.html';

class TbisDetailsViewHoSoViewThongSoTabView {
    constructor($mdMedia) {
        'ngInject';

        this.$mdMedia = $mdMedia;

    }


}

const name = 'tbisDetailsViewHoSoViewThongSoTabView';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewThongSoTabView
});