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

        this.workspaceOptionsDB = workspacesDataService.getWorkspaceOptionsDB();


        // NavSideBar
        this.currentNavSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();
        this.navSideBarOptionsDB = workspacesDataService.getNavSideBarOptionsDB();

        // $scope.$watch('workspacesList.currentNavSideBarOptions.options.currentModule', (newVal) => {
        //     workspacesDataService.setNavSideBarOptionsDB(newVal);
        // });
    }

    setNavSideBarCurrentModule(moduleName) {
        this.currentNavSideBarOptions.options.currentModule = moduleName;
    }

    getNavSideBarOptionsDB(currModule) {
        return this.workspacesDataService.getNavSideBarOptionsDB(currModule);
    }

    toggleNavSideBar() {
        this.currentNavSideBarOptions.options.isOpen = !this.currentNavSideBarOptions.options.isOpen;
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
        template: '<workspaces-list></workspaces-list>',
        resolve: {
            currentUser($q) {
                if (Meteor.userId() === null) {
                    return $q.reject('LOGIN_REQUIRED');
                } else {
                    return $q.resolve();
                }
            }
        }
    });
}