import { Meteor } from 'meteor/meteor';

import { TbisReports } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tbisreports', function(options, searchString) {
        const selector = {
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        return TbisReports.find(selector, options);
    });
}