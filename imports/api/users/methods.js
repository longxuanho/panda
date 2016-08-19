import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export function updateSelectedUserProfile(selectedUserId, profile) {

    check(selectedUserId, String);
    check(profile, Object);

    if (!this.userId) {
        throw new Meteor.Error(400, 'Bạn phải đăng nhập để thực hiện chức năng này!');
    }

    // Validate Admin User Right here...

    if (!selectedUserId) {
        throw new Meteor.Error(400, 'Người dùng không tồn tại!');
    }

    Meteor.users.update({_id: selectedUserId}, {
        $set: {
            'profile.name': profile.name,
            'profile.bien_che': profile.bien_che
        }
    });
}

export function updateSelectedUserRoles(selectedUserId, roles) {

    check(selectedUserId, String);
    check(roles, Array);

    if (!this.userId) {
        throw new Meteor.Error(400, 'Bạn phải đăng nhập để thực hiện chức năng này!');
    }

    // Validate Admin User Right here...

    if (!selectedUserId) {
        throw new Meteor.Error(400, 'Người dùng không tồn tại!');
    }

    // Meteor.users.update({_id: selectedUserId}, {
    //     $set: {
    //         'profile.name': profile.name,
    //         'profile.bien_che': profile.bien_che
    //     }
    // });
}



Meteor.methods({
    updateSelectedUserProfile,
    updateSelectedUserRoles
});