import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoView.html';
import { name as TbisDetailsViewHoSoViewTongQuanTabView } from '../tbisDetailsViewHoSoViewTongQuanTabView/tbisDetailsViewHoSoViewTongQuanTabView';

class TbisDetailsViewHoSoView {
    constructor($mdMedia) {
        'ngInject';
        
        this.$mdMedia = $mdMedia;
        
    }


}

const name = 'tbisDetailsViewHoSoView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewHoSoViewTongQuanTabView
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoView
});