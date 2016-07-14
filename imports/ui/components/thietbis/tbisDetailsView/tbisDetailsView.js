import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './tbisDetailsView.html';
import { ThietBis } from '../../../../api/thietbis/tbis';
import { name as TbisDetailsUtilsBar } from '../tbisDetailsUtilsBar/tbisDetailsUtilsBar';
import { name as TbisDetailsViewHoSoView } from '../tbisDetailsViewHoSoView/tbisDetailsViewHoSoView';
import { name as TbisDetailsViewFabMenu } from '../tbisDetailsViewFabMenu/tbisDetailsViewFabMenu'

class TbisDetailsView {
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

    // save() {
    //     Parties.update({
    //         _id: this.party._id
    //     }, {
    //         $set: {
    //             name: this.party.name,
    //             description: this.party.description,
    //             public: this.party.public,
    //             location: this.party.location
    //         }
    //     }, (error) => {
    //         if (error) {
    //             console.log('Oops, unable to update the party...');
    //         } else {
    //             console.log('Done!');
    //         }
    //     });
    // }
    //
    // canInvite() {
    //     if (!this.party) {
    //         return false;
    //     }
    //
    //     return !this.party.public && this.party.owner === Meteor.userId();
    // }
}

const name = 'tbisDetailsView';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    TbisDetailsUtilsBar,
    TbisDetailsViewHoSoView,
    TbisDetailsViewFabMenu
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsView
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('tbisDetailsView', {
        url: '/thiet-bi/chi-tiet/:thietbiId',
        template: '<tbis-details-view></tbis-details-view>',
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