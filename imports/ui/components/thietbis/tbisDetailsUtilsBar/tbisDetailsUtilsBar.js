import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsUtilsBar.html';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisDetailsUtilsBar {
    constructor(userLocalSettingsService) {
        'ngInject';

        this.utilsBarIconsOptions = this.initUtilsBarIconsOptions();

        this.categoryOptions = this.initCategoryOptions();

        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails').utilsBar;
        console.log('utils bar componentOptions: ', this.componentOptions);
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

    initCategoryOptions() {
        return [{
            text: 'Hồ sơ',
            icon: this.utilsBarIconsOptions.categories['Hồ sơ'],
            value: 'Hồ sơ'
        }, {
            text: 'Tin tức',
            icon: this.utilsBarIconsOptions.categories['Tin tức'],
            value: 'Tin tức'
        }, {
            text: 'Nhật ký',
            icon: this.utilsBarIconsOptions.categories['Nhật ký'],
            value: 'Nhật ký'
        }];
    }

    openFilterMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);

    }

    setCategory(mode) {
        this.componentOptions.category = mode;
    }
}

const name = 'tbisDetailsUtilsBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
]).component(name, {
    template,
    bindings: {
        title: '@',
        hasOptions: '<'
    },
    controllerAs: name,
    controller: TbisDetailsUtilsBar
});