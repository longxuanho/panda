import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTab.html';
import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewIconDisplay } from '../tbisDetailsViewReportViewIconDisplay/tbisDetailsViewReportViewIconDisplay';
import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';


class TbisDetailsViewReportViewOpenTab {
    constructor(tbisReportsDataService) {
        'ngInject';
        this.tbisReports = tbisReportsDataService.query();
        console.log('query data: ', this.tbisReports);
    }


}

const name = 'tbisDetailsViewReportViewOpenTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewIconDisplay,
    TbisReportsDataService,
    DisplayNameFilter,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTab
});