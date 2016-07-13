import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayListView.html';
import { name as TbisDisplayListItem } from '../tbisDisplayListItem/tbisDisplayListItem';
// import { name as TbisDataService } from '../../../services/tbis/tbisDataService';

class TbisDisplayListView {
    constructor() {
        'ngInject';
        
    }
}

const name = 'tbisDisplayListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDisplayListItem
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbis: '=',
        totalCount: '='
    },
    controller: TbisDisplayListView
});