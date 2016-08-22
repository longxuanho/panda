import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class WorkspacesDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        this.currentNavSideBarOptions = this.queryCurrentNavSideBarOptions();
        this.currentUtilsSideBarOptions = this.queryCurrentUtilsBarOptions();

        this.navSideBarOptionsDB = queryNavSideBarOptionsDB();


    }

    setUserProfileUrl(userId) {
        // Sử dụng trong $watch của auth: Khi có thay đổi trạng thái người dùng, hàm này sẽ cập nhật lại url tới profile người dùng để dùng trong navsidebar hoặc workspaceslist
        _.each(this.navSideBarOptionsDB, (item) => {
            if (item.module === 'users')
                _.each(item.options, (option) => {
                   if (option.title === 'Hồ sơ cá nhân')
                       option.url = `quan-ly/users/${userId}`;
                });
        });
    }

    getCurrentNavSideBarOptions() {
        return this.currentNavSideBarOptions;
    }

    getCurrentUtilsSideBarOptions() {
        return this.currentUtilsSideBarOptions;
    }


    queryCurrentNavSideBarOptions() {
        return this.userLocalSettingsService.getPageSettings('workspaces', 'workspaces').navSideBar;
    }

    queryCurrentUtilsBarOptions() {
        return this.userLocalSettingsService.getPageSettings('workspaces', 'workspaces').utilsSideBar;
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
                    title: 'Bảng tin',
                    icon: 'img/icons/workspaces/dashboard.svg',
                    url: '/quan-ly/thiet-bi'
                }, {
                    title: 'Thực lực phương tiện',
                    icon: 'img/icons/workspaces/dvr.svg',
                    url: '/quan-ly/thiet-bi'
                }, {
                    title: 'Thông số kỹ thuật',
                    icon: 'img/icons/workspaces/assignment.svg',
                    url: '/quan-ly/thong-so-ky-thuat'
                }, {
                    title: 'Thông báo',
                    icon: 'img/icons/workspaces/comment.svg',
                    url: '/quan-ly/thong-bao-thiet-bi'
                }, {
                    title: 'Nhật ký phương tiện',
                    icon: 'img/icons/workspaces/border_color.svg',
                    url: '/quan-ly/nhat-ky-thiet-bi'
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
                    title: 'Danh sách người dùng',
                    url: '/quan-ly/users'
                }, {
                    icon: 'img/icons/common/person.svg',
                    title: 'Hồ sơ cá nhân',
                    url: ''
                }
            ]
        }
    ];
}