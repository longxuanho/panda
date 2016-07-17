import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {TsktHelpers} from './collection';

let Schema = {};

Schema.TsktHelper = new SimpleSchema({
    subject: {
        type: String,
        allowedValues: ['thongsokythuats']
    },
    category: {
        type: String,
        allowedValues: ['nhoms', 'tenthongsos', 'donvis']
    },
    dataObject: {
        type: Object,
        blackbox: true
    },
    metadata: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

TsktHelpers.attachSchema(Schema.TsktHelper, {replace: true});