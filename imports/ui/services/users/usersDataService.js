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
            chuc_danh: '',
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

    validateUserProfile(profile) {
        if (!profile.name)
            throw Error('Chưa có thông tin về tên hiển thị');
        if (!profile.ho_so.ten)
            throw Error('Chưa có thông tin về tên người dùng');
        if (!profile.ho_so.ho_ten_dem)
            throw Error('Chưa có thông tin về họ tên đệm người dùng');
        if (!profile.bien_che.chuc_danh)
            throw Error('Chưa có thông tin về chức danh người dùng');
        if (!profile.bien_che.cong_ty || !profile.bien_che.don_vi)
            throw Error('Chưa có thông tin về biên chế người dùng');
    }

    addNew(user) {
    }

    updateUserProfile(data) {
        // let defer = this.$q.defer();
        // ThietBis.update({
        //     _id: data._id
        // }, {
        //     $set: {
        //     }
        // }, (error) => {
        //     if (error)
        //         defer.reject(error);
        //     else
        //         defer.resolve();
        // });
        // return defer.promise;
    }

    updateUserAvatar(data) {
        // let defer = this.$q.defer();
        // ThietBis.update({
        //     _id: data._id
        // }, {
        //     $set: {
        //         thong_so_ky_thuat: data.thong_so_ky_thuat,
        //         metadata: data.metadata
        //     }
        // }, (error) => {
        //     if (error)
        //         defer.reject(error);
        //     else
        //         defer.resolve();
        // });
        // return defer.promise;
    }

    getSelectedUser() {
        return this.selectedUser;
    }

    setSelectedUser(userId) {
        this.selectedUser = this.queryOne(userId);
    }

    getSelectedThongSoKyThuatGroupBy(data) {
        if (data)
            return _.groupBy(data, 'nhom');
    }
}

const name = 'usersDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, UsersDataService);
