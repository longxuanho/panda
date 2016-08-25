import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { CloudSettings } from './collection';

if (Meteor.isServer) {
    Meteor.publish('cloudsettings', function(options, queryParams) {
        const selector = {};

        check(options, Object);
        check(queryParams, Object);

        selector['user._id'] = this.userId;

        if (queryParams.module)
            selector['module'] = queryParams.module;
        if (queryParams.stateName)
            selector['stateName'] = queryParams.stateName;
        if (queryParams.subject)
            selector['subject'] = queryParams.subject;

        return CloudSettings.find(selector, options);
    });
}