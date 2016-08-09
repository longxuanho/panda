import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewTabDetails.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewCommentActionItem } from '../tbisDetailsViewReportViewCommentActionItem/tbisDetailsViewReportViewCommentActionItem';
import { name as TbisDetailsViewReportViewMainReportDisplay } from '../tbisDetailsViewReportViewMainReportDisplay/tbisDetailsViewReportViewMainReportDisplay';
import { name as TbisDetailsViewReportViewMainReportTitle } from '../tbisDetailsViewReportViewMainReportTitle/tbisDetailsViewReportViewMainReportTitle';
import { name as TbisDetailsViewKendoEditor } from '../tbisDetailsViewKendoEditor/tbisDetailsViewKendoEditor';

import { name as UserAvatar } from '../../../directives/common/userAvatar';


class TbisDetailsViewReportViewTabDetails {
    constructor($reactive, $scope, tbisReportsDataService) {
        'ngInject';
        $reactive(this).attach($scope);
        let vm = this;

        vm.selectedTbisReportId = tbisReportsDataService.getSelectedTbisReport()._id;

        vm.helpers({
            tbisReportHelper() {
                tbisReportsDataService.setSelectedTbisReport(vm.selectedTbisReportId);
                vm.tbisReport = tbisReportsDataService.getSelectedTbisReport();
                if (vm.tbisReport)
                    vm.mixedCommentsAndActions = tbisReportsDataService.mixCommentsAndActions(vm.tbisReport.comments, vm.tbisReport.actions);
                return true;
            }
        });
    }
}

const name = 'tbisDetailsViewReportViewTabDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisReportsDataService,
    TbisDetailsViewReportViewCommentActionItem,
    TbisDetailsViewReportViewMainReportDisplay,
    TbisDetailsViewReportViewMainReportTitle,
    TbisDetailsViewKendoEditor,
    UserAvatar
]).component(name, {
    template,
    bindings: {
        isActiveEditor: '<',
        newComment: '='
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewTabDetails
});