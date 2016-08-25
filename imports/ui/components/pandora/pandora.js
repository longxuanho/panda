import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

import 'angular-material/angular-material.min.css';
import 'angular-google-maps';

import moment from 'moment';
import 'moment/locale/vi';
import '../../../lib/ngStorage/ngStorage';

import '../../../../imports/ui/kendo/kendo.culture.vi-VI';
import '../../../../imports/ui/kendo/kendo.messages.vi-VI';

import template from './pandora.html';
import { name as Navigation } from '../layout/navigation/navigation';
import { name as NavSideBar } from '../workspaces/navSideBar/navSideBar';
import { name as UtilsSideBar } from '../workspaces/utilsSideBar/utilsSideBar';
import { name as PartiesList } from '../demo/partiesList/partiesList';
import { name as PartyDetails } from '../demo/partyDetails/partyDetails';
import { name as TbisList } from '../thietbis/tbisList/tbisList';
import { name as TbisDetailsView } from '../thietbis/tbisDetailsView/tbisDetailsView';

import { name as Auth } from '../auth/auth';

import { name as TbisrepList } from '../tbisreports/tbisrepList/tbisrepList';
import { name as TbishisList } from '../tbishistories/tbishisList/tbishisList';

import { name as UsersList } from '../users/usersList/usersList';
import { name as UserDetails } from '../users/userDetails/userDetails';

import { name as WorkspacesList } from '../workspaces/workspacesList/workspacesList';
import { name as WorkspacesDataService } from '../../services/workspaces/workspacesDataService';
import { name as SubscribeDataService } from '../../services/workspaces/subscribeDataService';
import { name as UtilsTopBarDataService } from '../../services/workspaces/utilsTopBarDataService';
import { name as UtilsFilterDataService } from '../../services/workspaces/utilsFilterDataService';
import { name as KendoGridDataService } from '../../services/workspaces/kendoGridDataService';
import { name as NotificationService } from '../../services/common/notificationService';







class Pandora {
    constructor() {
        'ngInject';

        // Fix lỗi treo chương trình khi export pdf từ grid
        kendo.pdf.defineFont({
            "Roboto": "/fonts/DejaVuSans.ttf",
            "Roboto|Bold": "/fonts/DejaVuSans-Bold.ttf",
            "Roboto|Bold|Italic": "/fonts/DejaVuSans-Oblique.ttf",
            "Roboto|Italic": "/fonts/DejaVuSans-Oblique.ttf"
        });
    }
}

const name = 'pandora';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngAria,
    ngAnimate,
    ngMessages,
    ngMaterial,
    ngSanitize,
    uiRouter,
    Navigation,
    NavSideBar,
    UtilsSideBar,
    TbisList,
    TbisDetailsView,
    TbisrepList,
    TbishisList,
    UserDetails,
    UsersList,
    WorkspacesList,
    WorkspacesDataService,
    SubscribeDataService,
    UtilsTopBarDataService,
    UtilsFilterDataService,
    KendoGridDataService,
    NotificationService,
    PartiesList,
    PartyDetails,
    Auth,
    'accounts.ui',
    "kendo.directives",
    'ngStorage'
]).component(name, {
    template,
    controllerAs: name,
    controller: Pandora
})
    .config(config)
    .run(run);

function config($locationProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider, $mdThemingProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/parties');
    
    moment.locale('vi');

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDf6ECMBu2pWez3xo4s1H1Sc-spt3PwLDQ'
        // v: '3.20', //defaults to latest 3.X anyhow
        // libraries: 'weather,geometry,visualization'
    });

    // $mdThemingProvider.theme('default')
    //     .primaryPalette('indigo')
    //     .accentPalette('pink');
}

function run($rootScope, $state, workspacesDataService, subscribeDataService, notificationService, utilsTopBarDataService, utilsFilterDataService, kendoGridDataService) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
            if (error === 'AUTH_REQUIRED') {
                notificationService.error('Phân quyền của bạn không đủ để truy cập liên kết này. Thực hiện chuyển hướng truy cập...', 'Điều hướng thất bại')
                $state.go('workspacesList');
            }
        }
    );

    $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams) => {
            workspacesDataService.getCurrentUtilsSideBarOptions().currentState = toState.name;
            subscribeDataService.updateCurrentOptions(toState.name);
            utilsTopBarDataService.updateCurrentOptions(toState.name);
            utilsFilterDataService.updateCurrentOptions(toState.name);
            kendoGridDataService.updateCurrentOptions(toState.name);
        }
    );


}


// FIX CANT'T INSTALL BCRYPT: >SET PYTHON=C:\Python27\python.exe