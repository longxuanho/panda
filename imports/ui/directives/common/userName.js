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

                let foundUser = Meteor.users.findOne($scope.userId);

                if (foundUser) {
                    if (foundUser.profile && foundUser.profile.name) {
                        if (foundUser.profile.don_vi && foundUser.profile.don_vi.ma)
                            $scope.maDonVi = foundUser.profile.don_vi.ma;
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