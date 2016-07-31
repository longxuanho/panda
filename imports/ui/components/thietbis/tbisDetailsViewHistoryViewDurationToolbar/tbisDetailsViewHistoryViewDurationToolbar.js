import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewDurationToolbar.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class TbisDetailsViewHistoryViewDurationToolbar {
    constructor(userLocalSettingsService) {
        'ngInject';

        this.durationToolbarOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails').modules.tbisHistories.durationToolbar;
    }
}

const name = 'tbisDetailsViewHistoryViewDurationToolbar';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService,
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewDurationToolbar
});