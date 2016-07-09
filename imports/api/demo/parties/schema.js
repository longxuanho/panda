import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Parties } from './collection';

let Schema = {};

Schema.Party = new SimpleSchema({
    name: {
        type: String,
        max: 50
    },
    description: {
        type: String,
        optional: true
    },
    public: {
        type: Boolean,
        defaultValue: false
    },
    owner: {
        type: String
    },
    location: {
        type: Object,
        optional: true
    },
        'location.latitude': {
            type: Number,
            optional: true
        },
        'location.longitude': {
            type: Number,
            optional: true
        }
});

Parties.attachSchema(Schema.Party, {replace: true});