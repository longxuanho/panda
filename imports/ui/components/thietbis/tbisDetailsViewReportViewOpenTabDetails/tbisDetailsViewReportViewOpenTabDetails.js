import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTabDetails.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewOpenTabDetailsCommentActionItem } from '../tbisDetailsViewReportViewOpenTabDetailsCommentActionItem/tbisDetailsViewReportViewOpenTabDetailsCommentActionItem';

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
                vm.tbisReport = tbisReportsDataService.queryOne(vm.selectedTbisReportId);
                vm.mixedCommentsAndActions = tbisReportsDataService.mixCommentsAndActions(vm.tbisReport.comments, vm.tbisReport.actions);
                console.log('data: ', vm.mixedCommentsAndActions);
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
    TbisDetailsViewReportViewOpenTabDetailsCommentActionItem
]).component(name, {
    template,
    bindings: {
        isActiveEditor: '<',
        newComment: '=',
        mixedCommentsAndActions: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTabDetails
});