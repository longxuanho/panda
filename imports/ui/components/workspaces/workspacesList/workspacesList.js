import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './workspacesList.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class WorkspacesList {
    constructor($scope, $reactive, workspacesDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.workspacesDataService = workspacesDataService;

        this.currentNavSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();
        this.navSideBarOptionsDB = workspacesDataService.getNavSideBarOptionsDB();

        $scope.$watch('workspacesList.currentNavSideBarOptions.currentMode', (newVal) => {
            this.currentNavSideBarOptionsDB = this.getNavSideBarOptionsDB(newVal);
        });
    }

    setNavSideBarCurrentMode(name) {
        this.currentNavSideBarOptions.currentMode = name;
    }

    getNavSideBarOptionsDB(currentModule) {
        return this.workspacesDataService.getNavSideBarOptionsDB(currentModule);
    }

    toggleNavSideBar() {
        this.currentNavSideBarOptions.isOpen = !this.currentNavSideBarOptions.isOpen;
    }
}

const name = 'workspacesList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    UserLocalSettingsService,
    WorkspacesDataService
])
    .component(name, {
        template,
        controllerAs: name,
        controller: WorkspacesList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('workspacesList', {
        url: '/quan-ly/ban-lam-viec',
        template: '<workspaces-list></workspaces-list>'
    });
}