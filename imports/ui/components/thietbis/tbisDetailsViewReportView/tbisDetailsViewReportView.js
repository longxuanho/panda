import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportView.html';
import { name as TbisDetailsViewReportViewOpenTab } from '../tbisDetailsViewReportViewOpenTab/tbisDetailsViewReportViewOpenTab';
import { name as TbisDetailsViewReportViewClosedTab } from '../tbisDetailsViewReportViewClosedTab/tbisDetailsViewReportViewClosedTab';
import { name as TbisDetailsViewReportViewFabMenu } from '../tbisDetailsViewReportViewFabMenu/tbisDetailsViewReportViewFabMenu';


class TbisDetailsViewReportView {
    constructor($mdMedia) {
        'ngInject';
        this.$mdMedia = $mdMedia;

    }


}

const name = 'tbisDetailsViewReportView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewOpenTab,
    TbisDetailsViewReportViewClosedTab,
    TbisDetailsViewReportViewFabMenu
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportView
});