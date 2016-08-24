import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { CloudSettings } from './collection';

if (Meteor.isServer) {
    Meteor.publish('cloudsettings', function(moduleName, stateName, subjectName, options) {
        const selector = {};

        check(moduleName, String);
        check(stateName, String);
        check(subjectName, String);

        selector['user._id'] = this.userId;

        if (moduleName)
            selector['module'] = moduleName;
        if (stateName)
            selector['stateName'] = stateName;
        if (subjectName)
            selector['subject'] = subjectName;

        return CloudSettings.find(selector, options);
    });
}