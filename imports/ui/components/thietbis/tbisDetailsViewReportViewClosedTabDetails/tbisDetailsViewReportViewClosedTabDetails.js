import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewClosedTabDetails.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewCommentActionItem } from '../tbisDetailsViewReportViewCommentActionItem/tbisDetailsViewReportViewCommentActionItem';

class TbisDetailsViewReportViewClosedTabDetails {
    constructor($reactive, $scope, tbisReportsDataService) {
        'ngInject';
        $reactive(this).attach($scope);
        let vm = this;

        vm.selectedTbisReportId = tbisReportsDataService.getSelectedTbisReport()._id;

        vm.helpers({
            tbisReportHelper() {
                vm.tbisReport = tbisReportsDataService.queryOne(vm.selectedTbisReportId);
                vm.mixedCommentsAndActions = tbisReportsDataService.mixCommentsAndActions(vm.tbisReport.comments, vm.tbisReport.actions);
                return true;
            }
        });
    }
}

const name = 'tbisDetailsViewReportViewClosedTabDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisReportsDataService,
    TbisDetailsViewReportViewCommentActionItem
]).component(name, {
    template,
    bindings: {
        isActiveEditor: '<',
        mixedCommentsAndActions: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewClosedTabDetails
});