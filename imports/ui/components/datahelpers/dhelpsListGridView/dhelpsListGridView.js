import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './dhelpsListGridView.html';

import { name as DhelpsListGridViewKendoGrid } from '../dhelpsListGridViewKendoGrid/dhelpsListGridViewKendoGrid';

import { name as DhelpsDataService } from '../../../services/datahelpers/dhelpsDataService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';
import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';

import { name as DhelpsListAddNewFab } from '../dhelpsListAddNewFab/dhelpsListAddNewFab';
import { name as DhelpsListUpdateFab } from '../dhelpsListUpdateFab/dhelpsListUpdateFab';

class DhelpsListGridView {
    constructor($reactive, $scope, dhelpsDataService, subscribeDataService, utilsTopBarDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.dhelpsDataService = dhelpsDataService;

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.utilsTopBarOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();
        this.selectedDataHelper = dhelpsDataService.getSelectedDataHelper();

        this.liveOptions = {
            selectOptions: {
                stateNames: [],
                subjects: []
            },
            selectOptionsDB: dhelpsDataService.queryUISelectOptionsDBData()
        };

        this.subscribe('datahelpers', () => [
            {
                // options
            },
            {
                // queryParams
                module: this.getReactively('subscribeOptions.subscribe.category'),
                stateName: this.getReactively('subscribeOptions.subscribe.stateName'),
                subject: this.getReactively('subscribeOptions.subscribe.subject')
            }
        ]);

        $scope.$watch('dhelpsListGridView.subscribeOptions.subscribe.category', (newVal) => {
            if (newVal) {
                this.liveOptions.selectOptions.stateNames = this.liveOptions.selectOptionsDB.stateNames[newVal];
            }
        });
        $scope.$watch('dhelpsListGridView.subscribeOptions.subscribe.stateName', (newVal) => {
            if (newVal) {
                this.liveOptions.selectOptions.subjects = this.liveOptions.selectOptionsDB.subjects[newVal];
            }
        });
    }
}

const name = 'dhelpsListGridView';

// create a module
export default angular.module(name, [
    angularMeteor,
    SubscribeDataService,
    UtilsTopBarDataService,
    DhelpsDataService,
    DhelpsListAddNewFab,
    DhelpsListUpdateFab,
    DhelpsListGridViewKendoGrid
]).component(name, {
    template,
    controllerAs: name,
    controller: DhelpsListGridView
});