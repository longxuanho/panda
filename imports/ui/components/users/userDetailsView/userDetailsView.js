import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsView.html';
// import { name as TbisDetailsViewReportViewTab } from '../tbisDetailsViewReportViewTab/tbisDetailsViewReportViewTab';
// import { name as TbisDetailsViewReportViewFabMenu } from '../tbisDetailsViewReportViewFabMenu/tbisDetailsViewReportViewFabMenu';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetailsView {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);
    }
}

const name = 'userDetailsView';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
    // TbisDetailsViewReportViewTab,
    // TbisDetailsViewReportViewFabMenu,
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsView
});