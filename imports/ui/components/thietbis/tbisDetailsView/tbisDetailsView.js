import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './tbisDetailsView.html';

import { name as TbisDetailsUtilsBar } from '../tbisDetailsUtilsBar/tbisDetailsUtilsBar';
import { name as TbisDetailsViewHoSoView } from '../tbisDetailsViewHoSoView/tbisDetailsViewHoSoView';
import { name as TbisDetailsViewReportView } from '../tbisDetailsViewReportView/tbisDetailsViewReportView';
import { name as TbisDetailsViewHistoryView } from '../tbisDetailsViewHistoryView/tbisDetailsViewHistoryView';

import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisDetailsView {
    constructor($stateParams, $scope, $reactive, tbisDataService, userLocalSettingsService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.thietbiId = $stateParams.thietbiId;
        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails');
        this.selectedThietBi = tbisDataService.getSelectedThietBi();

        this.subscribe('thietbis-details', () => [
            this.getReactively('thietbiId')
        ]);

        this.subscribe('users');

        this.helpers({
            thietbi() {
                // Dùng cho phần update với user có quyền hạn
                tbisDataService.setSelectedThietBi($stateParams.thietbiId);

                return null;
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

const name = 'tbisDetailsView';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    TbisDetailsUtilsBar,
    TbisDetailsViewHoSoView,
    TbisDetailsViewReportView,
    TbisDetailsViewHistoryView,
    TbisDataService,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsView
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('tbisDetailsView', {
        url: '/quan-ly/thiet-bi/:thietbiId',
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