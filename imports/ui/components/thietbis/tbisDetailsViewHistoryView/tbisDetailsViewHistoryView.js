import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryView.html';
import { name as TbisDetailsViewHistoryViewThongKeTab } from '../tbisDetailsViewHistoryViewThongKeTab/tbisDetailsViewHistoryViewThongKeTab';
import { name as TbisDetailsViewHistoryViewLuotScnTab } from '../tbisDetailsViewHistoryViewLuotScnTab/tbisDetailsViewHistoryViewLuotScnTab';
import { name as TbisDetailsViewHistoryViewKhacTab } from '../tbisDetailsViewHistoryViewKhacTab/tbisDetailsViewHistoryViewKhacTab';
import { name as TbisDetailsViewHistoryViewFabMenu } from '../tbisDetailsViewHistoryViewFabMenu/tbisDetailsViewHistoryViewFabMenu';

class TbisDetailsViewHistoryView {
    constructor($reactive, $scope, $mdMedia) {
        'ngInject';
        $reactive(this).attach($scope);

        this.$mdMedia = $mdMedia;

        this.subscribe('tbishistories');
    }
}

const name = 'tbisDetailsViewHistoryView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewHistoryViewThongKeTab,
    TbisDetailsViewHistoryViewLuotScnTab,
    TbisDetailsViewHistoryViewKhacTab,
    TbisDetailsViewHistoryViewFabMenu
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryView
});