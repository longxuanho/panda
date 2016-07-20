import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import fabTemplate from './tbisDetailsImageMiniFab.html';
import modalTemplate from './tbisDetailsImageModal.html';

// import { name as MetadataService } from '../../../services/common/metadataService';
// import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
// import { name as TbisDetailsUpdateThongSoTab } from '../tbisDetailsUpdateThongSoTab/tbisDetailsUpdateThongSoTab';
// import { name as TbisDetailsUpdateViTriTab } from '../tbisDetailsUpdateViTriTab/tbisDetailsUpdateViTriTab';
// import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
// import { name as NotificationService } from '../../../services/common/notificationService';
// import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';


class TbisDetailsImageMiniFab {
    constructor($mdDialog, $mdMedia, $timeout) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog) {
                'ngInject';


                this.tabSelected = '';


                this.close = () => {
                    $mdDialog.hide();
                };


            },
            controllerAs: 'tbisDetailsImageModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsImageMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    // TbisListMajorInputForm,
    // TbisDetailsUpdateThongSoTab,
    // TbisDetailsUpdateViTriTab,
    // TbisDataSerivce,
    // MetadataService,
    // TsktThongSoKyThuatDataService,
    // NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisDetailsImageMiniFab
});