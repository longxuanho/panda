import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import _ from 'underscore';
import moment from 'moment';

import { ThietBis } from '../../../api/thietbis/tbis';
import { name as MetadataService } from '../../services/common/metadataService';

class TbisDataService {

    constructor($q, metadataService) {
        'ngInject';

        this.$q = $q;
        this.metadataService = metadataService;

        this.selectedThietBi = {
            thietbi: {}
        };
    }

    query(selector, options) {
        if (!selector)
            return ThietBis.find({}).fetch();
        return ThietBis.find(selector, options).fetch();
    }

    queryForGrid(selector, options) {
        if (!selector)
            return this.massageThietBisFetchedData(
                ThietBis.find({}).fetch()
            );
        return this.massageThietBisFetchedData(
            ThietBis.find(selector, options).fetch()
        );
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
            ho_so: {
                thiet_bi_di_kem: {
                    isThietBiDiKem: false,
                    danh_sach: []
                }
            },
            bao_hanh: {
                isThongTinBaoHanh: false,
                isTrongThoiGianBaoHanh: false,
                thoi_gian: {},
                stringify: {}
            },
            kiem_dinh: {
                isThongTinKiemDinh: false,
                isTrongThoiGianKiemDinh: false,
                ho_so: {},
                thoi_gian: {},
                stringify: {}
            },
            tags: [],
            thong_so_ky_thuat: [],
            thong_so_hoat_dong: {},
            isActive: true,
            metadata: {}
        };
    }

    buidInputThietBiData(data) {
        this.metadataService.buildNewMetadata(data, Meteor.user());
        if (data.bao_hanh.isThongTinBaoHanh && (data.bao_hanh.thoi_gian.ngay_bat_dau && data.bao_hanh.thoi_gian.ngay_ket_thuc)) {
            data.bao_hanh.stringify.ngay_bat_dau = moment(data.bao_hanh.thoi_gian.ngay_bat_dau).format('YYYY-MM-DD');
            data.bao_hanh.stringify.ngay_ket_thuc = moment(data.bao_hanh.thoi_gian.ngay_ket_thuc).format('YYYY-MM-DD');
            // (data.bao_hanh.stringify.ngay_ket_thuc > moment().format('YYYY-MM-DD'));
            data.bao_hanh.isTrongThoiGianBaoHanh = moment(data.bao_hanh.thoi_gian.ngay_ket_thuc).isAfter(moment());
            data.bao_hanh.thoi_gian_bao_hanh = moment(data.bao_hanh.thoi_gian.ngay_ket_thuc).diff(moment(data.bao_hanh.thoi_gian.ngay_bat_dau), 'months');
        }

        if ((data.ho_so.thiet_bi_di_kem.isThietBiDiKem && data.ho_so.thiet_bi_di_kem.danh_sach.length))
            data.ho_so.thiet_bi_di_kem.str_danh_sach = data.ho_so.thiet_bi_di_kem.danh_sach.join(", ");

        if (data.kiem_dinh.isThongTinKiemDinh && (data.kiem_dinh.thoi_gian.ngay_hieu_luc && data.kiem_dinh.thoi_gian.ngay_het_han)) {
            data.kiem_dinh.stringify.ngay_hieu_luc = moment(data.kiem_dinh.thoi_gian.ngay_hieu_luc).format('YYYY-MM-DD');
            data.kiem_dinh.stringify.ngay_het_han = moment(data.kiem_dinh.thoi_gian.ngay_het_han).format('YYYY-MM-DD');
            data.kiem_dinh.isTrongThoiGianKiemDinh = moment(data.kiem_dinh.thoi_gian.ngay_het_han).isAfter(moment());
        }

    }

    validateMajorInputThietBiData(data) {
        if (!data.ma_thiet_bi.keyId)
            throw Error('Chưa có thông tin về mã thiết bị.');
        if (!data.phan_loai.nhom)
            throw Error('Chưa có thông tin về nhóm thiết bị.');
        if (!data.phan_loai.chung_loai)
            throw Error('Chưa có thông tin về chủng loại thiết bị.');
        if (!data.phan_loai.loai)
            throw Error('Chưa có thông tin về loại thiết bị.');
        if (!data.nguon_goc.hang_san_xuat)
            throw Error('Chưa có thông tin về hãng sản xuất.');
        if (_.isEmpty(data.dia_diem.khu_vuc))
            throw Error('Chưa có thông tin về khu vực hoạt động.');
        if (_.isEmpty(data.phan_quyen.quan_ly))
            throw Error('Chưa có thông tin về đơn vị quản lý.');
        if (_.isEmpty(data.phan_quyen.so_huu))
            throw Error('Chưa có thông tin về đơn vị sở hữu.');


        if (data.bao_hanh.isThongTinBaoHanh && !(data.bao_hanh.thoi_gian.ngay_bat_dau && data.bao_hanh.thoi_gian.ngay_ket_thuc))
            throw Error('Thông tin về thời gian bảo hành chưa đầy đủ.');
        if (data.kiem_dinh.isThongTinKiemDinh && !(data.kiem_dinh.thoi_gian.ngay_hieu_luc && data.kiem_dinh.thoi_gian.ngay_het_han))
            throw Error('Thông tin về thời gian kiểm định chưa đầy đủ.');

        if (data.ho_so.thiet_bi_di_kem.isThietBiDiKem && !data.ho_so.thiet_bi_di_kem.danh_sach.length)
            throw Error('Chưa có danh sách các mã thiết bị đi kèm.');
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
                kiem_dinh: data.kiem_dinh,
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
        let hinh_anh = angular.copy(this.selectedThietBi.thietbi.hinh_anh);

        console.log('hinh_anh: ', hinh_anh);
        console.log('this.selectedThietBi.thietbi: ', this.selectedThietBi.thietbi);

        if (newImage.isDefault) {
            _.each(hinh_anh.collections, (item) => {
                item.isDefault = false;
            });
            hinh_anh.default = angular.copy(newImage);
        }

        hinh_anh.collections.push(newImage);
        ThietBis.update({
            _id: this.selectedThietBi.thietbi._id
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
        let hinh_anh = angular.copy(this.selectedThietBi.thietbi.hinh_anh);

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
            _id: this.selectedThietBi.thietbi._id
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
        let hinh_anh = angular.copy(this.selectedThietBi.thietbi.hinh_anh);
        if (image.isDefault)
            hinh_anh.default = {};
        hinh_anh.collections = _.reject(hinh_anh.collections, (item) => {
            return item._id === image._id;
        });
        ThietBis.update({
            _id: this.selectedThietBi.thietbi._id
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
        this.selectedThietBi.thietbi = (thietbiId) ? this.queryOne(thietbiId) : {};
    }

    getSelectedThongSoKyThuatGroupBy(thietbi) {
        if (thietbi && thietbi.thong_so_ky_thuat)
            return _.groupBy(thietbi.thong_so_ky_thuat, 'nhom');
    }

    remove(thietbiId) {
        // Check nếu thietbiId trùng với id của selectedThietBi.thietbi
        let defer = this.$q.defer();

        if(thietbiId !== this.selectedThietBi.thietbi._id)
            defer.reject(new Error("Xác nhận thiết bị không khớp. Xin vui lòng thử lại sau."));
        else {
            ThietBis.remove(this.selectedThietBi.thietbi._id, (error) => {
                if (error)
                    defer.reject(error);
                else
                    defer.resolve();
            });
        }

        return defer.promise;
    }

    massageThietBisFetchedData(response) {
        let now = moment();
        let nullText = '(Chưa xác định)';
        let nullNumber = '-';
        _.each(response, (item) => {
            if (!item.nguon_goc.vendor)
                item.nguon_goc.vendor = nullText;
            if (!item.nguon_goc.nam_san_xuat)
                item.nguon_goc.nam_san_xuat = nullNumber;
            if (!item.nguon_goc.model)
                item.nguon_goc.model = nullText;
            if (!item.nguon_goc.xuat_xu)
                item.nguon_goc.xuat_xu = nullText;
            if (!item.ho_so.nam_su_dung)
                item.ho_so.nam_su_dung = nullNumber;
            if (!item.nguon_goc.noi_lap_rap)
                item.nguon_goc.noi_lap_rap = nullText;
            if (!item.phan_quyen.van_hanh.ten)
                item.phan_quyen.van_hanh.ten = nullText;
            if (!item.phan_quyen.doi_van_hanh.ten)
                item.phan_quyen.doi_van_hanh.ten = nullText;
            if (!item.dia_diem.dia_phuong)
                item.dia_diem.dia_phuong = nullText;
            // Tính lại trường isTrongThoiGianKiemDinh và isTrongThoiGianBaoHanh
            if (item.bao_hanh.isThongTinBaoHanh && item.bao_hanh.thoi_gian.ngay_ket_thuc)
                item.bao_hanh.isTrongThoiGianBaoHanh = moment(item.bao_hanh.thoi_gian.ngay_ket_thuc).isAfter(now);
            if (item.kiem_dinh.isThongTinKiemDinh && item.kiem_dinh.thoi_gian.ngay_het_han)
                item.kiem_dinh.isTrongThoiGianKiemDinh = moment(item.kiem_dinh.thoi_gian.ngay_het_han).isAfter(now);
        });

        return response;
    }
}

const name = 'tbisDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    MetadataService
])
    .service(name, TbisDataService);
