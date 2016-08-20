import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import _ from 'underscore';



class UsersDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.selectedUser = {};
    }

    query(selector, options) {
        if (!selector)
            return Meteor.users.find({}).fetch();
        if (!options)
            return Meteor.users.find(selector).fetch();
        return Meteor.users.find(selector, options).fetch();
    }

    queryOne(userId) {
        return Meteor.users.findOne({_id: userId});
    }

    initNewUserProfile(profile) {
        profile.ho_so = {
            ten: '',
            ho_ten_dem: '',
            gioi_tinh: 'Nam'
        };
        profile.bien_che = {
            cong_ty: '',
            don_vi: '',
            to: '',
            doi: '',
            ban: ''
        };
        profile.lien_he = {
            dien_thoai: '',
            email: ''
        };
    }

    querySelectedUserRoles(userId) {
        let defer = this.$q.defer();
        Meteor.call('retrieveSelectedUserRoles', userId, (error, result) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve(result);
                }
            }
        );
        return defer.promise;
    }

    updateSelectedUserRoles(userId, roles) {
        let defer = this.$q.defer();
        Meteor.call('updateSelectedUserRoles', userId, roles, (error, result) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve(result);
                }
            }
        );
        return defer.promise;
    }

    updateSelectedUserProfile(userId, profile) {
        let defer = this.$q.defer();
        Meteor.call('updateSelectedUserProfile', userId, profile, (error, result) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve(result);
                }
            }
        );
        return defer.promise;
    }

    validatePhanQuyenDesc(phanQuyenDesc) {
        if (!_.isArray(phanQuyenDesc))
            throw Error('Có lỗi trong quá trình truy vấn thông tin. Vui lòng thử lại.');
        _.each(phanQuyenDesc, (item) => {
            if (_.isEmpty(item) || !item.module || !item.tac_vu || !item.mo_ta)
                throw Error('Vui lòng điền đầy đủ các trường thông tin bắt buộc.');
        });
    }

    updateSelectedUserPhanQuyenDesc(userId, phanQuyenDesc) {
        let defer = this.$q.defer();
        Meteor.call('updateSelectedUserPhanQuyenDesc', userId, phanQuyenDesc, (error, result) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve(result);
                }
            }
        );
        return defer.promise;
    }

    getSelectedUser() {
        return this.selectedUser;
    }

    setSelectedUser(userId) {
        this.selectedUser = this.queryOne(userId);
    }

}

const name = 'usersDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, UsersDataService);
