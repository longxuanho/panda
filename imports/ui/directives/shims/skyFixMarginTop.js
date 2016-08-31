import angular from 'angular';
import angularMeteor from 'angular-meteor';

class SkyFixMarginTop {
    constructor() {
        'ngInject';
        $('#sky-fix-margin-top').height($('#sky-navigation').height());
    }
}

const name = 'skyFixMarginTop';

// create a module
export default angular.module(name, [
    angularMeteor
]).directive(name, function() {
    return {
        restrict: 'A',
        link: (scope, element) => {

            $( window ).resize(function() {
                element.height($('#sky-navigation').height());
            });

        },
        controller: SkyFixMarginTop
    }
});