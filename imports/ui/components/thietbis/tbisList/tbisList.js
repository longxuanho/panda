import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import template from './tbisList.html';

import { name as TbisListUtilsTopBar } from '../tbisListUtilsTopBar/tbisListUtilsTopBar';


import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataService } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as TbisReferenceDataService } from '../../../services/thietbis/tbisReferenceDataService';
import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';
import { name as UtilsFilterDataService } from '../../../services/workspaces/utilsFilterDataService';

import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';
import { name as TbisDisplayGridView } from '../tbisDisplayGridView/tbisDisplayGridView';


class TbisList {
    constructor($scope, $reactive,
                tbisPhanLoaiDataService, tbisNguonGocDataService, tbisPhanQuyenDataService,
                tbisDiaDiemDataService, tbisReferenceDataService,
                tsktThongSoKyThuatDataService,
                utilsTopBarDataService, utilsFilterDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.utilsTopBarOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();
        this.utilsFilterOptions = utilsFilterDataService.getCurrentUtilsFilterOptions();

        this.isOpen = false;

        this.subscribe('tbishelpers');
        this.subscribe('tskthelpers');
        this.subscribe('datahelpers', () => [
            {
                // options
            },
            {
                // queryParams
                module: ['thietbis', 'commons'],
                stateName: null,
                subject: null
            }
        ]);
        
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
            }
        });
    }
}

const name = 'tbisList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    TbisListUtilsTopBar,

    TbisDisplayListView,
    TbisDisplayGridView,

    TbisPhanLoaiDataService,
    TbisNguonGocDataService,
    TbisPhanQuyenDataService,
    TbisDiaDiemDataService,
    TbisReferenceDataService,
    UtilsTopBarDataService,
    UtilsFilterDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisList
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('tbisList', {
            url: '/quan-ly/thiet-bi',
            template: '<tbis-list></tbis-list>',
            resolve: {
                currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        });
}