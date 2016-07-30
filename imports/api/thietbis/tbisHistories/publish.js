import { Meteor } from 'meteor/meteor';

import { TbisHistories } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tbishistories', function(options, searchString) {
        const selector = {
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        return TbisHistories.find(selector, options);
    });
}