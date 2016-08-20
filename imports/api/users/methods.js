import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';

export function updateSelectedUserProfile(selectedUserId, profile) {

    // Validate Admin User Right here...
    if (!this.userId)
        throw new Meteor.Error(400, 'Bạn phải đăng nhập để thực hiện chức năng này!');
    if (!Roles.userIsInRole(this.userId, 'admin', 'sky-project'))
        throw new Meteor.Error(400, 'Bạn không đủ quyền hạn để thực hiện chức năng này!');

    check(selectedUserId, String);
    check(profile, Object);

    Meteor.users.update({_id: selectedUserId}, {
        $set: {
            'profile.name': profile.name,
            'profile.bien_che': profile.bien_che
        }
    });
}


export function retrieveSelectedUserRoles(selectedUserId) {

    // Validate Admin User Right here...
    if (!this.userId)
        throw new Meteor.Error(400, 'Bạn phải đăng nhập để thực hiện chức năng này!');
    if (!Roles.userIsInRole(this.userId, 'admin', 'sky-project'))
        throw new Meteor.Error(400, 'Bạn không đủ quyền hạn để thực hiện chức năng này!');

    check(selectedUserId, String);

    return Meteor.users.findOne({_id: selectedUserId}, { fields: { roles: 1 }}).roles;
}


export function updateSelectedUserRoles(selectedUserId, roles) {

    // Validate Admin User Right here...
    if (!this.userId)
        throw new Meteor.Error(400, 'Bạn phải đăng nhập để thực hiện chức năng này!');
    if (!Roles.userIsInRole(this.userId, 'admin', 'sky-project'))
        throw new Meteor.Error(400, 'Bạn không đủ quyền hạn để thực hiện chức năng này!');

    check(selectedUserId, String);
    check(roles, Object);

    if (_.isArray(roles.rights))
        Roles.setUserRoles(selectedUserId, roles.rights, 'rights');
    if (_.isArray(roles.zones))
        Roles.setUserRoles(selectedUserId, roles.zones, 'zones');
    if (_.isArray(roles.assets))
        Roles.setUserRoles(selectedUserId, roles.assets, 'assets');
    if (_.isArray(roles.donvies))
        Roles.setUserRoles(selectedUserId, roles.donvies, 'donvies');
}

export function updateSelectedUserPhanQuyenDesc(selectedUserId, phanQuyenDesc) {

    // Validate Admin User Right here...
    if (!this.userId)
        throw new Meteor.Error(400, 'Bạn phải đăng nhập để thực hiện chức năng này!');
    if (!Roles.userIsInRole(this.userId, 'admin', 'sky-project'))
        throw new Meteor.Error(400, 'Bạn không đủ quyền hạn để thực hiện chức năng này!');

    check(selectedUserId, String);
    check(phanQuyenDesc, Array);

    Meteor.users.update({_id: selectedUserId}, {
        $set: {
            'profile.phan_quyen_desc': phanQuyenDesc
        }
    });

}


Meteor.methods({
    updateSelectedUserProfile,
    retrieveSelectedUserRoles,
    updateSelectedUserRoles,
    updateSelectedUserPhanQuyenDesc
});