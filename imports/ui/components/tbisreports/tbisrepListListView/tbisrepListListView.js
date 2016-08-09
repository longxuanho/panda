import angular from 'angular';
import angularMeteor from 'angular-meteor';
import utilsPagination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbisrepListListView.html';

// import { name as TbisrepListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class TbisrepListListView {
    constructor($scope, $reactive, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);

        // this.componentOptions = userLocalSettingsService.getPageSettings('tbisrepList', 'tbisrepList').utilsBar;


        this.helpers({

        });
    }
}

const name = 'tbisrepListListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    utilsPagination,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisrepListListView
});