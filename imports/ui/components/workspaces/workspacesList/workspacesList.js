import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './workspacesList.html';
import { name as CurrentUserService } from '../../../services/common/currentUserService';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';

class WorkspacesList {
    constructor($scope, $reactive, workspacesDataService, currentUserService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.currentUser = currentUserService.getCurrentUser(); // Dùng để xác định xem user đã kích hoạt (verify) hay chưa

        this.workspaceOptionsDB = workspacesDataService.getWorkspaceOptionsDB();

        // NavSideBar
        this.currentNavSideBarOptions = workspacesDataService.getCurrentNavSideBarOptions();
        this.navSideBarOptionsDB = workspacesDataService.getNavSideBarOptionsDB();



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
    CurrentUserService,
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