import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import moment from 'moment';

import template from './tbisDetailsViewHoSoViewTongQuanTabView.html';

import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';

import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';

class TbisDetailsViewHoSoViewTongQuanTabView {
    constructor(tbisDataService) {
        'ngInject';

        this.selectedThietBi = tbisDataService.getSelectedThietBi();

        // Cập nhật lại nếu thiết bị đang / đã hết hạn bảo hạnh (Chưa lưu vào DB)
        // if (this.selectedThietBi.thietbi && this.selectedThietBi.thietbi.bao_hanh && this.selectedThietBi.thietbi.bao_hanh.isThongTinBaoHanh)
        //     this.selectedThietBi.thietbi.bao_hanh.isTrongThoiGianBaoHanh = moment(this.selectedThietBi.thietbi.bao_hanh.thoi_gian.ngay_ket_thuc).isAfter(moment());
        // if (this.selectedThietBi.thietbi && this.selectedThietBi.thietbi.kiem_dinh && this.selectedThietBi.thietbi.kiem_dinh.isThongTinKiemDinh) {
        //     this.selectedThietBi.thietbi.kiem_dinh.isTrongThoiGianKiemDinh = moment(this.selectedThietBi.thietbi.kiem_dinh.thoi_gian.ngay_het_han).isAfter(moment());
        //     console.log('exec!, ', this.selectedThietBi.thietbi.kiem_dinh.isTrongThoiGianKiemDinh);
        // }
    }

    isOutOfDate(date) {
        return moment(date).isAfter(moment());
    }

    isEmptyThongTinDangKy() {
        if (this.selectedThietBi.thietbi) {
            let testObject = _.omit(this.selectedThietBi.thietbi.ho_so, 'nam_su_dung');
            return _.isEmpty(testObject);
        }
        return true;
    }
}

const name = 'tbisDetailsViewHoSoViewTongQuanTabView';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataSerivce,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewTongQuanTabView
});