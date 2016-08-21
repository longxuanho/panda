import angular from 'angular';
import angularMeteor from 'angular-meteor';
// import { Roles } from 'meteor/alanning:roles';

import template from './navSideBar.html';
import { name as AuthDataService } from '../../../services/users/authDataService';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

import { name as NavSideBarThietBisPanel } from '../navSideBarThietBisPanel/navSideBarThietBisPanel';
import { name as NavSideBarCauHoisPanel } from '../navSideBarCauHoisPanel/navSideBarCauHoisPanel';


class NavSideBar {
    constructor($reactive, $scope, userLocalSettingsService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.componentOptions = userLocalSettingsService.getPageSettings('workspaces', 'workspaces').navSideBar;

        this.helpers({
            currentUserId() {
                return Meteor.userId();
            },
            // isAuthorized() {
            //     return Roles.userIsInRole(Meteor.userId(), 'admin', 'sky-project');
            // }
        });
    }
}

const name = 'navSideBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    NavSideBarThietBisPanel,
    NavSideBarCauHoisPanel,
    AuthDataService,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: NavSideBar
});