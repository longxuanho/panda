import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListKendoGridSettingsBtn.html';
import modalTemplate from './tbisListKendoGridSettingsModal.html';

import { name as TbisListKendoGridSettingsModalHienThiTab } from '../tbisListKendoGridSettingsModalHienThiTab/tbisListKendoGridSettingsModalHienThiTab';
import { name as TbisListKendoGridSettingsModalXuatDuLieuTab } from '../tbisListKendoGridSettingsModalXuatDuLieuTab/tbisListKendoGridSettingsModalXuatDuLieuTab';
import { name as TbisListKendoGridSettingsModalCauHinhTab } from '../tbisListKendoGridSettingsModalCauHinhTab/tbisListKendoGridSettingsModalCauHinhTab';

class TbisListKendoGridSettingsBtn {
    constructor($mdDialog, $mdMedia) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog) {
                'ngInject';

                this.isModalOpen = true;


                this.close = () => {
                    this.isModalOpen = false;
                    $mdDialog.hide();
                };
            },
            controllerAs: 'tbisListKendoGridSettingsModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'tbisListKendoGridSettingsBtn';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListKendoGridSettingsModalHienThiTab,
    TbisListKendoGridSettingsModalXuatDuLieuTab,
    TbisListKendoGridSettingsModalCauHinhTab
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisListKendoGridSettingsBtn
});