import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import _ from 'underscore';

import template from './tbisDisplayListView.html';

import { name as TbisSearchForm } from '../tbisSearchForm/tbisSearchForm';
import { name as TbisFilterForm } from '../tbisFilterForm/tbisFilterForm';
import { name as SkyPager } from '../../layout/skyPager/skyPager';
import { name as SkyPagingInfo } from '../../layout/skyPagingInfo/skyPagingInfo';

import { name as TbisDisplayListItem } from '../tbisDisplayListItem/tbisDisplayListItem';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';



class TbisDisplayListView {
    constructor($reactive, $scope, userLocalSettingsService, tbisDataService, subscribeDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.utilsBarOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;
        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.filterPanelOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').tbisFilterPanel;

        this.ngSortBy = 'ma_thiet_bi.keyId';

        this.subscribe('thietbis', () => [
            {
                limit: parseInt(this.getReactively('subscribeOptions.subscribe.pageSize')),
                skip: parseInt((this.getReactively('subscribeOptions.subscribe.page') - 1) * this.subscribeOptions.subscribe.pageSize),
                sort: this.getReactively('subscribeOptions.subscribe.sort')
            },
            this.getReactively('subscribeOptions.subscribe.searchText'),
            {
                _token: this.getReactively('filterPanelOptions._token'),
                filters: this.filterPanelOptions.filters
            }
        ]);

        this.helpers({
            thietbis() {
                return tbisDataService.query();
            },
            thietbisCount() {
                let totalCount = Counts.get('numberOfThietBis');

                // Cập nhật skyPager
                this.subscribeOptions.subscribe.total = totalCount;

                return totalCount;
            }
        });

        $scope.$watch('tbisDisplayListView.subscribeOptions.subscribe.sort["ma_thiet_bi.keyId"]', (newVal) => {
            this.ngSortBy = (newVal === -1) ? '-ma_thiet_bi.keyId' : 'ma_thiet_bi.keyId';
        });

    }
}

const name = 'tbisDisplayListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisSearchForm,
    TbisFilterForm,
    SkyPager,
    SkyPagingInfo,
    TbisDisplayListItem,
    TbisDataService,
    UserLocalSettingsService,
    SubscribeDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDisplayListView
});