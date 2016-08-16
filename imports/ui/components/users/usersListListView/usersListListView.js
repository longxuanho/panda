import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './usersListListView.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UsersListListView {
    constructor($reactive, $scope, usersDataService) {
        'ngInject';
        $reactive(this).attach($scope);
        this.helpers({
            users() {
                return usersDataService.query();
            },
            usersCount() {
                return Counts.get('numberOfUsers');
            }
        });
    }
}

const name = 'usersListListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
]).component(name, {
    template,
    bindings: {
    },
    controllerAs: name,
    controller: UsersListListView
});