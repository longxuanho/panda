import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { ThietBis } from '../../../api/thietbis/tbis';

class TbisDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.selectedThietBi = {};
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

    validateImageInputData(image) {
        if (!image._id)
            throw Error('Chưa có mã _id cho hình ảnh');
        if (!image.tieu_de)
            throw Error('Chưa có tiêu đề cho hình ảnh');
        if (!image.ten_file)
            throw Error('Chưa có tên file hình ảnh');
        if (!image.url)
            throw Error('Chưa có liên kết tới hình ảnh');
        if (!image.thumb)
            throw Error('Chưa có liên kết tới thumbnail');
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
                thong_so_hoat_dong: data.thong_so_hoat_dong,
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

    updateLocation(data) {
        let defer = this.$q.defer();
        ThietBis.update({
            _id: data._id
        }, {
            $set: {
                'dia_diem.toa_do': data.dia_diem.toa_do
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    addNewImage(newImage) {
        let defer = this.$q.defer();
        let hinh_anh = angular.copy(this.selectedThietBi.hinh_anh);

        if (newImage.isDefault) {
            _.each(hinh_anh.collections, (item) => {
                item.isDefault = false;
            });
            hinh_anh.default = angular.copy(newImage);
        }

        hinh_anh.collections.push(newImage);
        ThietBis.update({
            _id: this.selectedThietBi._id
        }, {
            $set: {
                'hinh_anh': hinh_anh
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateSelectedImage(image) {
        let defer = this.$q.defer();
        image.ngay_cap_nhat = new Date();
        let hinh_anh = angular.copy(this.selectedThietBi.hinh_anh);

        _.each(hinh_anh.collections, (item, index) => {
            if (item._id === image._id)
                hinh_anh.collections[index] = angular.copy(image);
        });

        if (image.isDefault) {
            _.each(hinh_anh.collections, (item) => {
                item.isDefault = (item._id === image._id);
            });
            hinh_anh.default = angular.copy(image);
        }

        ThietBis.update({
            _id: this.selectedThietBi._id
        }, {
            $set: {
                'hinh_anh': hinh_anh
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    removeSelectedImage(image) {
        let defer = this.$q.defer();
        let hinh_anh = angular.copy(this.selectedThietBi.hinh_anh);
        if (image.isDefault)
            hinh_anh.default = {};
        hinh_anh.collections = _.reject(hinh_anh.collections, (item) => {
            return item._id === image._id;
        });
        ThietBis.update({
            _id: this.selectedThietBi._id
        }, {
            $set: {
                'hinh_anh': hinh_anh
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    getSelectedThietBi() {
        return this.selectedThietBi;
    }

    setSelectedThietBi(thietbiId) {
        this.selectedThietBi = this.queryOne(thietbiId);
    }

    getSelectedThongSoKyThuatGroupBy(data) {
        if (data)
            return _.groupBy(data, 'nhom');
    }
}

const name = 'tbisDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDataService);
