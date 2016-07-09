import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisFilterForm.html';

class TbisFilterForm {
    constructor() {
    }

    submit() {
        console.log('submit filter!');
    }

    reset() {
        console.log('submit reset!');
    }
}

const name = 'tbisFilterForm';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    bindings: {
    },
    controllerAs: name,
    controller: TbisFilterForm
});