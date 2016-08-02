import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayGridView.html';
import { name as TbisListGridViewKendoGrid } from '../tbisListGridViewKendoGrid/tbisListGridViewKendoGrid';
// import { name as TbisDataService } from '../../../services/tbis/tbisDataService';

class TbisDisplayGridView {
    constructor() {
        'ngInject';

    }
}

const name = 'tbisDisplayGridView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListGridViewKendoGrid
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbis: '<',
        totalCount: '<'
    },
    controller: TbisDisplayGridView
});