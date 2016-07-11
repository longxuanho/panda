import angular from 'angular';
import angularMeteor from 'angular-meteor';

class NotificationService {

    constructor() {
    }

    success(message, title, optionsOverride) {
        toastr.success(message, title, optionsOverride);
    }

    error(message, title, optionsOverride) {
        toastr.error(message, title, optionsOverride);
    }

    info(message, title, optionsOverride) {
        toastr.info(message, title, optionsOverride);
    }

    warning(message, title, optionsOverride) {
        toastr.warning(message, title, optionsOverride);
    }

}

const name = 'notificationService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, NotificationService);