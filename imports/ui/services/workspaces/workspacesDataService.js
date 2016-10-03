import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class WorkspacesDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        // NavSideBar
        this.currentNavSideBarOptions = {
            options: this.queryCurrentNavSideBarOptions()
        };
        this.navSideBarOptionsDB = {
            optionsDB: {}
        };

        // UtilsSideBar
        this.currentUtilsSideBarOptions = {
            options: this.queryCurrentUtilsBarOptions()
        };

        this.utilsSideBarOptionsDB = {
            optionsDB: {}
        };
    }

    setUserProfileUrl(userId) {
        if (this.navSideBarOptionsDB.optionsDB.module === 'users') {
            _.each(this.navSideBarOptionsDB.optionsDB.options, (option) => {
                if (option.title === 'Hồ sơ cá nhân')
                    option.url = `quan-ly/users/${userId}`;
            });
        }
    }

    // From Pandora.js when route change success
    updateCurrentState(stateName) {
        this.currentUtilsSideBarOptions.options.currentState = stateName;
    }


    // NavSideBar
    queryCurrentNavSideBarOptions() {
        return this.userLocalSettingsService.getPageSettings('workspaces', 'workspacesList').navSideBar;
    }

    getCurrentNavSideBarOptions() {
        return this.currentNavSideBarOptions;
    }

    setNavSideBarOptionsDB(moduleName) {
        this.navSideBarOptionsDB.optionsDB = _.find(queryNavSideBarOptionsDB(), (item) => {
            return item.module === moduleName;
        });
        // Cập nhật lại đường dẫn tới hồ sơ cá nhân người dùng:
        this.setUserProfileUrl(Meteor.userId());
    }

    getNavSideBarOptionsDB() {
        return this.navSideBarOptionsDB;
    }

    // UtilsSideBar
    queryCurrentUtilsBarOptions() {
        return this.userLocalSettingsService.getPageSettings('workspaces', 'workspacesList').utilsSideBar;
    }

    getCurrentUtilsSideBarOptions() {
        return this.currentUtilsSideBarOptions;
    }

    setUtilsSideBarOptionsDB(moduleName) {
        this.utilsSideBarOptionsDB.optionsDB = _.pick(
            _.find(queryNavSideBarOptionsDB(), (item) => {
                return item.module === moduleName;
            }),
            'module', 'text', 'title', 'icon');
    }

    getUtilsSideBarOptionsDB() {
        return this.utilsSideBarOptionsDB;
    }

    // Get all workspace options available

    getWorkspaceOptionsDB() {
        return queryNavSideBarOptionsDB();
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
            module: 'schedulers',
            text: 'Lịch trình',
            title: 'Lịch trình',
            icon: 'img/icons/schedulers/calendar.svg',
            background: 'deepBlue',
            options: [
                {
                    icon: 'img/icons/workspaces/dashboard.svg',
                    title: 'Lịch của tôi',
                    url: '/lich-trinh/lich-cua-toi'
                }, {
                    icon: 'img/icons/common/date_range.svg',
                    title: 'Kế hoạch công việc',
                    url: '/lich-trinh/ke-hoach'
                }, {
                    icon: 'img/icons/workspaces/dvr.svg',
                    title: 'Thông báo',
                    url: '/lich-trinh/thong-bao'
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