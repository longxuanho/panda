import angular from 'angular';

const name = 'displayNameFilter';

function DisplayNameFilter(user) {
    if (!user) {
        return '';
    }

    // Display user in metadata
    if (user.name || user.email)
        return user.name || user.email;

    if (user.profile && user.profile.name) {
        return user.profile.name;
    }

    if (user.emails) {
        return user.emails[0].address;
    }

    return user;
}

// create a module
export default angular.module(name, [])
    .filter(name, () => {
        return DisplayNameFilter;
    });