import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

class UserStatus {
    constructor($scope) {
        'ngInject';
        $scope.userStatus = 'sky-user-status-danger';

        $scope.helpers({
            user() {
                if (!$scope.userId)
                    return;

                let foundUser = Meteor.users.findOne($scope.userId, {fields: {status: 1}});

                if (foundUser && foundUser.status) {
                    if (foundUser.status.idle)
                        $scope.userStatus = 'sky-user-status-warning';
                    else if (foundUser.status.online)
                        $scope.userStatus = 'sky-user-status-success';
                    else
                        $scope.userStatus = 'sky-user-status-danger';
                }
                return '';
            }
        });
    }
}

const name = 'userStatus';

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
            scope.$watch('userStatus', (newValue) => {
                // console.log('begin watcher..', newValue);
                element.removeClass('sky-user-status-warning sky-user-status-success sky-user-status-danger').addClass(newValue);
            });
        },
        controller: UserStatus
    }
});