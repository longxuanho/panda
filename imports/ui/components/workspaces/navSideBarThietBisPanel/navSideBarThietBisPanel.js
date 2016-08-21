import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navSideBarThietBisPanel.html';



class NavSideBarThietBisPanel {
    constructor($reactive, $scope) {
        'ngInject';
        $reactive(this).attach($scope);

        this.menuItems = [
            {
                icon: 'img/icons/workspaces/dashboard.svg',
                title: 'Bảng tin'
            }, {
                icon: 'img/icons/workspaces/dvr.svg',
                title: 'Thực lực phương tiện'
            }, {
                icon: 'img/icons/workspaces/assignment.svg',
                title: 'Thông số kỹ thuật'
            }, {
                icon: 'img/icons/workspaces/comment.svg',
                title: 'Thông báo'
            }, {
                icon: 'img/icons/workspaces/border_color.svg',
                title: 'Nhật ký phương tiện'
            }
        ];
    }
}

const name = 'navSideBarThietBisPanel';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: NavSideBarThietBisPanel
});