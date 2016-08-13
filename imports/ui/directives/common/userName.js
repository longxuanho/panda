import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

class UserName {
    constructor($scope) {
        'ngInject';
        $scope.helpers({
            user() {
                // console.log('begin helpers..', $scope.userId);

                $scope.maDonVi = 'UFO';

                if (!$scope.userId)
                    return;

                if (Meteor.userId() !== null && $scope.userId === Meteor.userId()) {
                    $scope.userName = 'Tôi';
                    return;
                }

                let foundUser = Meteor.users.findOne({_id: $scope.userId}, {fields: {'profile.name': 1 , 'profile.bien_che.ma': 1, 'emails': 1}});

                if (foundUser) {
                    if (foundUser.profile && foundUser.profile.name) {
                        if (foundUser.profile.bien_che && foundUser.profile.bien_che.ma)
                            $scope.maDonVi = foundUser.profile.bien_che.ma;
                        $scope.userName = foundUser.profile.name;
                        return;
                    }
                    if (foundUser.emails) {
                        $scope.userName = foundUser.emails[0].address;
                        return;
                    }

                }
                $scope.userName = 'Vô danh';
                return '';
            }
        });
    }
}

const name = 'userName';

// create a module
export default angular.module(name, [
    angularMeteor
]).directive(name, function() {
    return {
        restrict: 'A',
        scope: {
            userId: '@',
            mode: '@'
        },
        link: (scope, element) => {
            scope.$watch('userName', (newValue) => {
                // console.log('begin watcher..', newValue);
                if (scope.mode === 'ten&maDonVi') {
                    element.text(`${newValue} · ${scope.maDonVi}`);
                }
                else
                    element.text(newValue);
            })
        },
        controller: UserName
    }
});