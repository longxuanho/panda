import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsUpdateViTriTab.html';

import { name as TbisLocationDataService } from '../../../services/thietbis/tbisLocationDataService';
import { name as TbisDetailsMap } from '../tbisDetailsMap/tbisDetailsMap';

class TbisDetailsUpdateViTriTab {
    constructor($scope, tbisLocationDataService, $interval) {
        'ngInject';

        $scope.$watch('tbisDetailsUpdateViTriTab.viewModel.enableAPI', (newValue) => {
            if (newValue) {
                this.timer = $interval(() => {
                    tbisLocationDataService.query().then((data) => {
                        this.viewModel.location = data;
                    }).catch((err) => {
                        console.log('error when receiving data from api, ', err.message);
                    });
                }, 1000);
            } else {
                if (angular.isDefined(this.timer))
                    $interval.cancel(this.timer);
            }
        });
    }
}

const name = 'tbisDetailsUpdateViTriTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsMap,
    TbisLocationDataService
]).component(name, {
    template,
    bindings: {
        viewModel: '='
    },
    controllerAs: name,
    controller: TbisDetailsUpdateViTriTab
});