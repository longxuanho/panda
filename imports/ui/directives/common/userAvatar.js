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
                $scope.userAvatar = resolveUserAvatar($scope.userId);
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
            // Chọn một trong 2 thuộc tính để binding
            userId: '@',
            imgSrc: '@'
        },
        link: (scope, element) => {
            scope.$watch('userAvatar', (newValue) => {
                element.attr('src', newValue);
            });
            scope.$watch('imgSrc', (newValue) => {
                element.attr('src', newValue);
            });
            element.bind('error', () => {
                element.attr('src', scope.imgMissingDefault);
            });
        },
        controller: UserAvatar
    }
});

function resolveUserAvatar(userId) {
    if (!userId)
        return '';

    let foundUser = Meteor.users.findOne(userId, {fields: {'profile.avatar': 1}});
    if (foundUser && foundUser.profile && foundUser.profile.avatar)
        return (foundUser.profile.avatar.isGAvatar) ? foundUser.profile.avatar.gAvatarUrl : foundUser.profile.avatar.url || '';

    return '';
}