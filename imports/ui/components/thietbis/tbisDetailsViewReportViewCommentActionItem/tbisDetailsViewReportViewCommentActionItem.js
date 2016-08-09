import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewCommentActionItem.html';

import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as TbisDetailsViewReportViewCommentItem } from '../tbisDetailsViewReportViewCommentItem/tbisDetailsViewReportViewCommentItem';

import { name as UserName } from '../../../directives/common/userName';
import { name as UserAvatar } from '../../../directives/common/userAvatar';


class TbisDetailsViewReportViewCommentActionItem {
    constructor() {
        'ngInject';



    }
}

const name = 'tbisDetailsViewReportViewCommentActionItem';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayRelativeTimeFilter,
    TbisDetailsViewReportViewCommentItem,
    UserName,
    UserAvatar
]).component(name, {
    template,
    bindings: {
        viewModel: '='
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewCommentActionItem
});