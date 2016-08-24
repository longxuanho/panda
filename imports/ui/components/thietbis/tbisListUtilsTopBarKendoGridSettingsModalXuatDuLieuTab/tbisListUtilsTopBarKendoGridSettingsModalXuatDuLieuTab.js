import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab.html';

import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';

class TbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab {
    constructor(kendoGridDataService) {
        'ngInject';

        this.kendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();

        this.fileType = 'excel';

        this.excelExportOptions = angular.copy(this.kendoGridOptions.options.excel);
        this.pdfExportOptions = angular.copy(this.kendoGridOptions.options.pdf);


    }

    exportExcel() {

    }

    exportPdf() {

    }
}

const name = 'tbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    KendoGridDataService
]).component(name, {
    template: template,
    controllerAs: name,
    controller: TbisListUtilsTopBarKendoGridSettingsModalXuatDuLieuTab
});