import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHoSoView.html';
import { name as TbisDetailsViewHoSoViewTongQuanTabView } from '../tbisDetailsViewHoSoViewTongQuanTabView/tbisDetailsViewHoSoViewTongQuanTabView';
import { name as TbisDetailsViewHoSoViewThongSoTabView } from '../tbisDetailsViewHoSoViewThongSoTabView/tbisDetailsViewHoSoViewThongSoTabView';
import { name as TbisDetailsViewHoSoViewViTriTabView } from '../tbisDetailsViewHoSoViewViTriTabView/tbisDetailsViewHoSoViewViTriTabView';

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
    TbisDetailsViewHoSoViewTongQuanTabView,
    TbisDetailsViewHoSoViewThongSoTabView,
    TbisDetailsViewHoSoViewViTriTabView
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
      thietbi: '<'
    },
    controller: TbisDetailsViewHoSoView
});