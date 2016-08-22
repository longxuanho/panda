import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class WorkspacesDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;
        this.currentNavSideBarOptions = this.queryCurrentNavSideBarOptions();
        this.navSideBarOptionsDB = queryNavSideBarOptionsDB();

    }

    getCurrentNavSideBarOptions() {
        return this.currentNavSideBarOptions;
    }

    queryCurrentNavSideBarOptions() {
        return this.userLocalSettingsService.getPageSettings('workspaces', 'workspaces').navSideBar;
    }

    getNavSideBarOptionsDB(moduleName) {
        if (moduleName)
            return _.find(this.navSideBarOptionsDB, (item) => {
                return item.module === moduleName;
            });

        return this.navSideBarOptionsDB;
    }
}

const name = 'workspacesDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
])
    .service(name, WorkspacesDataService);


function queryNavSideBarOptionsDB() {
    return [
        {
            module: 'thietbis',
            text: 'Thiết bị',
            title: 'Quản lý Thiết bị',
            icon: 'img/icons/workspaces/container.svg',
            background: 'pink',
            options: [
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
            ]
        }, {
            module: 'cauhois',
            text: 'Câu hỏi NGB',
            title: 'Câu hỏi NGB',
            icon: 'img/icons/workspaces/notepad.svg',
            background: 'lightPurple',
            options: [
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
            ]
        }, {
            module: 'users',
            text: 'Người dùng',
            title: 'Thông tin người dùng',
            icon: 'img/icons/workspaces/teamwork.svg',
            background: 'purple',
            options: [
                {
                    icon: 'img/icons/workspaces/dashboard.svg',
                    title: 'Bảng tin'
                }, {
                    icon: 'img/icons/common/people.svg',
                    title: 'Danh sách người dùng'
                }, {
                    icon: 'img/icons/common/person.svg',
                    title: 'Hồ sơ cá nhân'
                }
            ]
        }
    ];
}