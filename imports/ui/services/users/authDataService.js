import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import _ from 'underscore';



class AuthDataService {

    constructor($q) {
        'ngInject';
        this.$q = $q;
    }

    login(credentials) {
        let defer = this.$q.defer();
        Meteor.loginWithPassword(credentials.email, credentials.password,
            (error) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve();
                }
            }
        );
        return defer.promise;
    }

    register(credentials) {
        let defer = this.$q.defer();
        Accounts.createUser(angular.copy(credentials),
            (error) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve();
                }
            }
        );
        return defer.promise;
    }

    forgotPassword(credentials) {
        let defer = this.$q.defer();
        Accounts.forgotPassword(credentials, (error) => {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve();
            }
        });
        return defer.promise;
    }

    resetPassword(credentials) {
        let defer = this.$q.defer();
        Accounts.resetPassword(credentials.token, credentials.password, (error) => {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve();
            }
        });
        return defer.promise;
    }

    addNew(user) {
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

const name = 'authDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, AuthDataService);
