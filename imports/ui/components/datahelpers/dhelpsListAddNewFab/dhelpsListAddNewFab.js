import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import _ from 'underscore';
import fabTemplate from './dhelpsListAddNewFab.html';
import modalTemplate from './dhelpsListAddNewModal.html';

import { name as DhelpsDataService } from '../../../services/datahelpers/dhelpsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

import { name as DhelpsListInputForm } from '../dhelpsListInputForm/dhelpsListInputForm';


class DhelpsListAddNewFab {
    constructor($scope, $mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($scope, $mdDialog, dhelpsDataService, notificationService) {
                'ngInject';

                this.newDataHelper = dhelpsDataService.initNewDataHelperData();

                this.liveOptions = {
                    isFormInvalid: false,
                    isPreserveSelect: false
                };

                this.addNew = () => {
                    try {
                        dhelpsDataService.validateInputDataHelper(this.newDataHelper);
                        dhelpsDataService.addNew(this.newDataHelper).then(() => {
                            notificationService.success('DataHelper đã được ghi nhận vào Skynet.', 'Tạo mới thành công');
                            this.reset();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Tạo mới thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.reset = () => {
                    if (!this.liveOptions.isPreserveSelect)
                        this.newDataHelper = dhelpsDataService.initNewDataHelperData();
                    else {
                        let preservedSelection = _.pick(this.newDataHelper, 'module', 'stateName', 'subject');
                        this.newDataHelper = dhelpsDataService.initNewDataHelperData();
                        _.extend(this.newDataHelper, preservedSelection);
                    }
                };

                this.close = () => {
                    $mdDialog.hide();
                };
            },
            controllerAs: 'dhelpsListAddNewModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }

}

const name = 'dhelpsListAddNewFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    DhelpsDataService,
    NotificationService,
    DhelpsListInputForm
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: DhelpsListAddNewFab
});