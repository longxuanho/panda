import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisrepListUtilsBar.html';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisrepListUtilsBar {
    constructor(userLocalSettingsService) {
        'ngInject';

        this.componentOptions = userLocalSettingsService.getPageSettings('tbisrepList', 'tbisrepList').utilsBar;
        console.log('utils bar componentOptions: ', this.componentOptions);
    }


    openFilterMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);

    }
}

const name = 'tbisrepListUtilsBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisrepListUtilsBar
});