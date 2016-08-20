import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Roles } from 'meteor/alanning:roles';

import template from './userDetailsView.html';
import { name as UserDetailsViewThongTinChungTab } from '../userDetailsViewThongTinChungTab/userDetailsViewThongTinChungTab';
import { name as UserDetailsViewQuyenHanTab } from '../userDetailsViewQuyenHanTab/userDetailsViewQuyenHanTab';
import { name as UserDetailsViewThietLapTab } from '../userDetailsViewThietLapTab/userDetailsViewThietLapTab';
import { name as UserDetailsViewQuanLyTab } from '../userDetailsViewQuanLyTab/userDetailsViewQuanLyTab';
import { name as UsersDataService } from '../../../services/users/usersDataService';



class UserDetailsView {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

        this.helpers({
            currentUserId() {
                return Meteor.userId();
            },
            isAuthorized() {
                return Roles.userIsInRole(Meteor.userId(), 'admin', 'sky-project');
            }
        });
    }
}

const name = 'userDetailsView';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    UserDetailsViewThongTinChungTab,
    UserDetailsViewQuyenHanTab,
    UserDetailsViewThietLapTab,
    UserDetailsViewQuanLyTab
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsView
});