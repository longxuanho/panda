import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navSideBarCurrentPanel.html';

import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class NavSideBarCurrentPanel {
    constructor($reactive, $scope, workspacesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.workspacesDataService = workspacesDataService;

        this.currentNavSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();

        $scope.$watch('navSideBarCurrentPanel.currentNavSideBarOptions.currentMode', (newVal) => {
            this.currentNavSideBarOptionsDB = this.getNavSideBarOptionsDB(newVal);
        });

    }

    getNavSideBarOptionsDB(currentModule) {
        return this.workspacesDataService.getNavSideBarOptionsDB(currentModule);
    }
}

const name = 'navSideBarCurrentPanel';

// create a module
export default angular.module(name, [
    angularMeteor,
    WorkspacesDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: NavSideBarCurrentPanel
});