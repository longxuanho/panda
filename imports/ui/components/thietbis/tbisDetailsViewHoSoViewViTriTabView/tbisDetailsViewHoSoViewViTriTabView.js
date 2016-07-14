import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoViewViTriTabView.html';
import { name as TbisDetailsMap } from '../tbisDetailsMap/tbisDetailsMap';

class TbisDetailsViewHoSoViewViTriTabView {
    constructor($mdMedia) {
        'ngInject';

        this.$mdMedia = $mdMedia;

    }


}

const name = 'tbisDetailsViewHoSoViewViTriTabView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsMap
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewViTriTabView
});