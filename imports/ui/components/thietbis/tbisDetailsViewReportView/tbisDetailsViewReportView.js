import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportView.html';
import { name as TbisDetailsViewReportViewTab } from '../tbisDetailsViewReportViewTab/tbisDetailsViewReportViewTab';
import { name as TbisDetailsViewReportViewFabMenu } from '../tbisDetailsViewReportViewFabMenu/tbisDetailsViewReportViewFabMenu';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';


class TbisDetailsViewReportView {
    constructor($reactive, $scope, $mdMedia, userLocalSettingsService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.$mdMedia = $mdMedia;
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

const name = 'tbisDetailsViewReportView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewTab,
    TbisDetailsViewReportViewFabMenu,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportView
});