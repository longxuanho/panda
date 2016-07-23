import angular from 'angular';
import angularMeteor from 'angular-meteor';

class CurrentUserService {

    constructor() {
        this.currentUser = {};
    }

    setCurrentUser(user) {
        this.currentUser = angular.copy(user);
    }

    getCurrentUser() {
        return this.currentUser;
    }

}

const name = 'currentUserService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, CurrentUserService);

