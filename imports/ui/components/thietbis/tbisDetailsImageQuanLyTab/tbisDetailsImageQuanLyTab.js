import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Random } from 'meteor/random';

import template from './tbisDetailsImageQuanLyTab.html';

// import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';

class TbisDetailsImageQuanLyTab {
    constructor($scope) {
        'ngInject';



    }
}

const name = 'tbisDetailsImageQuanLyTab';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        newImageModel: '=',
        tabSelected: '@',
        tabModeSelected: '=',
        addNewImage: '&'
    },
    controller: TbisDetailsImageQuanLyTab
});