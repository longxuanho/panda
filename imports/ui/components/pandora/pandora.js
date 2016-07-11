import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import 'angular-material/angular-material.min.css';
import 'angular-google-maps';

import template from './pandora.html';
import { name as Navigation } from '../layout/navigation/navigation';
import { name as PartiesList } from '../demo/partiesList/partiesList';
import { name as PartyDetails } from '../demo/partyDetails/partyDetails';
import { name as TbisList } from '../thietbis/tbisList/tbisList';
import { name as Auth } from '../auth/auth';

class Pandora {}

const name = 'pandora';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngAria,
    ngAnimate,
    ngMessages,
    ngMaterial,
    uiRouter,
    Navigation,
    TbisList,
    PartiesList,
    PartyDetails,
    Auth,
    'accounts.ui',
    "kendo.directives"
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

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDf6ECMBu2pWez3xo4s1H1Sc-spt3PwLDQ'
        // v: '3.20', //defaults to latest 3.X anyhow
        // libraries: 'weather,geometry,visualization'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');
}

function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
            if (error === 'AUTH_REQUIRED') {
                $state.go('parties');
            }
        }
    );
}