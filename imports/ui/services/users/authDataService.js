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

    updateCurrentUserContactInfo(data) {
        let defer = this.$q.defer();
        Meteor.users.update({ _id: Meteor.userId() },
            {
                $set: {
                    'profile.lien_he.dien_thoai': data.dien_thoai,
                    'profile.lien_he.email': data.email
                }
            }, (error) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve();
                }
            }
        );
        return defer.promise;
    }

    changeCurrentUserPassword(credentials) {
        let defer = this.$q.defer();
        Accounts.changePassword(credentials.oldPassword, credentials.newPassword, (error) => {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve();
            }
        });
        return defer.promise;
    }

    updateCurrentUserAvatar(userAvatar) {
        let defer = this.$q.defer();
        Meteor.users.update({ _id: Meteor.userId() },
            {
                $set: {
                    'profile.avatar': userAvatar
                }
            }, (error) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve();
                }
            }
        );
        return defer.promise;
    }

    logOutOtherClients() {
        let defer = this.$q.defer();
        Meteor.logoutOtherClients((error) => {
                if (error) {
                    defer.reject(error);
                } else {
                    defer.resolve();
                }
            }
        );
        return defer.promise;
    }

}

const name = 'authDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, AuthDataService);
