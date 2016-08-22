import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './utilsSideBar.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

import { name as UtilsSideBarCurrentPanel } from '../utilsSideBarCurrentPanel/utilsSideBarCurrentPanel';


class UtilsSideBar {
    constructor($reactive, $scope, workspacesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.componentOptions = workspacesDataService.getCurrentUtilsSideBarOptions();

    }
}

const name = 'utilsSideBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    UtilsSideBarCurrentPanel,
    AuthDataService,
    WorkspacesDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: UtilsSideBar
});