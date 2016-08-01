import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewTbisHistoryItem.html';

import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as DisplayCustomDateTimeFilter } from '../../../filters/common/displayCustomDateTimeFilter';
import { name as TbisHistoriesDataService } from '../../../services/thietbis/tbisHistoriesDataService';

class TbisDetailsViewHistoryViewTbisHistoryItem {
    constructor() {
        'ngInject';
    }
}

const name = 'tbisDetailsViewHistoryViewTbisHistoryItem';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayRelativeTimeFilter,
    DisplayCustomDateTimeFilter,
    TbisHistoriesDataService
]).component(name, {
    template,
    bindings: {
        viewModel: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewTbisHistoryItem
});