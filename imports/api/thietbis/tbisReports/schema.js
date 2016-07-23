import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {TbisReports} from './collection';

let Schema = {};

Schema.TbisComment = new SimpleSchema({
    _id: {
        type: String
    },
    noi_dung: {
        type: String
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

Schema.TbisReport = new SimpleSchema({
    status: {
        type: String,
        defaultValue: 'open',
        allowedValues: ['open', 'closed']
    },
    tham_chieu: {
        type: Object
    },
        'tham_chieu.phan_loai': {
            type: Object
        },
            'tham_chieu.phan_loai.nhom': {
                type: Object,
                blackbox: true
            },
            'tham_chieu.phan_loai.chung_loai': {
                type: Object,
                blackbox: true
            },
            'tham_chieu.phan_loai.loai': {
                type: Object,
                blackbox: true
            },
        'tham_chieu.ma_thiet_bi': {
            type: Object,
            blackbox: true
        },
        'tham_chieu.don_vi': {
            type: Object,
            optional: true,
            blackbox: true
        },
        'tham_chieu.doi_van_hanh': {
            type: Object,
            optional: true,
            blackbox: true
        },
    isActive: {
        type: Boolean,
        defaultValue: true
    },
    tieu_de: {
        type: String
    },
    noi_dung: {
        type: String
    },
    comments: {
        type: [Schema.TbisComment],
        defaultValue: []
    },
    thong_ke: {
        type: Object
    },
        'thong_ke.openWhen': {
            type: Date,
            defaultValue: new Date()
        },
        'thong_ke.closedWhen': {
            type: Date,
            optional: true
        },
        'thong_ke.openHours': {
            type: Number,
            decimal: true,
            defaultValue: 0
        },
        'thong_ke.commentsCount': {
            type: Number,
            defaultValue: 0
        },
    metadata: {
        type: Object,
        blackbox: true
    }
});

TbisReports.attachSchema(Schema.TbisReport, {replace: true});