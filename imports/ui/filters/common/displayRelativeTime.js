import angular from 'angular';

import moment from 'moment';

const name = 'displayRelativeTime';


function DisplayRelativeTime(time) {
    if (!time) {
        return '';
    }

    return moment(time).fromNow();
}

// create a module
export default angular.module(name, [])
    .filter(name, () => {
        return DisplayRelativeTime;
    });