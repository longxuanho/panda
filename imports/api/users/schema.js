import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

let Schema = {};

Schema.UserProfile = new SimpleSchema({
    'name': {
        type: String
    },
    'ho_so': {
        type: Object
    },
        'ho_so.ten': {
            type: String
        },
        'ho_so.ho_ten_dem': {
            type: String
        },
        'ho_so.gioi_tinh': {
            type: String
        },
    'bien_che': {
        type: Object
    },
        'bien_che.ma': {
            type: String
        },
        'bien_che.cong_ty': {
            type: String
        },
        'bien_che.don_vi': {
            type: String
        },
        'bien_che.ban': {
            type: String,
            optional: true
        },
        'bien_che.to': {
            type: String,
            optional: true
        },
        'bien_che.doi': {
            type: String,
            optional: true
        },
    'lien_he': {
        type: Object
    },
        'lien_he.dien_thoai': {
            type: String,
            optional: true
        },
        'lien_he.email': {
            type: String,
            optional: true
        },
    'tham_chieu': {
        type: Object,
        blackbox: true
    },
    'avatar': {
        type: Object,
        defaultValue: {}
    },
        'avatar.url': {
            type: String,
            optional: true
        },
        'avatar.original': {
            type: String,
            optional: true
        },
    'searchField': {
        type: String,
        optional: true
    },
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    },
    // Tracking user status
    status: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User, {replace: true});