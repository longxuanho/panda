import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportView.html';
import { name as TbisDetailsViewReportViewOpenTab } from '../tbisDetailsViewReportViewOpenTab/tbisDetailsViewReportViewOpenTab';
// import { name as TbisDetailsViewHoSoViewThongSoTabView } from '../tbisDetailsViewHoSoViewThongSoTabView/tbisDetailsViewHoSoViewThongSoTabView';
// import { name as TbisDetailsViewHoSoViewViTriTabView } from '../tbisDetailsViewHoSoViewViTriTabView/tbisDetailsViewHoSoViewViTriTabView';

class TbisDetailsViewReportView {
    constructor($mdMedia, $stateParams) {
        'ngInject';
        this.$mdMedia = $mdMedia;

    }


}

const name = 'tbisDetailsViewReportView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewOpenTab,
    // TbisDetailsViewHoSoViewThongSoTabView,
    // TbisDetailsViewHoSoViewViTriTabView
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportView
});