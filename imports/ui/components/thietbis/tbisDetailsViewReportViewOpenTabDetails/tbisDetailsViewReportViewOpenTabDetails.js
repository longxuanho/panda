import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTabDetails.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewCommentActionItem } from '../tbisDetailsViewReportViewCommentActionItem/tbisDetailsViewReportViewCommentActionItem';
import { name as TbisDetailsViewReportViewMainReportDisplay } from '../tbisDetailsViewReportViewMainReportDisplay/tbisDetailsViewReportViewMainReportDisplay';
import { name as TbisDetailsViewReportViewMainReportTitle } from '../tbisDetailsViewReportViewMainReportTitle/tbisDetailsViewReportViewMainReportTitle';


class TbisDetailsViewReportViewOpenTabDetails {
    constructor($reactive, $scope, tbisReportsDataService) {
        'ngInject';
        $reactive(this).attach($scope);
        let vm = this;

        vm.kendoEditorOptions = {
            tools: [
                // "formatting", "foreColor",
                "cleanFormatting", "bold", "italic", "underline", "insertUnorderedList", "insertOrderedList", "indent", "outdent", "insertImage", "createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn"
            ],
            serialization: {
                entities: false,
                scripts: true
            }
        };
        vm.selectedTbisReportId = tbisReportsDataService.getSelectedTbisReport()._id;

        vm.helpers({
            tbisReportHelper() {
                tbisReportsDataService.setSelectedTbisReport(vm.selectedTbisReportId);
                vm.tbisReport = tbisReportsDataService.getSelectedTbisReport();
                vm.mixedCommentsAndActions = tbisReportsDataService.mixCommentsAndActions(vm.tbisReport.comments, vm.tbisReport.actions);
                return true;
            }
        });
    }
}

const name = 'tbisDetailsViewReportViewOpenTabDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisReportsDataService,
    TbisDetailsViewReportViewCommentActionItem,
    TbisDetailsViewReportViewMainReportDisplay,
    TbisDetailsViewReportViewMainReportTitle
]).component(name, {
    template,
    bindings: {
        isActiveEditor: '<',
        newComment: '=',
        // mixedCommentsAndActions: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTabDetails
});