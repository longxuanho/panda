import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navSideBar.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

import { name as NavSideBarCurrentPanel } from '../navSideBarCurrentPanel/navSideBarCurrentPanel';


class NavSideBar {
    constructor($reactive, $scope, workspacesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.componentOptions = workspacesDataService.getCurrentNavSideBarOptions();

        this.helpers({
            currentUserId() {
                return Meteor.userId();
            }
        });
    }
}

const name = 'navSideBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    NavSideBarCurrentPanel,
    AuthDataService,
    WorkspacesDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: NavSideBar
});