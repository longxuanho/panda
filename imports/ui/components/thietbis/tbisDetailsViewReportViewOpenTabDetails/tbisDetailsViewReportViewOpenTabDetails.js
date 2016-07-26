import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTabDetails.html';

import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';

class TbisDetailsViewReportViewOpenTabDetails {
    constructor() {
        'ngInject';
        this.kendoEditorTools = [
            "formatting",
            "foreColor",
            "cleanFormatting",
            "bold",
            "italic",
            "underline",
            "insertUnorderedList",
            "insertOrderedList",
            "indent",
            "outdent",
            "insertImage",
            "createTable",
            "addRowAbove",
            "addRowBelow",
            "addColumnLeft",
            "addColumnRight",
            "deleteRow",
            "deleteColumn"
        ]
    }
}

const name = 'tbisDetailsViewReportViewOpenTabDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter,
]).component(name, {
    template,
    bindings: {
        isActiveEditor: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTabDetails
});