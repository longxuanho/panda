import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import moment from 'moment';

class UserLocalSettingsService {

    constructor() {
        'ngInject';
        this.settings = queryDefaultSettings();
    }

    initDefaultCurrentUserLocalSettings() {
        // console.log('initDefaultCurrentUserLocalSettings');
        this.settings = queryDefaultSettings();
    }

    initCurrentUserLocalSettings(user) {
        // console.log('initCurrentUserLocalSettings');
        if (!_.isEmpty(user)) {
            let allSettings = queryAllLocalSettings();
            let foundSetting = _.find(allSettings, (setting) => {
                return setting.user._id === user._id;
            });
            if (_.isEmpty(foundSetting)) {
                // this.initDefaultCurrentUserLocalSettings();
            }
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
                suscribe: {
                    category: 'Tất cả',
                    searchText: '',
                    searchBy: 'searchField',
                    page: 1,
                    pageSize: 5,
                    sort: {
                        'ma_thiet_bi.keyId': 1
                    },
                    total: 0
                }
            }
        },
        {
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
        },
        {
            _id: "Ryt6Berm4DbTR2eom",
            module: "tbisreports",
            page: "tbisrepList",
            options: {
                searchFilterBar: {
                    mode: 'search', // Available options: search, filter, search_filter
                    searchText: '',
                    searchBy: 'thong_ke.searchField',
                    sort: -1
                },
                suscribe: {
                    status: 'open',
                    page: 1,
                    pageSize: 5,
                    searchText: '',
                    sort: {
                        'metadata.thoi_gian.tao_moi.ngay_tao_string': -1
                    }
                }
            }
        },
        {
            _id: "Uit6Berm4FghR2eok",
            module: "tbishistories",
            page: "tbishisList",
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
                    }
                },
                suscribe: {
                    nhom: 'Sửa chữa nhỏ',
                    page: 1,
                    pageSize: 5,
                    searchText: '',
                    sort: {
                        'metadata.thoi_gian.tao_moi.ngay_tao_string': -1
                    }
                }
            }
        },
        {
            _id: "Uit6Bekm4FguR2eoi",
            module: "workspaces",
            page: "workspacesList",
            options: {
                navSideBar: {
                    isOpen: false,
                    currentModule: 'thietbis',
                },
                utilsSideBar: {
                    isOpen: false,
                    currentState: ''
                }
            }
        },
        {
            _id: "Urt6Bnkm4FgkR2eoi",
            module: "workspaces",
            page: "utilsTopBar",
            options: {
                tbisList: {
                    viewMode: 'list', // list or grid?
                    _refreshTokenInGridMode: 'default_token'
                },
                dhelpsList: {
                    viewMode: 'grid', // list or grid?
                    _refreshTokenInGridMode: 'default_token'
                }
            }
        },
        {
            _id: "Urt6Bnkm4FgkR2eoi",
            module: "workspaces",
            page: "utilsFilters",
            options: {
                tbisList: {
                    display: {
                        isPhanLoaiPanel: true,
                        isHoSoTBPanel: true,
                        isPhanQuyenPanel: true
                    },
                    filters: {
                        chungloais: [],
                        loais: [],
                        khuvucs: [],
                        hangsanxuats: [],
                        dvsohuus: [],
                        dvquanlies: []
                    },
                    _token: 'default_token'
                }
            }
        },
        {
            _id: "Urt6Bnkm4FgkR2eoi",
            module: "workspaces",
            page: "kendoGrid",
            options: {
                tbisList: {
                    groupable: true,
                    filterable: {
                        extra: true
                    },
                    sortable: true,
                    resizable: true,
                    reorderable: true,
                    pageable: {
                        pageSizes: true,
                        buttonCount: 5
                    },
                    excel: {
                        allPages: true,
                        fileName: 'From Sky with Love.xlsx',
                        filterable: true
                    },
                    pdf: {
                        allPages: false,
                        author: 'Skynet',
                        creator: 'Long Ho',
                        fileName: 'From Sky with Love.pdf',
                        landscape: true,
                        pageSize: 'auto'
                    }
                },
                tbisrepList: {},
                tbishisList: {},
                dhelpsList: {
                    groupable: true,
                    filterable: {
                        extra: true
                    },
                    sortable: true,
                    resizable: true,
                    reorderable: true,
                    selectable: "row",
                    pageable: {
                        pageSizes: true,
                        buttonCount: 5
                    },
                    excel: {
                        allPages: true,
                        fileName: 'DataHelpers.xlsx',
                        filterable: true
                    }
                }
            }
        },
        {
            _id: "Ahd6Berm4DbTR2ews",
            module: "datahelpers",
            page: "dhelpsList",
            options: {
                suscribe: {
                    category: 'thietbis',
                    stateName: '',
                    subject: ''
                }
            }
        }
    ]
}