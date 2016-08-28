import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navSideBarCurrentPanel.html';

import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class NavSideBarCurrentPanel {
    constructor($reactive, $scope, workspacesDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.currentNavSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();
        this.currentNavSideBarOptionsDB = workspacesDataService.getNavSideBarOptionsDB();


        $scope.$watch('navSideBarCurrentPanel.currentNavSideBarOptions.options.currentModule', (newVal) => {
            workspacesDataService.setNavSideBarOptionsDB(newVal);
        });

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