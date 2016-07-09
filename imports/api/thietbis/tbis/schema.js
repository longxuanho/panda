import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {ThietBis} from './collection';

let Schema = {};

Schema.ThietBi = new SimpleSchema({
    ma_thiet_bi: {
        type: Object
    },
        'ma_thiet_bi.keyId': {
            type: String,
            max: 30
        },
        'ma_thiet_bi.topoVN': {
            type: String,
            max: 30,
            optional: true
        },
        'ma_thiet_bi.topX': {
            type: String,
            max: 30,
            optional: true
        },
        'ma_thiet_bi.maximo': {
            type: String,
            max: 30,
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
            allowedValues: ['Thiết bị nâng', 'Xe máy', 'Tàu thuyền', 'Trạm nguồn', 'Thanh lý', 'Khác']
        },
        'phan_loai.chung_loai': {
            type: String,
            max: 30,
            optional: true
        },
        'phan_loai.loai': {
            type: String,
            max: 30,
            optional: true
        },
    phan_quyen: {
        type: Object
    },
        'phan_quyen.quan_ly': {
            type: Object
        },
            'phan_quyen.quan_ly.keyId': {
                type: String
            },
            'phan_quyen.quan_ly.ma_don_vi': {
                type: String
            },
            'phan_quyen.quan_ly.ten_don_vi': {
                type: String
            },
    hang_san_xuat: {
        type: Object
    },
        'hang_san_xuat.keyId': {
            type: String
        },
        'hang_san_xuat.ma_hang': {
            type: String
        },
        'hang_san_xuat.ten_hang': {
            type: String
        },
    vi_tri: {
        type: Object
    },
        'vi_tri.quoc_gia': {
            type: String,
            defaultValue: 'Việt Nam'
        },
        'vi_tri.mien': {
            type: String
        },
        'vi_tri.dia_phuong': {
            type: String,
            optional: true
        },
        'vi_tri.khu_vuc': {
            type: Object
        },
            'vi_tri.khu_vuc.keyId': {
                type: String
            },
            'vi_tri.khu_vuc.ma_khu_vuc': {
                type: String
            },
            'vi_tri.khu_vuc.ten_khu_vuc': {
                type: String
            },
    trang_thai: {
        type: String,
        defaultValue: 'Đang hoạt động',
        allowedValues: ['Đang hoạt động', 'Niêm cất', 'Chờ thanh lý', 'Ngừng hoạt động']
    },
    isActive: {
        type: Boolean,
        defaultValue: true
    }
});

ThietBis.attachSchema(Schema.ThietBi, {replace: true});