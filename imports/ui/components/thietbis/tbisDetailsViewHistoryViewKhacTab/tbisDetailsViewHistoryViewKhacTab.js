import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewKhacTab.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as TbisDetailsViewHistoryViewDurationToolbar } from '../tbisDetailsViewHistoryViewDurationToolbar/tbisDetailsViewHistoryViewDurationToolbar';


class TbisDetailsViewHistoryViewKhacTab {
    constructor(userLocalSettingsService) {
        'ngInject';
        this.durationToolbarOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails').modules.tbisHistories.durationToolbar;


    }
}

const name = 'tbisDetailsViewHistoryViewKhacTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService,
    TbisDetailsViewHistoryViewDurationToolbar
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewKhacTab
});