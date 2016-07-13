import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoViewTongQuanTabView.html';

class TbisDetailsViewHoSoViewTongQuanTabView {
    constructor() {
        'ngInject';


    }


}

const name = 'tbisDetailsViewHoSoViewTongQuanTabView';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewTongQuanTabView
});