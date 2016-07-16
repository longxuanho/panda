import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListMajorInputForm.html';
// import { name as TbisListPageSettingsService } from '../../../services/thietbis/tbisListPageSettingsService';

import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataService } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as TbisReferenceDataService } from '../../../services/thietbis/tbisReferenceDataService';

class TbisListMajorInputForm {
    constructor($scope, tbisPhanLoaiDataService, tbisNguonGocDataService, tbisDiaDiemDataService, tbisPhanQuyenDataService, tbisReferenceDataService) {
        'ngInject';

        this.selectOptions = tbisPhanLoaiDataService.getSelectOptions();
        _.extend(this.selectOptions, tbisNguonGocDataService.getSelectOptions());
        _.extend(this.selectOptions, tbisDiaDiemDataService.getSelectOptions());
        _.extend(this.selectOptions, tbisPhanQuyenDataService.getSelectOptions());
        _.extend(this.selectOptions, tbisReferenceDataService.getSelectOptions());

        $scope.$on('reset-tbis-list-major-input-form', (event, args) => {
            this.addNewThietBiForm.$setPristine();
            this.addNewThietBiForm.$setUntouched();
        });
    }
}

const name = 'tbisListMajorInputForm';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisPhanLoaiDataService,
    TbisNguonGocDataService,
    TbisPhanQuyenDataService,
    TbisDiaDiemDataService,
    TbisReferenceDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        viewModel: '='
    },
    controller: TbisListMajorInputForm
});