import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import _ from 'underscore';
import fabTemplate from './dhelpsListAddNewFab.html';
import modalTemplate from './dhelpsListAddNewModal.html';

import { name as DhelpsDataService } from '../../../services/datahelpers/dhelpsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';


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
                    selectOptions: {
                        modules:  dhelpsDataService.queryUISelectOptionsDBData().modules,
                        stateNames: [],
                        subjects: []
                    },
                    selectOptionsDB: dhelpsDataService.queryUISelectOptionsDBData()
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
                    this.newDataHelper = dhelpsDataService.initNewDataHelperData();
                };

                this.parseDataSource = () => {
                    try {
                        this.newDataHelper.dataSource = JSON.parse(this.newDataHelper.stringifiedDataSource);
                    } catch (error) {
                        this.newDataHelper.dataSource = {};
                    }
                };

                this.close = () => {
                    $mdDialog.hide();
                };

                this.updateSelectOptionsUI = () => {
                    if (this.newDataHelper.module) {
                        this.liveOptions.selectOptions.stateNames = this.liveOptions.selectOptionsDB.stateNames[this.newDataHelper.module];
                    }

                    if (this.newDataHelper.stateName)
                        this.liveOptions.selectOptions.subjects = this.liveOptions.selectOptionsDB.subjects[this.newDataHelper.stateName];
                }
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
    NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: DhelpsListAddNewFab
});