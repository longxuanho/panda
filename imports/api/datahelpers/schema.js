import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DataHelpers } from './collection';

let Schema = {};

Schema.DataHelper = new SimpleSchema({
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
    dataSource: {
        type: Object,
        blackbox: true
    },
    isPublic: {
        type: Boolean,
        defaultValue: true
    }
});

DataHelpers.attachSchema(Schema.DataHelper, {replace: true});