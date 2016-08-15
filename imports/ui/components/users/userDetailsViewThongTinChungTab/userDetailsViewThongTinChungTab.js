import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewThongTinChung.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';


class UserDetailsViewThongTinChungTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

    }
}

const name = 'userDetailsViewThongTinChungTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewThongTinChungTab
});