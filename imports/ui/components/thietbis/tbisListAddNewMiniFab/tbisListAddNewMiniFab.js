import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import _ from 'underscore';
import fabTemplate from './tbisListAddNewMiniFab.html';
import modalTemplate from './tbisListAddNewModal.html';

// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
import { name as TbisPhanLoaiDataService } from '../../../services/thietbis/tbisPhanLoaiDataService';
import { name as TbisNguonGocDataService } from '../../../services/thietbis/tbisNguonGocDataService';
import { name as TbisPhanQuyenDataService } from '../../../services/thietbis/tbisPhanQuyenDataService';
import { name as TbisDiaDiemDataService } from '../../../services/thietbis/tbisDiaDiemDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as TbisReferenceDataService } from '../../../services/thietbis/tbisReferenceDataService';

class tbisListAddNewMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;


    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog,
                       tbisDataService, tbisPhanLoaiDataService,
                       tbisNguonGocDataService, tbisDiaDiemDataService, tbisPhanQuyenDataService, tbisReferenceDataService,
                       notificationService) {
                'ngInject';


                this.selectOptions = tbisPhanLoaiDataService.getSelectOptions();
                _.extend(this.selectOptions, tbisNguonGocDataService.getSelectOptions());
                _.extend(this.selectOptions, tbisDiaDiemDataService.getSelectOptions());
                _.extend(this.selectOptions, tbisPhanQuyenDataService.getSelectOptions());
                _.extend(this.selectOptions, tbisReferenceDataService.getSelectOptions());

                console.log('select options: ', this.selectOptions);
                
                this.newThietBi = tbisDataService.initNewThietBiData();

                this.save = () => {
                    try {
                        tbisDataService.validateNewThietBiData(this.newThietBi);
                        tbisDataService.addNew(this.newThietBi);
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.reset = () => {
                    this.newThietBi = tbisDataService.initNewThietBiData();
                };

                this.close = () => {
                    $mdDialog.hide();
                };
            },
            controllerAs: 'tbisListAddNewModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'tbisListAddNewMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    TbisDataSerivce,
    TbisPhanLoaiDataService,
    TbisNguonGocDataService,
    TbisPhanQuyenDataService,
    TbisDiaDiemDataService,
    TbisReferenceDataService,
    NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: tbisListAddNewMiniFab
});