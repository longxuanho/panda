import angular from 'angular';
import angularMeteor from 'angular-meteor';

class TbisDetailsViewPageSettingsService {

    constructor() {
        'ngInject';
        this.settings = initPageSettings();
    }



    getPageSettings() {
        return this.settings;
    }
}

const name = 'tbisDetailsViewPageSettingsService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDetailsViewPageSettingsService);

function initPageSettings() {
    return {
        category: 'Hồ sơ',
        page: '',
        sort: {
        }
    };
}