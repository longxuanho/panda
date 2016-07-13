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
        'phan_quyen.so_huu': {
            type: Object
        },
            'phan_quyen.so_huu.ma': {
                type: String
            },
            'phan_quyen.so_huu.ten': {
                type: String
            },
        'phan_quyen.van_hanh': {
            type: Object,
            optional: true
        },
            'phan_quyen.van_hanh.ten': {
                type: String,
                optional: true
            },
            'phan_quyen.van_hanh.ma': {
                type: String,
                optional: true
            },
        'phan_quyen.doi_van_hanh': {
            type: Object,
            optional: true
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
        'ho_so.so_giay_dang_kiem': {
            type: String,
            optional: true
        },
        'ho_so.xuat_xu': {
            type: String,
            optional: true
        },
    bao_hanh: {
        type: Object
    },
        'bao_hanh.isThongTinBaoHanh': {
            type: Boolean,
            defaultValue: false
        },
        'bao_hanh.ngay_bat_dau': {
            type: Date,
            optional: true
        },
        'bao_hanh.ngay_ket_thuc': {
            type: Date,
            optional: true
        },
        'bao_hanh.thoi_gian_bao_hanh': {
            type: Number,
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
    metadata: {
        type: Object,
        blackbox: true
    }
});

ThietBis.attachSchema(Schema.ThietBi, {replace: true});