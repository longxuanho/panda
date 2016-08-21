import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navSideBarCauHoisPanel.html';



class NavSideBarCauHoisPanel {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

        this.menuItems = [
            {
                icon: 'img/icons/workspaces/dashboard.svg',
                title: 'Bảng tin'
            }, {
                icon: 'img/icons/workspaces/dvr.svg',
                title: 'Danh sách câu hỏi'
            }, {
                icon: 'img/icons/workspaces/assignment.svg',
                title: 'Xuất dữ liệu'
            }
        ];
    }
}

const name = 'navSideBarCauHoisPanel';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: NavSideBarCauHoisPanel
});