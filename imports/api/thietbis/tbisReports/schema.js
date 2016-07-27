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

Schema.TbisAction = new SimpleSchema({
    _id: {
       type: String
    },
    action: {
       type: String
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
    isActive: {
        type: Boolean,
        defaultValue: true
    },
    tieu_de: {
        type: String
    },
    noi_dung: {
        type: Object
    },
        'noi_dung.html': {
            type: String
        },
        'noi_dung.text': {
            type: String
        },
    comments: {
        type: [Schema.TbisComment],
        defaultValue: []
    },
    actions: {
        type: [Schema.TbisAction],
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
        'thong_ke.actionsCount': {
            type: Number,
            defaultValue: 0
        },
    metadata: {
        type: Object,
        blackbox: true
    }
});

TbisReports.attachSchema(Schema.TbisReport, {replace: true});