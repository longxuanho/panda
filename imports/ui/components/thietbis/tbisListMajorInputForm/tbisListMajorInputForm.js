import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';
import template from './tbisListMajorInputForm.html';

import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataService } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as TbisReferenceDataService } from '../../../services/thietbis/tbisReferenceDataService';
import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';

// import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';

class TbisListMajorInputForm {
    constructor($scope, $reactive, tbisPhanLoaiDataService, tbisNguonGocDataService, tbisDiaDiemDataService,
                tbisPhanQuyenDataService, tbisReferenceDataService, tsktThongSoKyThuatDataService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.tbisPhanLoaiDataService = tbisPhanLoaiDataService;
        this.tbisNguonGocDataService = tbisNguonGocDataService;
        this.tbisDiaDiemDataService = tbisDiaDiemDataService;
        this.tbisPhanQuyenDataService = tbisPhanQuyenDataService;
        this.tbisReferenceDataService = tbisReferenceDataService;

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

        this.subscribe('tskthelpers');

        this.helpers({
            tbishelpers() {
                tbisPhanLoaiDataService.queryAll();
                tbisNguonGocDataService.queryAll();
                tbisPhanQuyenDataService.queryAll();
                tbisDiaDiemDataService.queryAll();
                tbisReferenceDataService.queryAll();

                this.buildSelectOptions();
                return null;
            },
            tskthelpers() {
                tsktThongSoKyThuatDataService.queryAll();
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

        $scope.$watch('tbisListMajorInputForm.vm.bao_hanh.isThongTinBaoHanh', (newVal) => {
            if (!newVal) {
                if (this.vm && this.vm.bao_hanh) {
                    this.vm.bao_hanh.thoi_gian = {};
                    this.vm.bao_hanh.stringify = {};
                }
            }
        });

        $scope.$watch('tbisListMajorInputForm.vm.kiem_dinh.isThongTinKiemDinh', (newVal) => {
            if (!newVal) {
                if (this.vm && this.vm.kiem_dinh) {
                    this.vm.kiem_dinh.isTrongThoiGianKiemDinh = false;
                    this.vm.kiem_dinh.ho_so = {};
                    this.vm.kiem_dinh.thoi_gian = {};
                    this.vm.kiem_dinh.stringify = {};
                }
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

    TsktThongSoKyThuatDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        vm: '=',
        isPreserveSelect: '='
    },
    controller: TbisListMajorInputForm
});