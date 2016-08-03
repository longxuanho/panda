import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import moment from 'moment';

class UserLocalSettingsService {

    constructor() {
        'ngInject';
        this.settings = [];
        this.defaultSettings = queryDefaultSettings();
    }

    initDefaultCurrentUserLocalSettings() {
        // console.log('initDefaultCurrentUserLocalSettings');
        this.settings = angular.copy(this.defaultSettings);
    }

    initCurrentUserLocalSettings(user) {
        // console.log('initCurrentUserLocalSettings');
        if (!_.isEmpty(user)) {
            let allSettings = queryAllLocalSettings();
            let foundSetting = _.find(allSettings, (setting) => {
                return setting.user._id === user._id;
            });
            if (_.isEmpty(foundSetting))
                this.initDefaultCurrentUserLocalSettings();
            else
                this.settings = foundSetting.settings;
        } else
            this.initDefaultCurrentUserLocalSettings();
        // console.log('resolved: ', this.settings);
    }

    getPageSettings(moduleName, pageName) {
        // console.log('getPageSettings', this.settings);
        return _.find(this.settings, (setting) => {
            return (setting.module === moduleName) && (setting.page === pageName);
        }).options;
    }
}

const name = 'userLocalSettingsService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, UserLocalSettingsService);

function queryAllLocalSettings() {
    return []
}

function queryDefaultSettings() {
    "use strict";

    return [
        {
            _id: "Ahd6Berm4DbTR2ews",
            module: "thietbis",
            page: "tbisList",
            options: {
                utilsBar: {
                    category: 'Tất cả',
                    viewMode: 'list',
                    filterText: '',
                    filterBy: '',
                    searchText: '',
                    searchBy: 'searchField',
                    searchFilterMode: 'search',     // Available options: search, filter, search_filter
                    page: 1,
                    pageSize: 5,
                    sort: {
                    },
                    filters: {
                        chungloais: [],
                        loais: [],
                        khuvucs: [],
                        hangsanxuats: [],
                        dvsohuus: [],
                        dvquanlies: []
                    }
                },
                searchFilter: {
                    mode: 'search', // Available options: search, filter, search_filter
                    searchText: '',
                    searchBy: 'searchField',
                    filterText: '',
                    filterBy: '',
                },
                subscribe: {
                    page: '',
                    sort: {
                    }
                }
            }
        }, {
            _id: "Bmd6Berm4DbTR2ewk",
            module: "thietbis",
            page: "tbisDetails",
            options: {
                utilsBar: {
                    category: "Hồ sơ"
                },
                modules: {
                    tbisHistories: {
                        durationToolbar: {
                            mode: 'default',
                            default: {
                                duration: '7_days',
                                fromDate: moment().subtract(7, 'days').toDate(),
                                toDate: new Date()
                            },
                            selectByUser: {
                                fromDate: moment().subtract(7, 'days').toDate(),
                                toDate: new Date(),
                            }
                        }
                    }
                }
            }
        }
    ]
}