import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';
import template from './tbisListMajorInputForm.html';

import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataService } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as TbisReferenceDataService } from '../../../services/thietbis/tbisReferenceDataService';

import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';

class TbisListMajorInputForm {
    constructor($scope, $reactive, tbisPhanLoaiDataService, tbisNguonGocDataService, tbisDiaDiemDataService,
                tbisPhanQuyenDataService, tbisReferenceDataService, tbisDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.tbisPhanLoaiDataService = tbisPhanLoaiDataService;
        this.tbisNguonGocDataService = tbisNguonGocDataService;
        this.tbisDiaDiemDataService = tbisDiaDiemDataService;
        this.tbisPhanQuyenDataService = tbisPhanQuyenDataService;
        this.tbisReferenceDataService = tbisReferenceDataService;

        this.viewModel = (this.mode === 'addNew') ? tbisDataService.getNewThietBi() : tbisDataService.getSelectedThietBi();

        this.subscribe('datahelpers', () => [
            {
                // options
            },
            {
                // queryParams
                module: ['thietbis', 'commons'],
                stateName: null,
                subject: null
            }
        ]);

        this.helpers({
            tbishelpers() {
                console.log('query...');
                tbisPhanLoaiDataService.queryAll();
                tbisNguonGocDataService.queryAll();
                tbisPhanQuyenDataService.queryAll();
                tbisDiaDiemDataService.queryAll();
                tbisReferenceDataService.queryAll();

                this.buildSelectOptions();
                return null;
            }
        });



        this.liveOptions = {
            mdChips: {
                searchText: null,
                selectedItem: null
            }
        };

        $scope.$on('reset-tbis-list-major-input-form', (event, args) => {
            this.addNewThietBiForm.$setPristine();
            this.addNewThietBiForm.$setUntouched();
        });

        $scope.$watch('tbisListMajorInputForm.viewModel.thietbi.bao_hanh.isThongTinBaoHanh', (newVal) => {
            if (!newVal) {
                this.viewModel.thietbi.bao_hanh.thoi_gian = {};
                this.viewModel.thietbi.bao_hanh.stringify = {};
            }
        });

        $scope.$watch('tbisListMajorInputForm.viewModel.thietbi.bao_hanh.isThongTinKiemDinh', (newVal) => {
            if (!newVal) {
                this.viewModel.thietbi.kiem_dinh.isTrongThoiGianKiemDinh = false;
                this.viewModel.thietbi.kiem_dinh.ho_so = {};
                this.viewModel.thietbi.kiem_dinh.thoi_gian = {};
                this.viewModel.thietbi.kiem_dinh.stringify = {};
            }
        });
    }

    buildSelectOptions() {
        this.selectOptions = this.tbisPhanLoaiDataService.getSelectOptions();
        _.extend(this.selectOptions, this.tbisNguonGocDataService.getSelectOptions());
        _.extend(this.selectOptions, this.tbisDiaDiemDataService.getSelectOptions());
        _.extend(this.selectOptions, this.tbisPhanQuyenDataService.getSelectOptions());
        _.extend(this.selectOptions, this.tbisReferenceDataService.getSelectOptions());
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
    TbisReferenceDataService,
    TbisDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        mode: '@',
        isPreserveSelect: '='
    },
    controller: TbisListMajorInputForm
});