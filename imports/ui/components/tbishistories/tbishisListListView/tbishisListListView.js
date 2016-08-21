import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbishisListListView.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as TbisDetailsViewHistoryViewThongKeTab } from '../../thietbis/tbisDetailsViewHistoryViewThongKeTab/tbisDetailsViewHistoryViewThongKeTab';
import { name as TbisDetailsViewHistoryViewLuotScnTab } from '../../thietbis/tbisDetailsViewHistoryViewLuotScnTab/tbisDetailsViewHistoryViewLuotScnTab';


class TbishisListListView {
    constructor($scope, $reactive, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);
        this.subscribeOptions = userLocalSettingsService.getPageSettings('tbishistories', 'tbishisList').suscribe;

        this.subscribe('tbishistories', () => [
            {
                limit: parseInt(this.getReactively('subscribeOptions.pageSize')),
                skip: parseInt((this.getReactively('subscribeOptions.page') - 1) * this.subscribeOptions.pageSize),
                sort: this.getReactively('subscribeOptions.sort')
            },
            this.getReactively('subscribeOptions.searchText'),
            this.getReactively('subscribeOptions.nhom')
        ]);
    }
}

const name = 'tbishisListListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    UserLocalSettingsService,
    TbisDetailsViewHistoryViewThongKeTab,
    TbisDetailsViewHistoryViewLuotScnTab,
    TbisDetailsViewHistoryViewLuotScnTab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbishisListListView
})