import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import template from './tbisDetailsViewHoSoViewTongQuanTabView.html';

class TbisDetailsViewHoSoViewTongQuanTabView {
    constructor() {
        'ngInject';


    }

    isEmptyThongTinDangKy() {
        if (this.thietbi) {
            let testObject = _.omit(this.thietbi.ho_so, 'nam_su_dung');
            return _.isEmpty(testObject);
        }
        return true;
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