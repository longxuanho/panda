import angular from 'angular';

import moment from 'moment';

const name = 'displayRelativeTimeFilter';


function DisplayRelativeTimeFilter(time) {
    if (!time) {
        return '';
    }

    return moment(time).fromNow();
}

// create a module
export default angular.module(name, [])
    .filter(name, () => {
        return DisplayRelativeTimeFilter;
    });