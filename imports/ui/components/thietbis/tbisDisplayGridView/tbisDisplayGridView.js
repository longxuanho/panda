import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayGridView.html';
import { name as TbisListGridViewKendoGrid } from '../tbisListGridViewKendoGrid/tbisListGridViewKendoGrid';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisDisplayGridView {
    constructor($reactive, $scope, tbisDataService, userLocalSettingsService, $timeout) {
        'ngInject';
        $reactive(this).attach($scope);

        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;
        this.tbisDataService = tbisDataService;

        this.subscribe('thietbis');

        $timeout(() => {
            this.thietbis = tbisDataService.query();
        }, 1000);
    }

    reloadThietBis() {
        this.thietbis = this.tbisDataService.query();
    }
}

const name = 'tbisDisplayGridView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListGridViewKendoGrid,
    TbisDataService,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDisplayGridView
});