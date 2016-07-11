import { Meteor } from 'meteor/meteor';

import { TbisHelpers } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tbishelpers', function(options, searchString) {
        const selector = {
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        return TbisHelpers.find(selector, options);
    });
}