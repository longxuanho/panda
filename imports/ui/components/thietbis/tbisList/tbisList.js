import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbisList.html';

import { name as TbisUtilsBar } from '../tbisUtilsBar/tbisUtilsBar';

import { name as TbisListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';

import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataService } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as TbisReferenceDataService } from '../../../services/thietbis/tbisReferenceDataService';

import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';
import { name as TbisDisplayGridView } from '../tbisDisplayGridView/tbisDisplayGridView';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class TbisList {
    constructor($scope, $reactive, userLocalSettingsService,
                tbisPhanLoaiDataService, tbisNguonGocDataService, tbisPhanQuyenDataService,
                tbisDiaDiemDataService, tbisReferenceDataService,
                tsktThongSoKyThuatDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;
        this.filterPanelOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').tbisFilterPanel;
        this.isOpen = false;

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
    TbisUtilsBar,
    TbisListFabMenu,

    TbisDisplayListView,
    TbisDisplayGridView,

    UserLocalSettingsService,

    TbisPhanLoaiDataService,
    TbisNguonGocDataService,
    TbisPhanQuyenDataService,
    TbisDiaDiemDataService,
    TbisReferenceDataService
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