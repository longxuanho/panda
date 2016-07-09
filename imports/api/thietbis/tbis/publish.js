import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { ThietBis } from './collection';

if (Meteor.isServer) {
    Meteor.publish('thietbis', function(options, searchString) {
        const selector = {
            // Chỉ những thiết bị còn active trong hệ thống
            $and: [{
                isActive: true
            }, {
                isActive: {
                    $exists: true
                }
            }]
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.searchField = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        Counts.publish(this, 'numberOfThietBis', ThietBis.find(selector), {
            noReady: true
        });

        return ThietBis.find(selector, options);
    });
}