import angular from 'angular';
import angularMeteor from 'angular-meteor';

import fabTemplate from './tbisListFilterPanelMiniFab.html';
import modalTemplate from './tbisListFilterPanelModal.html';

import { name as TbisListFilterPanelModalTongQuanTab } from '../tbisListFilterPanelModalTongQuanTab/tbisListFilterPanelModalTongQuanTab';

class TbisListFilterPanelMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;        
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog) {
                'ngInject';

                this.close = () => {
                    $mdDialog.hide();
                }
            },
            controllerAs: 'tbisListFilterPanelModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisListFilterPanelMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListFilterPanelModalTongQuanTab
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisListFilterPanelMiniFab
});