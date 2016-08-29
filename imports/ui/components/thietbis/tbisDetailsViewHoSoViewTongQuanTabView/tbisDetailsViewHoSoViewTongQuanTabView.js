import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import moment from 'moment';

import template from './tbisDetailsViewHoSoViewTongQuanTabView.html';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';

class TbisDetailsViewHoSoViewTongQuanTabView {
    constructor() {
        'ngInject';

        // Cập nhật lại nếu thiết bị đang / đã hết hạn bảo hạnh (Chưa lưu vào DB)
        if (this.thietbi && this.thietbi.bao_hanh && this.thietbi.bao_hanh.isThongTinBaoHanh)
            this.thietbi.bao_hanh.isTrongThoiGianBaoHanh = moment(this.thietbi.bao_hanh.thoi_gian.ngay_ket_thuc).isAfter(moment());
        if (this.thietbi && this.thietbi.kiem_dinh && this.thietbi.kiem_dinh.isThongTinKiemDinh)
            this.thietbi.kiem_dinh.isTrongThoiGianKiemDinh = moment(this.thietbi.kiem_dinh.thoi_gian.ngay_het_han).isAfter(moment());
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
    angularMeteor,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbi: '<'
    },
    controller: TbisDetailsViewHoSoViewTongQuanTabView
});