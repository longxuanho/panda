import angular from 'angular';
import angularMeteor from 'angular-meteor';
import utilsPagination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './tbisrepListListView.html';

// import { name as TbisrepListFabMenu } from '../tbisListFabMenu/tbisListFabMenu';
import { name as TbisDetailsViewReportViewTab } from '../../thietbis/tbisDetailsViewReportViewTab/tbisDetailsViewReportViewTab';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';



class TbisrepListListView {
    constructor($scope, $reactive, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);
        this.subscribeOptions = userLocalSettingsService.getPageSettings('tbisreports', 'tbisrepList').suscribe;

        this.subscribe('tbisreports', () => [
            {
                limit: parseInt(this.getReactively('subscribeOptions.pageSize')),
                skip: parseInt((this.getReactively('subscribeOptions.page') - 1) * this.subscribeOptions.pageSize),
                sort: this.getReactively('subscribeOptions.sort')
            },
            this.getReactively('subscribeOptions.searchText'),
            this.getReactively('subscribeOptions.status')
        ]);
    }
}

const name = 'tbisrepListListView';

// create a module
export default angular.module(name, [
    angularMeteor,
    utilsPagination,
    UserLocalSettingsService,
    TbisDetailsViewReportViewTab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisrepListListView
});