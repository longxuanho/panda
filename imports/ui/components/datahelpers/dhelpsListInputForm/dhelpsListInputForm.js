import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './dhelpsListInputForm.html';

import { name as DhelpsDataService } from '../../../services/datahelpers/dhelpsDataService';

class DhelpsListInputForm {
    constructor($scope, dhelpsDataService) {
        'ngInject';

        this.liveOptions = {
            selectOptions: {
                modules:  dhelpsDataService.queryUISelectOptionsDBData().modules,
                stateNames: [],
                subjects: []
            },
            selectOptionsDB: dhelpsDataService.queryUISelectOptionsDBData()
        };

        $scope.$watch('dhelpsListInputForm.addNewDataHelperForm.$invalid', (newVal) => {
            this.isFormInvalid = newVal;
        });
    }

    updateSelectOptionsUI() {
        if (this.viewModel.module) {
            this.liveOptions.selectOptions.stateNames = this.liveOptions.selectOptionsDB.stateNames[this.viewModel.module];
        }
        if (this.viewModel.stateName)
            this.liveOptions.selectOptions.subjects = this.liveOptions.selectOptionsDB.subjects[this.viewModel.stateName];
    }

    parseDataSource() {
        try {
            this.viewModel.dataSource = JSON.parse(this.viewModel.stringifiedDataSource);
        } catch (error) {
            this.viewModel.dataSource = {};
        }
    };
}

const name = 'dhelpsListInputForm';

// create a module
export default angular.module(name, [
    angularMeteor,
    DhelpsDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        viewModel: '=',
        isPreserveSelect: '=',
        isFormInvalid: '='
    },
    controller: DhelpsListInputForm
});