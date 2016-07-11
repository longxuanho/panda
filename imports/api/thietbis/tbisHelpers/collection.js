import { Mongo } from 'meteor/mongo';

export const TbisHelpers = new Mongo.Collection('tbishelpers');

TbisHelpers.allow({
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