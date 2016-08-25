import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {CloudSettings} from './collection';

let Schema = {};

Schema.CloudSetting = new SimpleSchema({
    module: {
        // eg. 'thietbis'
        type: String
    },
    stateName: {
        // eg. 'tbisList'
        type: String
    },
    subject: {
        // eg. kendoGrid
        type: String
    },
    user: {
        type: Object
    },
        'user._id': {
            type: String
        },
        'user.name': {
            type: String
        },
        'user.email': {
            type: String
        },
    dataSource: {
        type: Object,
    },
        'dataSource._id': {
            type: String
        },
        'dataSource.description': {
            type: String
        },
        // Option đã được Stringify
        'dataSource.options': {
            type: String
        },
    order: {
        type: Number,
        defaultValue: 100
    },
    isPublic: {
        type: Boolean,
        defaultValue: false
    }
});

CloudSettings.attachSchema(Schema.CloudSetting, {replace: true});