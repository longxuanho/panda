import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './utilsSideBarCurrentPanel.html';

import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class UtilsSideBarCurrentPanel {
    constructor($reactive, $scope, workspacesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.workspacesDataService = workspacesDataService;

        this.currentNavSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();


        $scope.$watch('utilsSideBarCurrentPanel.currentNavSideBarOptions.currentMode', (newVal) => {
            this.currentNavSideBarOptionsDB = this.getNavSideBarOptionsDB(newVal);
        });

    }

    getNavSideBarOptionsDB(currentModule) {
        return this.workspacesDataService.getNavSideBarOptionsDB(currentModule);
    }
}

const name = 'utilsSideBarCurrentPanel';

// create a module
export default angular.module(name, [
    angularMeteor,
    WorkspacesDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: UtilsSideBarCurrentPanel
});