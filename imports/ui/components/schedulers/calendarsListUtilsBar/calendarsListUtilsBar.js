import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './calendarsListUtilsBar.html';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbishisListUtilsBar {
    constructor(userLocalSettingsService) {
        'ngInject';

        // this.utilsBarIconsOptions = this.initUtilsBarIconsOptions();
        //
        // this.categoryOptions = this.initCategoryOptions();
        //
        // this.componentOptions = userLocalSettingsService.getPageSettings('tbishisList', 'tbishisList').utilsBar;
        // console.log('utils bar componentOptions: ', this.componentOptions);
    }

    initUtilsBarIconsOptions() {
        return {
            categories: {
                'Hồ sơ': 'img/icons/common/description.svg',
                'Tin tức': 'img/icons/common/insert_comment.svg',
                'Nhật ký': 'img/icons/common/history.svg'
            }
        };
    }

    openFilterMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    setCategory(mode) {
        this.componentOptions.category = mode;
    }
}

const name = 'calendarsListUtilsBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbishisListUtilsBar
});