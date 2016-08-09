import { Meteor } from 'meteor/meteor';

import { TbisReports } from './collection';

if (Meteor.isServer) {
    Meteor.publish('tbisreports', function(options, searchString, status) {
        const selector = {
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        if (typeof status === 'string' && status.length) {
            selector.status = status;
        }

        return TbisReports.find(selector, options);
    });
}