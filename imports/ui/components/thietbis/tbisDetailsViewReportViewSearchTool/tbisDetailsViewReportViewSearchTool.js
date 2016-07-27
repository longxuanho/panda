import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewSearchTool.html';

class TbisDetailsViewReportViewSearchTool {
    constructor() {
        'ngInject';

    }
}

const name = 'tbisDetailsViewReportViewSearchTool';

// create a module
export default angular.module(name, [
    angularMeteor,
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewSearchTool
});