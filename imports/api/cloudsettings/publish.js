import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { CloudSettings } from './collection';

if (Meteor.isServer) {
    Meteor.publish('cloudsettings', function(options, queryParams) {
        const selector = {};

        check(options, Object);
        check(queryParams, Object);

        selector['$or'] = [
            {
                'module': queryParams.module,
                'stateName': queryParams.stateName,
                'subject': queryParams.subject,
                'isPublic': true
            }, {
                'module': queryParams.module,
                'stateName': queryParams.stateName,
                'subject': queryParams.subject,
                'user._id': this.userId
            }
        ];

        return CloudSettings.find(selector, options);
    });
}