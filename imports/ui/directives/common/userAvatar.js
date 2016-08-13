import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

class UserAvatar {
    constructor($scope) {
        'ngInject';
        $scope.imgMissingDefault = '/img/avatars/avatar_default.png';
        $scope.userAvatar =  $scope.imgMissingDefault;

        $scope.helpers({
            user() {
                // console.log('begin helpers..', $scope.userId);
                if (!$scope.userId)
                    return;

                let foundUser = Meteor.users.findOne($scope.userId, {fields: {'profile.avatar': 1}});
                // console.log('found: ', foundUser);

                if (foundUser) {
                    if (foundUser.profile && foundUser.profile.avatar && foundUser.profile.avatar.url) {
                        $scope.userAvatar = foundUser.profile.avatar.url;
                        return;
                    }
                }
                return '';
            }
        });
    }
}

const name = 'userAvatar';

// create a module
export default angular.module(name, [
    angularMeteor
]).directive(name, function() {
    return {
        restrict: 'A',
        scope: {
            userId: '@'
        },
        link: (scope, element) => {
            scope.$watch('userAvatar', (newValue) => {
                // console.log('begin watcher..', newValue);
                element.attr('src', newValue);
            });
            element.bind('error', () => {
                element.attr('src', scope.imgMissingDefault);
            })
        },
        controller: UserAvatar
    }
});