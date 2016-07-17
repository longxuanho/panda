import { Meteor } from 'meteor/meteor';

import { TsktHelpers } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tskthelpers', function(options, searchString) {
        const selector = {
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        return TsktHelpers.find(selector, options);
    });
}