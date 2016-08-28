import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';

import screenfull from '../../../../lib/screenfull/screenfull';

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
        this.navSideBarOptions.options.isOpen = !this.navSideBarOptions.options.isOpen;
    }

    toggleFullScreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
        } else {
            console.log('toggle screen fails')
        }
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