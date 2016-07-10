import angular from 'angular';
import angularMeteor from 'angular-meteor';

import fabTemplate from './tbisListPageNavigationMiniFab.html';
import modalTemplate from './tbisListPageNavigationModal.html';

class TbisListPageNavigationMiniFab {
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
            controllerAs: 'tbisListPageNavigationModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true
            // fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisListPageNavigationMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisListPageNavigationMiniFab
});