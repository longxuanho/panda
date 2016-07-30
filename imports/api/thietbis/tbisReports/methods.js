import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { TbisReports } from './collection';

export function updateSelectedTbisReportComment(tbisReportId, commentId, newNoiDungObj) {
    check(tbisReportId, String);
    check(commentId, String);
    check(newNoiDungObj, Object);

    TbisReports.update({
        _id: tbisReportId,
        'comments._id': commentId
    }, {
        $set: {
            'comments.$.noi_dung': newNoiDungObj
        }
    }, (error) => {
        if (error) {
            throw new Meteor.Error(400, error.message);
        }
    });
}

Meteor.methods({
    updateSelectedTbisReportComment
});