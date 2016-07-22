import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsImageInputForm.html';

class TbisDetailsImageInputForm {
    constructor() {
        'ngInject';


    }
}

const name = 'tbisDetailsImageInputForm';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        viewModel: '='
    },
    controller: TbisDetailsImageInputForm
});