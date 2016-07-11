import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {TbisHelpers} from './collection';

let Schema = {};

Schema.TbisHelper = new SimpleSchema({
    subject: {
        type: String,
        allowedValues: ['diadiems', 'nguongocs', 'phanloais', 'phanquyens']
    },
    category: {
        type: String,
        allowedValues: ['quocgias', 'khuvucs', 'hangsanxuats', 'models', 'vendors', 'nhoms', 'chungloais', 'loais', 'donvis', 'doivanhanhs']
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

TbisHelpers.attachSchema(Schema.TbisHelper, {replace: true});