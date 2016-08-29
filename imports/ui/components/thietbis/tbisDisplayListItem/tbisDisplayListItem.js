import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayListItem.html';
import { name as ImageFallback } from '../../../directives/common/imageFallback';

class TbisDisplayListItem {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

    }
}

const name = 'tbisDisplayListItem';

// create a module
export default angular.module(name, [
    angularMeteor,
    ImageFallback
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbi: '='
    },
    controller: TbisDisplayListItem
});