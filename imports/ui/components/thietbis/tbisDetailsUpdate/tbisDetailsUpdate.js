import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './tbisDetailsUpdate.html';
import { ThietBis } from '../../../../api/thietbis/tbis';
// import { name as TbisDetailsUtilsBar } from '../tbisDetailsUtilsBar/tbisDetailsUtilsBar';
// import { name as TbisDetailsUpdtateHoSoView } from '../tbisDetailsViewHoSoView/tbisDetailsViewHoSoView';
// import { name as TbisDetailsUpdtateFabMenu } from '../tbisDetailsViewFabMenu/tbisDetailsViewFabMenu'

class TbisDetailsUpdtate {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.thietbiId = $stateParams.thietbiId;

        this.subscribe('thietbis');
        // this.subscribe('users');

        this.helpers({
            thietbi() {
                return ThietBis.findOne({
                    _id: $stateParams.thietbiId
                });
            },
            isLoggedIn() {
                return !!Meteor.userId();
            }
        });
    }

    $postLink() {
        $('#sky-navigation').css({display: 'none'});
    }

    $onDestroy() {
        $('#sky-navigation').css({display: 'block'});
    }

}

const name = 'tbisDetailsUpdate';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    // TbisDetailsUtilsBar,
    // TbisDetailsUpdtateHoSoView,
    // TbisDetailsUpdtateFabMenu
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsUpdtate
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('tbisDetailsUpdate', {
        url: '/thiet-bi/cap-nhat/:thietbiId',
        template: '<tbis-details-update></tbis-details-update>',
        resolve: {
            currentUser($q) {
                if (Meteor.userId() === null) {
                    return $q.reject('AUTH_REQUIRED');
                } else {
                    return $q.resolve();
                }
            }
        }
    });
}