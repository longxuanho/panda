import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './tbisDetailsUpdate.html';
import { ThietBis } from '../../../../api/thietbis/tbis';
import { name as TbisDetailsUpdateTongQuanTab } from '../tbisDetailsUpdateTongQuanTab/tbisDetailsUpdateTongQuanTab';
// import { name as TbisDetailsUtilsBar } from '../tbisDetailsUtilsBar/tbisDetailsUtilsBar';
// import { name as TbisDetailsUpdateHoSoView } from '../tbisDetailsViewHoSoView/tbisDetailsViewHoSoView';
// import { name as TbisDetailsUpdateFabMenu } from '../tbisDetailsViewFabMenu/tbisDetailsViewFabMenu'

class TbisDetailsUpdate {
    constructor($stateParams, $scope, $reactive, $mdMedia) {
        'ngInject';

        $reactive(this).attach($scope);

        this.$mdMedia = $mdMedia;
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
    TbisDetailsUpdateTongQuanTab
    // TbisDetailsUtilsBar,
    // TbisDetailsUpdateHoSoView,
    // TbisDetailsUpdateFabMenu
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsUpdate
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