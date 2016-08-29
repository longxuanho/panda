import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Random } from 'meteor/random';

import _ from 'underscore';

import template from './tbisDetailsImageQuanLyTab.html';
import { name as TbisDetailsImageInputForm } from '../tbisDetailsImageInputForm/tbisDetailsImageInputForm';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';


class TbisDetailsImageQuanLyTab {
    constructor(tbisDataService, notificationService, $mdToast) {
        'ngInject';

        this.tbisDataService = tbisDataService;

        this.selectedThietBi = tbisDataService.getSelectedThietBi();

    }

    selectImage(image) {
        this.selectedImage = angular.copy(image);
    }

}

const name = 'tbisDetailsImageQuanLyTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsImageInputForm,
    DisplayRelativeTimeFilter,
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        newImageModel: '=',
        selectedImage: '=',
        tabSelected: '@',
        tabModeSelected: '=',
    },
    controller: TbisDetailsImageQuanLyTab
});