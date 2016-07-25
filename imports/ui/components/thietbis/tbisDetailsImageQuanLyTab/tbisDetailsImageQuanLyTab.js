import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Random } from 'meteor/random';

import template from './tbisDetailsImageQuanLyTab.html';
import { name as TbisDetailsImageInputForm } from '../tbisDetailsImageInputForm/tbisDetailsImageInputForm';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';

// import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';

class TbisDetailsImageQuanLyTab {
    constructor() {
        'ngInject';
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
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        newImageModel: '=',
        selectedImage: '=',
        tabSelected: '@',
        tabModeSelected: '=',
        hinhAnhs: '<'
    },
    controller: TbisDetailsImageQuanLyTab
});