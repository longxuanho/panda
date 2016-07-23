import angular from 'angular';
import angularMeteor from 'angular-meteor';

class TbisListPageSettingsService {

    constructor() {
        'ngInject';
        this.settings = initPageSettings();
    }

    getPageSettings() {
        return this.settings;
    }
}

const name = 'tbisListPageSettingsService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisListPageSettingsService);

function initPageSettings() {
    return {
        category: 'Tất cả',
        viewMode: 'list',
        filterText: '',
        filterBy: '',
        searchText: '',
        searchBy: 'searchField',
        searchFilterMode: 'search',     // Available options: search, filter, search_filter
        page: '',
        sort: {
        }
    };
}