import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';
import _ from 'underscore';

import { DataHelpers } from './collection';

if (Meteor.isServer) {
    Meteor.publish('datahelpers', function(options, queryParams) {
        const selector = {};

        check(options, Object);
        check(queryParams, Object);

        if (queryParams.module) {
            if (_.isString(queryParams.module))
                selector['module'] = queryParams.module;
            if (_.isArray(queryParams.module))
                selector['module'] = { $in: queryParams.module };
        }

        if (queryParams.stateName !== null)
            selector['stateName'] = queryParams.stateName;


        if (queryParams.subject !== null)
            selector['subject'] = queryParams.subject;

        return DataHelpers.find(selector, options);
    });
}