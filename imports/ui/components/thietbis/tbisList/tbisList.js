import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbisList.html';
import { ThietBis } from '../../../../api/thietbis/tbis';

import { name as TbisListPageSettingsService } from '../../../services/thietbis/tbisListPageSettingsService';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as TbisUtilsBar } from '../tbisUtilsBar/tbisUtilsBar';
import { name as TbisSearchForm } from '../tbisSearchForm/tbisSearchForm';
import { name as TbisFilterForm } from '../tbisFilterForm/tbisFilterForm';
import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';
import { name as TbisListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';

import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataSerivce } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as TbisReferenceDataSerivce } from '../../../services/thietbis/tbisReferenceDataService';

class TbisList {
    constructor($scope, $reactive, tbisListPageSettingsService, tbisDataService,
                tbisPhanLoaiDataService, tbisNguonGocDataService, tbisPhanQuyenDataService, tbisDiaDiemDataService, tbisReferenceDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.settings = tbisListPageSettingsService.getPageSettings();
        // this.thietbis = tbisDataService.getAllThietBis();

        console.log('thietbis: ', this.thietbis);
        
        this.isSearchMode = true;
        this.perPage = 10;
        this.page = 1;
        this.sort = {
            'ma_thiet_bi.keyId': 1
        };
        this.searchText = '';

        this.topDirections = ['left', 'up'];
        this.bottomDirections = ['down', 'right'];
        this.isOpen = false;
        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-fling';
        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'up';

        this.subscribe('thietbis', () => [
            {
                limit: parseInt(this.perPage),
                skip: parseInt((this.getReactively('page') - 1) * this.perPage),
                sort: this.getReactively('sort')
            },
            this.getReactively('searchText')
        ]);

        this.subscribe('tbishelpers');
        
        this.helpers({
            tbishelpers() {
                console.log('query..');
                tbisPhanLoaiDataService.queryAll();
                tbisNguonGocDataService.queryAll();
                tbisPhanQuyenDataService.queryAll();
                tbisDiaDiemDataService.queryAll();
                tbisReferenceDataService.queryAll();
            },
            thietbis() {
                return tbisDataService.query();
            },
            thietbisCount() {
                return Counts.get('numberOfThietBis');
            },
            // isLoggedIn() {
            //     return !!Meteor.userId();
            // },
            // currentUserId() {
            //     return Meteor.userId();
            // }
        });
    }

    pageChanged(newPage) {
        this.page = newPage;
    }

    sortChanged(sort) {
        this.sort = sort;
    }

    submit() {
        console.log('test!');
        // ThietBis.insert(this.newThietBi);
        this.reset();
    }

    reset() {
        this.newThietBi = {};
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
    TbisDisplayListView,
    TbisListPageSettingsService,
    TbisDataService,
    TbisListFabMenu,

    TbisPhanLoaiDataService,
    TbisNguonGocDataService,
    TbisPhanQuyenDataService,
    TbisDiaDiemDataSerivce,
    TbisReferenceDataSerivce
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