import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';

import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class Navigation {
    constructor($reactive, $scope, workspacesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.navSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();

        this.helpers({
            currentUserId() {
                return Meteor.userId();
            }
        });
    }

    toggleNavSideBar() {
        this.navSideBarOptions.isOpen = !this.navSideBarOptions.isOpen;
    }
}

const name = 'navigation';

// create a module
export default angular.module(name, [
    angularMeteor,
    WorkspacesDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: Navigation
});