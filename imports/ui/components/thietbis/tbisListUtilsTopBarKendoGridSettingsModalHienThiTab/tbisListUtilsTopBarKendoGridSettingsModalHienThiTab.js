import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import template from './tbisListUtilsTopBarKendoGridSettingsModalHienThiTab.html';

import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';

class TbisListUtilsTopBarKendoGridSettingsModalHienThiTab {
    constructor(kendoGridDataService) {
        'ngInject';

        this.kendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();

        this.availableColumns = resolveAvailableColumns(this.kendoGridOptions.options.columns);

    }

    toggleColumnVisibility(column) {
        column.hidden = !column.hidden;
        column.isVisible = !column.isVisible;

        if (column.isVisible)
            this.kendoGridOptions.gridRef.showColumn(column.field);
        else
            this.kendoGridOptions.gridRef.hideColumn(column.field);
    }
}

const name = 'tbisListUtilsTopBarKendoGridSettingsModalHienThiTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    KendoGridDataService
]).component(name, {
    template: template,
    controllerAs: name,
    controller: TbisListUtilsTopBarKendoGridSettingsModalHienThiTab
});

function resolveAvailableColumns(columns) {
    _.each(columns, (column) => {
        column.isVisible = !column.hidden
    });
    return columns;
}