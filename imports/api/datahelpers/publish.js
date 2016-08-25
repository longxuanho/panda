import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { DataHelpers } from './collection';

if (Meteor.isServer) {
    Meteor.publish('datahelpers', function(options, queryParams) {
        const selector = {};

        check(options, Object);
        check(queryParams, Object);

        selector['module'] = queryParams.module;
        selector['stateName'] = queryParams.stateName;
        selector['subject'] = queryParams.subject;

        return DataHelpers.find(selector, options);
    });
}