import angular from 'angular';
import angularMeteor from 'angular-meteor';

import fabTemplate from './tbisListMiniFabPageNavigation.html';
import modalTemplate from './tbisListModalPageNavigation.html';

class TbisListMiniFabPageNavigation {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;

        
    }

    open(event) {
        console.log(angular.element(window).scrollTop());
        this.$mdDialog.show({
            controller($mdDialog) {
                'ngInject';

                this.close = () => {
                    $mdDialog.hide();
                }
            },
            controllerAs: 'partyAddModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true
            // fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisListMiniFabPageNavigation';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisListMiniFabPageNavigation
});