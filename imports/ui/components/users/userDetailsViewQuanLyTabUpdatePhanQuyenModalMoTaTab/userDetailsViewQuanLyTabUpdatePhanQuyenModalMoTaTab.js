import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab.html';


class UserDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);
    }

    addNewDescription() {
        this.selectedUserPhanQuyenDesc.push({});
    }

    removeSelectedDescription(index) {
        this.selectedUserPhanQuyenDesc.splice(index, 1);
    }
}

const name = 'userDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    bindings: {
        selectedUserPhanQuyenDesc: '<'
    },
    controllerAs: name,
    controller: UserDetailsViewQuanLyTabUpdatePhanQuyenModalMoTaTab
});