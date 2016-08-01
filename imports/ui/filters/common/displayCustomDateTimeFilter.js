import angular from 'angular';

import moment from 'moment';

const name = 'displayCustomDateTimeFilter';


function DisplayCustomDateTimeFilter(time, format) {
    if (!time) {
        return '';
    }

    return moment(time).format(format);
}

// create a module
export default angular.module(name, [])
    .filter(name, () => {
        return DisplayCustomDateTimeFilter;
    });