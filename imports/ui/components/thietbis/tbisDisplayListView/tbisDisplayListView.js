import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayListView.html';

import { name as TbisSearchForm } from '../tbisSearchForm/tbisSearchForm';
import { name as TbisFilterForm } from '../tbisFilterForm/tbisFilterForm';

import { name as TbisDisplayListItem } from '../tbisDisplayListItem/tbisDisplayListItem';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisDisplayListView {
    constructor($reactive, $scope, userLocalSettingsService, tbisDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;
        this.filterPanelOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').tbisFilterPanel;
        console.log('this: ', this.filterPanelOptions);
        $scope.$watch('tbisDisplayListView.filterPanelOptions._token', (newValue) => {
            console.log('change triggered, ', newValue);
        });

        this.searchText = '';

        this.subscribe('thietbis', () => [
            {
                limit: parseInt(this.getReactively('componentOptions.pageSize')),
                skip: parseInt((this.getReactively('componentOptions.page') - 1) * this.componentOptions.pageSize),
                sort: this.getReactively('sort')
            },
            this.getReactively('searchText'),
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
                return Counts.get('numberOfThietBis');
            }
        });
        
    }

    pageChanged(newPage) {
        this.componentOptions.page = newPage;
    }

    sortChanged(sort) {
        this.componentOptions.sort = sort;
    }
}

const name = 'tbisDisplayListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisSearchForm,
    TbisFilterForm,
    TbisDisplayListItem,
    TbisDataService,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
    },
    controller: TbisDisplayListView
});