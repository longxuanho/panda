import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetails.html';
import { name as UserDetailsLabel } from '../userDetailsLabel/userDetailsLabel';
import { name as UserDetailsView } from '../userDetailsView/userDetailsView';

import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetails {
    constructor($reactive, $scope, $mdMedia, usersDataService, $stateParams) {
        'ngInject';
        $reactive(this).attach($scope);

        this.$mdMedia = $mdMedia;
        // this.subscribeOptions = userLocalSettingsService.getPageSettings('tbisreports', 'tbisrepList').suscribe;

        this.subscribe('users');

        this.helpers({
            userDetails() {
                usersDataService.setSelectedUser($stateParams.userId);
                return usersDataService.getSelectedUser();
            }
        });

    }


}

const name = 'userDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserDetailsLabel,
    UserDetailsView,
    UsersDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: UserDetails
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('usersdetails', {
            url: '/quan-ly/users/:userId',
            template: '<user-details></user-details>',
            resolve: {
                currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        });
}