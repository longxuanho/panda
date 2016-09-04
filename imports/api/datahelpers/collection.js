import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';

export const DataHelpers = new Mongo.Collection('datahelpers');

DataHelpers.allow({
    insert(userId, doc) {
        return (Roles.userIsInRole(userId, ['admin'], 'sky-project'));
    },
    update(userId, doc, fields, modifier) {
        return (Roles.userIsInRole(userId, ['admin'], 'sky-project'));
    },
    remove(userId, doc) {
        return (Roles.userIsInRole(userId, ['admin'], 'sky-project'));
    }
});