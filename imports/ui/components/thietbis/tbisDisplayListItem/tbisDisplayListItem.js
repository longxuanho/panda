import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayListItem.html';

class TbisDisplayListItem {
    constructor($scope, $reactive, $timeout) {
        'ngInject';

        $reactive(this).attach($scope);

    }
}

const name = 'tbisDisplayListItem';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbi: '='
    },
    controller: TbisDisplayListItem
});