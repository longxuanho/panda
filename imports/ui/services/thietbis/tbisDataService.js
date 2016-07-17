import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { ThietBis } from '../../../api/thietbis/tbis';

class TbisDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;

        // this.thietbis = queryThietBis();
        this.selectedThietBi = {};
        this.selectedThongSoKyThuat = {};
        this.errors = [];
    }

    query(selector, options) {
        console.log('data ',ThietBis.find({}).fetch());
        if (_.isEmpty(selector))
            return ThietBis.find({}).fetch();
        return ThietBis.find(selector, options).fetch();
    }

    queryOne(thietbiId) {
        return ThietBis.findOne({_id: thietbiId});
    }

    initNewThietBiData() {
        return {
            ma_thiet_bi: {},
            phan_loai: {},
            trang_thai: 'Đang hoạt động',
            nguon_goc: {},
            dia_diem: {},
            phan_quyen: {
                quan_ly: {},
                so_huu: {},
                van_hanh: {},
                doi_van_hanh: {}
            },
            ho_so: {},
            bao_hanh: {},
            tags: [],
            thong_so_ky_thuat: [],
            thong_so_hoat_dong: {},
            isActive: true,
            metadata: {}
        }
    }

    validateMajorInputThietBiData(data) {
        if (!data.ma_thiet_bi.keyId)
            throw Error('Chưa có thông tin về mã thiết bị');
        if (!data.phan_loai.nhom)
            throw Error('Chưa có thông tin về nhóm thiết bị');
        if (!data.phan_loai.chung_loai)
            throw Error('Chưa có thông tin về chủng loại thiết bị');
        if (!data.phan_loai.loai)
            throw Error('Chưa có thông tin về loại thiết bị');
        if (!data.nguon_goc.hang_san_xuat)
            throw Error('Chưa có thông tin về hãng sản xuất');
        if (_.isEmpty(data.dia_diem.khu_vuc))
            throw Error('Chưa có thông tin về khu vực hoạt động');
        if (_.isEmpty(data.phan_quyen.quan_ly))
            throw Error('Chưa có thông tin về đơn vị quản lý');
        if (_.isEmpty(data.phan_quyen.so_huu))
            throw Error('Chưa có thông tin về đơn vị sở hữu');
    }

    addNew(data) {
        let defer = this.$q.defer();
        ThietBis.insert(data, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });        
        return defer.promise;
    }

    updateMajorForm(data) {
        let defer = this.$q.defer();
        ThietBis.update({
            _id: data._id
        }, {
            $set: {
                ma_thiet_bi: data.ma_thiet_bi,
                phan_loai: data.phan_loai,
                trang_thai: data.trang_thai,
                nguon_goc: data.nguon_goc,
                dia_diem: data.dia_diem,
                phan_quyen: data.phan_quyen,
                ho_so: data.ho_so,
                bao_hanh: data.bao_hanh,
                tags: data.tags,
                ghi_chu: data.ghi_chu,
                mo_ta: data.mo_ta,
                metadata: data.metadata
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateThongSoKyThuat(data) {
        let defer = this.$q.defer();
        ThietBis.update({
            _id: data._id
        }, {
            $set: {
                thong_so_ky_thuat: data.thong_so_ky_thuat,
                metadata: data.metadata
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateThongSoHoatDong(data) {
        let defer = this.$q.defer();
        ThietBis.update({
            _id: data._id
        }, {
            $set: {
                thong_so_hoat_dong: data.thong_so_ky_thuat,
                metadata: data.metadata
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    getAllThietBis() {
        return this.thietbis;
    }

    getSelectedThietBi() {
        return this.selectedThietBi;
    }

    setSelectedThietBi(thietbiId) {
        this.selectedThietBi = this.queryOne(thietbiId);
    }

    setSelectedThongSoKyThuat(thietbiId) {
        // this.selectedThietBi = this.queryOne(thietbiId);
        this.selectedThongSoKyThuat = _.groupBy(this.selectedThietBi.thong_so_ky_thuat, 'nhom');
    }

    getSelectedThongSoKyThuat() {
        return this.selectedThongSoKyThuat;
    }
}

const name = 'tbisDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDataService);
