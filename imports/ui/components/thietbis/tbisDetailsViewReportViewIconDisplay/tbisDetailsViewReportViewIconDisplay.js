import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewIconDisplay.html';

class TbisDetailsViewReportViewIconDisplay {
    constructor() {
        'ngInject';

    }


}

const name = 'tbisDetailsViewReportViewIconDisplay';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        status: '@',
        count: '@'
    },
    controller: TbisDetailsViewReportViewIconDisplay
});