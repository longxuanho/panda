import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbisList.html';


import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as TbisUtilsBar } from '../tbisUtilsBar/tbisUtilsBar';
import { name as TbisSearchForm } from '../tbisSearchForm/tbisSearchForm';
import { name as TbisFilterForm } from '../tbisFilterForm/tbisFilterForm';
import { name as TbisListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';

import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';
import { name as TbisDisplayGridView } from '../tbisDisplayGridView/tbisDisplayGridView';

import { name as TbisListPageSettingsService } from '../../../services/thietbis/tbisListPageSettingsService';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class TbisList {
    constructor($scope, $reactive, userLocalSettingsService, tbisDataService,
                tbisPhanLoaiDataService, tbisNguonGocDataService, tbisPhanQuyenDataService,
                tbisDiaDiemDataService, tbisReferenceDataService,
                tsktThongSoKyThuatDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;

        this.searchText = '';
        this.isOpen = false;

        this.subscribe('thietbis', () => [
            {
                limit: parseInt(this.perPage),
                skip: parseInt((this.getReactively('page') - 1) * this.perPage),
                sort: this.getReactively('sort')
            },
            this.getReactively('searchText')
        ]);

        this.subscribe('tbishelpers');
        this.subscribe('tskthelpers');
        
        this.helpers({
            tbishelpers() {
                tbisPhanLoaiDataService.queryAll();
                tbisNguonGocDataService.queryAll();
                tbisPhanQuyenDataService.queryAll();
                tbisDiaDiemDataService.queryAll();
                tbisReferenceDataService.queryAll();
            },
            tskthelpers() {
                tsktThongSoKyThuatDataService.queryAll();
            },
            thietbis() {
                return tbisDataService.query();
            },
            thietbisCount() {
                return Counts.get('numberOfThietBis');
            }
        });
    }

    pageChanged(newPage) {
        this.page = newPage;
    }

    sortChanged(sort) {
        this.sort = sort;
    }
}

const name = 'tbisList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    TbisUtilsBar,
    TbisSearchForm,
    TbisFilterForm,
    TbisDataService,
    TbisListFabMenu,

    TbisDisplayListView,
    TbisDisplayGridView,

    TbisListPageSettingsService,
    UserLocalSettingsService,
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('thietbis', {
            url: '/thiet-bi',
            template: '<tbis-list></tbis-list>'
        });
}