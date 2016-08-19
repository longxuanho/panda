import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import './schema';
import './methods';
import _ from 'underscore';

if (Meteor.isServer) {
    Meteor.publish('users', function(options, searchString) {
        let selector = {};

        let defaultFields = {
            emails: 1,
            profile: 1,
            status: 1
        };

        if (_.isEmpty(options)) {
            options = { fields: defaultFields }
        } else {
            let resolvedFields = {};
            let allowedKeyFields = ['emails', 'profile', 'profile.name', 'profile.avatar', 'profile.ho_so', 'profile.bien_che', 'profile.lien_he', 'status'];
            if (!options.fields) {
                options.fields = defaultFields;
            } else {
                let keysResolvedFields = _.intersection(_.keys(options), allowedKeyFields);
                _.each(keysResolvedFields, (key) => {
                    resolvedFields[key] = 1
                });
                options.fields = resolvedFields;
            }
        }


        if (typeof searchString === 'string' && searchString.length) {
            selector['profile.searchField'] = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        Counts.publish(this, 'numberOfUsers', Meteor.users.find(selector), {
            noReady: true
        });

        return Meteor.users.find(selector, options);
    });
}