import angular from 'angular';
import angularMeteor from 'angular-meteor';

class ImageFallback {
    constructor($scope) {
        'ngInject';
        $scope.imgMissingDefault = '/img/avatars/avatar_default.png';
    }
}

const name = 'imageFallback';

// create a module
export default angular.module(name, [
    angularMeteor
]).directive(name, function() {
    return {
        restrict: 'A',
        scope: {
            imageUrl: '@'
        },
        link: (scope, element) => {
            scope.$watch('imageUrl', (newValue) => {
                element.attr('src', newValue);
            });
            element.bind('error', () => {
                element.attr('src', scope.imgMissingDefault);
            })
        },
        controller: ImageFallback
    }
});