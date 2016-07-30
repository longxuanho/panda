import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewKendoEditor.html';


class TbisDetailsViewKendoEditor {
    constructor() {
        'ngInject';

        this.kendoEditorOptions = {
            tools: [
                // "formatting", "foreColor",
                "cleanFormatting", "bold", "italic", "underline", "insertUnorderedList", "insertOrderedList", "indent", "outdent", "insertImage", "createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn"
            ],
            serialization: {
                entities: false,
                scripts: true
            }
        };
    }
}

const name = 'tbisDetailsViewKendoEditor';

// create a module
export default angular.module(name, [
    angularMeteor,
]).component(name, {
    template,
    bindings: {
        viewModel: '=',
    },
    controllerAs: name,
    controller: TbisDetailsViewKendoEditor
});