import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import template from './userDetailsViewQuyenHanTab.html';
import { name as UsersDataService } from '../../../services/users/usersDataService';


class UserDetailsViewQuyenHanTab {
    constructor($reactive, $scope, usersDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.iconRef = {
            'sky-project': '/img/icons/users/container.svg',
            'tbis': '/img/icons/users/container.svg',
            'cauhois': '/img/icons/users/books.svg',
            'dvktpxscs': '/img/icons/users/hangar.svg'
        };

        this.moduleNameRef = {
            'tbis': 'Module: Quản lý phương tiện',
            'cauhois': 'Module: Câu hỏi NGB',
            'dvktpxscs': 'Module: Phân xưởng sửa chữa (DVKT)'
        };

        $scope.$watch('userDetailsViewQuyenHanTab.userDetails.profile.phan_quyen_desc', (newVal) => {
            this.resolveUIData(newVal);
        });
    }

    resolveUIData(phanQuyenDesc) {
        this.resolvedUserPhanQuyenDesc = _.groupBy(phanQuyenDesc, 'module');
        this.resolvedKeysUserPhanQuyenDesc = _.keys(this.resolvedUserPhanQuyenDesc);
    }
}

const name = 'userDetailsViewQuyenHanTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UsersDataService
]).component(name, {
    template,
    bindings: {
        userDetails: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewQuyenHanTab
});
