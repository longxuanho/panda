import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Random } from 'meteor/random';
import _ from 'underscore';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class UtilsTopBarDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        this.allowedStates = ['tbisList', 'dhelpsList'];

        this.currentUtilsTopBarOptions = {};
        this.utilsTopBarOptionsDB = {};

    }

    updateCurrentOptions(stateName) {
        // Check pandora.js - Hàm được gọi mỗi khi chuyển route thành công
        this.currentUtilsTopBarOptions = this.queryCurrentUtilsTopBarOptions(stateName);
        this.utilsTopBarOptionsDB = this.queryUtilsTopBarOptionsDB(stateName);

        // console.log('resolved: ', stateName, this.currentUtilsTopBarOptions, this.utilsTopBarOptionsDB);
    }

    queryCurrentUtilsTopBarOptions(stateName) {
        if (_.contains(this.allowedStates, stateName)) {
            return this.userLocalSettingsService.getPageSettings('workspaces', 'utilsTopBar')[stateName];
        }
        return {};
    }

    queryUtilsTopBarOptionsDB(stateName) {
        if (_.contains(this.allowedStates, stateName)) {
            return _.find(queryUtilsTopBarOptionsDB(), (item) => {
                return item.stateName === stateName;
            });
        }
        return {};
    }

    getCurrentUtilsTopBarOptions() {
        return this.currentUtilsTopBarOptions;
    }

    getUtilsTopBarOptionsDB() {
        return this.utilsTopBarOptionsDB.features;
    }

    triggerRefreshToken() {
        this.currentUtilsTopBarOptions._token = Random.id();
    }

}

const name = 'utilsTopBarDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
])
    .service(name, UtilsTopBarDataService);


function queryUtilsTopBarOptionsDB() {
    return [
        {
            stateName: 'tbisList',
            features: [
                {
                    name: 'categories',
                    menuItems: [
                        {
                            text: 'Tất cả',
                            value: 'Tất cả',
                            icon: 'img/icons/tbis/all.svg'
                        }, {
                            text: 'Thiết bị nâng',
                            value: 'Thiết bị nâng',
                            icon: 'img/icons/tbis/tbn.svg'
                        }, {
                            text: 'Xe máy',
                            value: 'Xe máy',
                            icon: 'img/icons/tbis/xmy.svg'
                        }, {
                            text: 'Tàu thuyền',
                            value: 'Tàu thuyền',
                            icon: 'img/icons/tbis/tth.svg'
                        }, {
                            text: 'Trạm nguồn',
                            value: 'Trạm nguồn',
                            icon: 'img/icons/tbis/trn.svg'
                        }, {
                            text: 'Thanh lý',
                            value: 'Thanh lý',
                            icon: 'img/icons/tbis/thl.svg'
                        }
                    ]
                }, {
                    name: 'viewModes',
                    menuItems: [
                        {
                            text: 'Dạng danh sách',
                            value: 'list',
                            icon: 'img/icons/common/view_list.svg'
                        }, {
                            text: 'Dạng bảng biểu',
                            value: 'grid',
                            icon: 'img/icons/common/view_table.svg'
                        }
                    ]
                }
            ]
        }, {
            stateName: 'dhelpsList',
            features: [
                {
                    name: 'categories',
                    menuItems: [
                        {
                            text: 'Commons',
                            value: 'commons',
                            icon: 'img/icons/tbis/all.svg'
                        },
                        {
                            text: 'Thietbis',
                            value: 'thietbis',
                            icon: 'img/icons/tbis/tbn.svg'
                        },
                        {
                            text: 'Thongsokts',
                            value: 'thongsokts',
                            icon: 'img/icons/common/straighten.svg'
                        },

                    ]
                }, {
                    name: 'viewModes',
                    menuItems: [
                        {
                            text: 'Dạng danh sách',
                            value: 'list',
                            icon: 'img/icons/common/view_list.svg'
                        }, {
                            text: 'Dạng bảng biểu',
                            value: 'grid',
                            icon: 'img/icons/common/view_table.svg'
                        }
                    ]
                }
            ]
        }
    ]
}