import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {ThietBis} from './collection';

let Schema = {};

Schema.ThietBi = new SimpleSchema({
    ma_thiet_bi: {
        type: Object
    },
        'ma_thiet_bi.keyId': {
            type: String,
            index: true,
            unique: true,
            max: 50
        },
        'ma_thiet_bi.ref': {
            type: String,
            max: 50,
            optional: true
        },
        'ma_thiet_bi.topX': {
            type: String,
            max: 50,
            optional: true
        },
        'ma_thiet_bi.maximo': {
            type: String,
            max: 50,
            optional: true
        },
    phan_loai: {
        type: Object
    },
        'phan_loai.scope': {
            type: String,
            defaultValue: 'Tân Cảng Sài Gòn',
            allowedValues: ['Tân Cảng Sài Gòn', 'Công ty con', 'Công ty vệ tinh', 'Khác']
        },
        'phan_loai.nhom': {
            type: String,
            allowedValues: ['Thiết bị nâng', 'Xe máy', 'Tàu thuyền', 'Trạm nguồn', 'Thanh lý']

        },
        'phan_loai.chung_loai': {
            type: String
        },
        'phan_loai.loai': {
            type: String
        },
    trang_thai: {
        type: String,
        defaultValue: 'Đang hoạt động',
        allowedValues: ['Đang hoạt động', 'Niêm cất', 'Chờ thanh lý', 'Ngừng hoạt động']
    },
    nguon_goc: {
        type: Object
    },
        'nguon_goc.hang_san_xuat': {
            type: String
        },
        'nguon_goc.model': {
            type: String,
            optional: true
        },
        'nguon_goc.nam_san_xuat': {
            type: Number,
            optional: true
        },
        'nguon_goc.noi_lap_rap': {
            type: String,
            optional: true
        },
        'nguon_goc.vendor': {
            type: String,
            optional: true
        },
    dia_diem: {
        type: Object
    },
        'dia_diem.quoc_gia': {
            type: String,
            defaultValue: 'Việt Nam'
        },
        'dia_diem.mien': {
            type: String,
            defaultValue: 'Nam'
        },
        'dia_diem.dia_phuong': {
            type: String,
            optional: true
        },
        'dia_diem.khu_vuc': {
            type: Object
        },
            'dia_diem.khu_vuc.ten': {
                type: String
            },
            'dia_diem.khu_vuc.ma': {
                type: String
            },
        'dia_diem.terminal': {
            type: String,
            optional: true
        },
        'dia_diem.line': {
            type: String,
            optional: true
        },
        'dia_diem.toa_do': {
            type: Object,
            defaultValue: {}
        },
            'dia_diem.toa_do.location': {
                type: Object,
                defaultValue: {}
            },
                'dia_diem.toa_do.location.latitude': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
                'dia_diem.toa_do.location.longitude': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
            'dia_diem.toa_do.enableAPI': {
                type: Boolean,
                defaultValue: false,
                optional: true
            },
            'dia_diem.toa_do.api': {
                type: String,
                optional: true
            },
    phan_quyen: {
        type: Object
    },
        'phan_quyen.quan_ly': {
            type: Object
        },
            'phan_quyen.quan_ly.ma': {
                type: String
            },
            'phan_quyen.quan_ly.ten': {
                type: String
            },
            'phan_quyen.quan_ly.nhom': {
                type: String
            },
        'phan_quyen.so_huu': {
            type: Object
        },
            'phan_quyen.so_huu.ma': {
                type: String
            },
            'phan_quyen.so_huu.ten': {
                type: String
            },
            'phan_quyen.so_huu.nhom': {
                type: String
            },
        'phan_quyen.van_hanh': {
            type: Object,
            defaultValue: {}
        },
            'phan_quyen.van_hanh.ten': {
                type: String,
                optional: true
            },
            'phan_quyen.van_hanh.ma': {
                type: String,
                optional: true
            },
            'phan_quyen.van_hanh.nhom': {
                type: String,
                optional: true
            },
        'phan_quyen.doi_van_hanh': {
            type: Object,
            defaultValue: {}
        },
            'phan_quyen.doi_van_hanh.ten': {
                type: String,
                optional: true
            },
            'phan_quyen.doi_van_hanh.ma': {
                type: String,
                optional: true
            },
    ho_so: {
        type: Object
    },
        'ho_so.nam_su_dung': {
            type: Number,
            optional: true
        },
        'ho_so.so_dang_ky': {
            type: String,
            optional: true
        },
        'ho_so.so_khung': {
            type: String,
            optional: true
        },
        'ho_so.so_may': {
            type: String,
            optional: true
        },
        'ho_so.bien_so': {
            type: String,
            optional: true
        },
        'ho_so.so_dang_kiem': {
            type: String,
            optional: true
        },
        'ho_so.xuat_xu': {
            type: String,
            optional: true
        },
        'ho_so.thiet_bi_di_kem': {
            type: Object,
            defaultValue: {}
        },
            'ho_so.thiet_bi_di_kem.isThietBiDiKem': {
                type: Boolean,
                defaultValue: false
            },
            'ho_so.thiet_bi_di_kem.danh_sach': {
                type: [String],
                defaultValue: []
            },
            'ho_so.thiet_bi_di_kem.str_danh_sach': {
                type: String,
                optional: true
            },
    kiem_dinh: {
        type: Object
    },
        'kiem_dinh.isThongTinKiemDinh': {
            type: Boolean,
            defaultValue: false
        },
        'kiem_dinh.isTrongThoiGianKiemDinh': {
            type: Boolean,
            defaultValue: false
        },
        'kiem_dinh.ho_so': {
            type: Object,
            defaultValue: {}
        },
            'kiem_dinh.ho_so.so_phieu_kiem_dinh': {
                type: String,
                optional: true
            },
            'kiem_dinh.ho_so.so_tem_kiem_dinh': {
                type: String,
                optional: true
            },
        'kiem_dinh.thoi_gian': {
            type: Object,
            defaultValue: {}
        },
            'kiem_dinh.thoi_gian.ngay_hieu_luc': {
                type: Date,
                optional: true
            },
            'kiem_dinh.thoi_gian.ngay_het_han': {
                type: Date,
                optional: true
            },
        'kiem_dinh.stringify': {
            type: Object,
            defaultValue: {}
        },
            'kiem_dinh.stringify.ngay_hieu_luc': {
                type: String,
                optional: true
            },
            'kiem_dinh.stringify.ngay_het_han': {
                type: String,
                optional: true
            },
    bao_hanh: {
        type: Object,
        defaultValue: {}
    },
        'bao_hanh.isThongTinBaoHanh': {
            type: Boolean,
            defaultValue: false
        },
        'bao_hanh.isTrongThoiGianBaoHanh': {
            type: Boolean,
            defaultValue: false
        },
        'bao_hanh.thoi_gian_bao_hanh': {
            type: Number,
            optional: true
        },
        'bao_hanh.thoi_gian': {
            type: Object,
            defaultValue: {}
        },
            'bao_hanh.thoi_gian.ngay_bat_dau': {
                type: Date,
                optional: true
            },
            'bao_hanh.thoi_gian.ngay_ket_thuc': {
                type: Date,
                optional: true
            },
        'bao_hanh.stringify': {
            type: Object,
            defaultValue: {}
        },
            'bao_hanh.stringify.ngay_bat_dau': {
                type: String,
                optional: true
            },
            'bao_hanh.stringify.ngay_ket_thuc': {
                type: String,
                optional: true
            },
    hinh_anh: {
        type: Object,
        defaultValue: {}
    },
        'hinh_anh.collections': {
            type: [Object],
            defaultValue: []
        },
            'hinh_anh.collections.$._id': {
                type: String,
                optional: true
            },
            'hinh_anh.collections.$.tieu_de': {
                type: String,
                optional: true
            },
            'hinh_anh.collections.$.ten_file': {
                type: String,
                optional: true
            },
            'hinh_anh.collections.$.url': {
                type: String,
                optional: true
            },
            'hinh_anh.collections.$.thumb': {
                type: String,
                optional: true
            },
            'hinh_anh.collections.$.isDefault': {
                type: Boolean,
                defaultValue: false
            },
            'hinh_anh.collections.$.ngay_tao': {
                type: Date,
                optional: true
            },
            'hinh_anh.collections.$.span_row': {
                type: Number,
                optional: true
            },
            'hinh_anh.collections.$.span_column': {
                type: Number,
                optional: true
            },
            'hinh_anh.collections.$.class': {
                type: String,
                optional: true
            },
            'hinh_anh.collections.$.ngay_cap_nhat': {
                type: Date,
                optional: true
            },
        'hinh_anh.default': {
            type: Object,
            defaultValue: {}
        },
            'hinh_anh.default._id': {
                type: String,
                optional: true
            },
            'hinh_anh.default.url': {
                type: String,
                optional: true
            },
            'hinh_anh.default.thumb': {
                type: String,
                optional: true
            },
    tags: {
        type: [String],
        defaultValue: []
    },
    ghi_chu: {
        type: String,
        optional: true
    },
    mo_ta: {
        type: String,
        optional: true
    },
    isActive: {
        type: Boolean,
        defaultValue: true
    },
    thong_so_ky_thuat: {
        type: [Object],
        defaultValue: []
    },
        // 'thong_so_ky_thuat.$': {
        //     type: Object,
        //     blackbox: true
        // },
        "thong_so_ky_thuat.$._id": {
            type: String
        },
        "thong_so_ky_thuat.$.nhom": {
            type: String
        },
        "thong_so_ky_thuat.$.ten_thong_so": {
            type: Object
        },
            "thong_so_ky_thuat.$.ten_thong_so.order": {
                type: Number
            },
            "thong_so_ky_thuat.$.ten_thong_so.ten": {
                type: String
            },
        "thong_so_ky_thuat.$.gia_tri": {
            type: String
        },
        "thong_so_ky_thuat.$.don_vi": {
            type: String,
            optional: true
        },
    thong_so_hoat_dong: {
        type: Object,
        defaultValue: {}
    },
        'thong_so_hoat_dong.hours': {
            type: Number,
            optional: true
        },
        'thong_so_hoat_dong.conts': {
            type: Number,
            optional: true
        },
        'thong_so_hoat_dong.kms': {
            type: Number,
            optional: true
        },
    statistics: {
        type: Object,
        defaultValue: {}
    },
        'statistics.hinh_anh': {
            type: Object,
            defaultValue: {}
        },
            'statistics.hinh_anh.count': {
                type: Number,
                defaultValue: 0
            },
    metadata: {
        type: Object,
        blackbox: true
    },


});

ThietBis.attachSchema(Schema.ThietBi, {replace: true});