import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewCommentActionItem.html';

import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
// import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';

class TbisDetailsViewReportViewCommentActionItem {
    constructor() {
        'ngInject';



    }
}

const name = 'tbisDetailsViewReportViewCommentActionItem';

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
    controller: TbisDetailsViewReportViewCommentActionItem
});