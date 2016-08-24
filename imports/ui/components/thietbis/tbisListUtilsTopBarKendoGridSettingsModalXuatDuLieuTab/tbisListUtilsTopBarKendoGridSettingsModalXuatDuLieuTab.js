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
        this.kendoGridOptions.options.excel = angular.copy(this.excelExportOptions);
        this.kendoGridOptions.gridRef.saveAsExcel();
    }

    exportPdf() {
        this.kendoGridOptions.options.pdf = angular.copy(this.pdfExportOptions);
        this.kendoGridOptions.gridRef.saveAsPDF();
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