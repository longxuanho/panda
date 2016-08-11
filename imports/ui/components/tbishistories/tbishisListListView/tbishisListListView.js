import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import ngMdIcons from 'angular-material-icons';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbishisListListView.html';

// import { name as TbisrepListUtilsBar } from '../tbisrepListUtilsBar/tbisrepListUtilsBar';
// import { name as TbisrepListListView } from '../tbisrepListListView/tbisrepListListView';

// import { name as TbisrepListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';
// import { name as TbisDisplayListView } from '../tbisDisplayListView/tbisDisplayListView';


class TbishisListListView {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        this.helpers({
        });
    }
}

const name = 'tbishisListListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMdIcons,
    utilsPagination,
    // TbisrepListUtilsBar,
    // TbisrepListListView
]).component(name, {
    template,
    controllerAs: name,
    controller: TbishisListListView
})