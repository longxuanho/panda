import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import template from './tbisDetailsViewHoSoViewTongQuanTabView.html';

class TbisDetailsViewHoSoViewTongQuanTabView {
    constructor() {
        'ngInject';


    }

    isEmptyThongTinDangKy() {
        return this.thietbi && _.isEmpty(this.thietbi.ho_so);
    }
}

const name = 'tbisDetailsViewHoSoViewTongQuanTabView';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbi: '<'
    },
    controller: TbisDetailsViewHoSoViewTongQuanTabView
});