import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTabDetailsCommentActionItem.html';

import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
// import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';

class TbisDetailsViewReportViewOpenTabDetailsCommentActionItem {
    constructor() {
        'ngInject';



    }
}

const name = 'tbisDetailsViewReportViewOpenTabDetailsCommentActionItem';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
    // TbisReportsDataService,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    bindings: {
        viewModel: '='
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTabDetailsCommentActionItem
});