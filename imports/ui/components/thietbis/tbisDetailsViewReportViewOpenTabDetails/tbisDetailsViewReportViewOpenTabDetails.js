import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTabDetails.html';

import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';

class TbisDetailsViewReportViewOpenTabDetails {
    constructor($reactive, $scope, tbisReportsDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.kendoEditorTools = [
            "formatting", "foreColor", "cleanFormatting", "bold", "italic", "underline", "insertUnorderedList", "insertOrderedList", "indent", "outdent", "insertImage", "createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn"
        ];
        this.selectedTbisReportId = tbisReportsDataService.getSelectedTbisReport()._id;
        console.log('selected: ', this.selectedTbisReportId);

        this.helpers({
            tbisReport() {
                return tbisReportsDataService.queryOne(this.selectedTbisReportId);
            }
        });
    }
}

const name = 'tbisDetailsViewReportViewOpenTabDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
    TbisReportsDataService,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    bindings: {
        isActiveEditor: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTabDetails
});