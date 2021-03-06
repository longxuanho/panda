import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {TbisHistories} from './collection';

let Schema = {};

Schema.TbisHistory = new SimpleSchema({
    isDone: {
        type: Boolean
    },
    tham_chieu: {
        type: Object
    },
        'tham_chieu._id': {
            type: String
        },
        'tham_chieu.phan_loai': {
            type: Object,
            blackbox: true
        },
        'tham_chieu.ma_thiet_bi': {
            type: Object,
            blackbox: true
        },
        'tham_chieu.don_vi_van_hanh': {
            type: Object,
            optional: true,
            blackbox: true
        },
        'tham_chieu.doi_van_hanh': {
            type: Object,
            optional: true,
            blackbox: true
        },
        'tham_chieu.refMaximo': {
            type: String,
            optional: true
        },
    phan_loai: {
        type: Object
    },
        'phan_loai.nhom': {
            type: String,
            allowedValues: ['Sửa chữa nhỏ', 'Sửa chữa lớn', 'Sửa chữa cụm', 'Bảo dưỡng', 'Đại tu']
        },
        'phan_loai.loai': {
            type: String,
            allowedValues: ['Đột xuất', 'Kế hoạch'],
            optional: true
        },
    noi_dung: {
        type: String
    },
    thoi_gian: {
        type: Object
    },
        'thoi_gian.bat_dau': {
            type: Object
        },
            'thoi_gian.bat_dau.refDate': {
                type: Date
            },
            'thoi_gian.bat_dau.refString': {
                type: String
            },
        'thoi_gian.ket_thuc': {
            type: Object,
            defaultValue: {}
        },
            'thoi_gian.ket_thuc.refDate': {
                type: Date,
                optional: true
            },
            'thoi_gian.ket_thuc.refString': {
                type: String,
                optional: true
            },
    ghi_chu: {
        type: Object,
        defaultValue: {}
    },
        'ghi_chu.html': {
            type: String,
            optional: true
        },
        'ghi_chu.text': {
            type: String,
            optional: true
        },
    thong_ke: {
       type: Object
    },
        'thong_ke.duration': {
            type: Object,
            defaultValue: {}
        },
            'thong_ke.duration.days': {
                type: Number,
                optional: true
            },
            'thong_ke.duration.hours': {
                type: Number,
                optional: true
            },
            'thong_ke.duration.minutes': {
                type: Number,
                optional: true
            },
    isActive: {
        type: Boolean,
        defaultValue: true
    },
    metadata: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

TbisHistories.attachSchema(Schema.TbisHistory, {replace: true});