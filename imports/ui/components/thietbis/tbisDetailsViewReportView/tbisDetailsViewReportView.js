import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportView.html';
// import { name as TbisDetailsViewHoSoViewTongQuanTabView } from '../tbisDetailsViewHoSoViewTongQuanTabView/tbisDetailsViewHoSoViewTongQuanTabView';
// import { name as TbisDetailsViewHoSoViewThongSoTabView } from '../tbisDetailsViewHoSoViewThongSoTabView/tbisDetailsViewHoSoViewThongSoTabView';
// import { name as TbisDetailsViewHoSoViewViTriTabView } from '../tbisDetailsViewHoSoViewViTriTabView/tbisDetailsViewHoSoViewViTriTabView';

class TbisDetailsViewReportView {
    constructor($mdMedia, $stateParams) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.thietbiId = $stateParams.thietbiId;

    }


}

const name = 'tbisDetailsViewReportView';

// create a module
export default angular.module(name, [
    angularMeteor,
    // TbisDetailsViewHoSoViewTongQuanTabView,
    // TbisDetailsViewHoSoViewThongSoTabView,
    // TbisDetailsViewHoSoViewViTriTabView
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportView
});