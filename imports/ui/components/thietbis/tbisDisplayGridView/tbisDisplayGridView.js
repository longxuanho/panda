import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDisplayGridView.html';
import { name as TbisListGridViewKendoGrid } from '../tbisListGridViewKendoGrid/tbisListGridViewKendoGrid';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';
import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';

class TbisDisplayGridView {
    constructor($reactive, $scope, tbisDataService, subscribeDataService, utilsTopBarDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.utilsTopBarOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();

        this.tbisDataService = tbisDataService;

        this.subscribe('thietbis', () => [
            {},
            '',
            {},
            this.getReactively('subscribeOptions.subscribe.category')
        ]);
    }

    // Hàm được gọi từ trong component KendoGrid khi đọc thấy refreshTokenInGridMode của utilsTopbar thay đổi
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
    SubscribeDataService,
    UtilsTopBarDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDisplayGridView
});