import { Mongo } from 'meteor/mongo';

export const DataHelpers = new Mongo.Collection('datahelpers');

DataHelpers.allow({
    insert(userId, thietBi) {
        return true;
        // return userId && thietBi.owner === userId;
    },
    update(userId, thietBi, fields, modifier) {
        return true;
        // return userId && thietBi.owner === userId;
    },
    remove(userId, thietBi) {
        return true;
        // return userId && thietBi.owner === userId;
    }
});