import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewOpenTab.html';
import modalTemplate from './tbisDetailsViewReportViewOpenTabModal.html';

import { name as TbisReportsDataService } from '../../../services/thietbis/tbisReportsDataService';
import { name as TbisDetailsViewReportViewSearchTool } from '../tbisDetailsViewReportViewSearchTool/tbisDetailsViewReportViewSearchTool';
import { name as TbisDetailsViewReportViewIconDisplay } from '../tbisDetailsViewReportViewIconDisplay/tbisDetailsViewReportViewIconDisplay';

import { name as TbisDetailsViewReportViewOpenTabDetails } from '../tbisDetailsViewReportViewOpenTabDetails/tbisDetailsViewReportViewOpenTabDetails';
import { name as DisplayNameFilter } from '../../../filters/common/displayNameFilter';
import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';


class TbisDetailsViewReportViewOpenTab {
    constructor($reactive, $scope, $mdDialog, $mdMedia, tbisReportsDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        // this.tbisReports = tbisReportsDataService.query();
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
        this.tbisReportDataService = tbisReportsDataService;

        this.subscribe('tbisreports');

        this.helpers({
            tbisReports() {
                return tbisReportsDataService.query();
            },
            // thietbisCount() {
            //     return Counts.get('numberOfThietBis');
            // },
            // isLoggedIn() {
            //     return !!Meteor.userId();
            // },
            // currentUserId() {
            //     return Meteor.userId();
            // }
        });
    }

    open(event, tbisReportId) {
        this.tbisReportDataService.setSelectedTbisReport(tbisReportId);
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, tbisReportsDataService) {
                'ngInject';
                this.thietbiId = tbisDataService.getSelectedThietBi().ma_thiet_bi.keyId;
                this.isModalOpen = true;

                this.close = () => {
                    this.isModalOpen = false;
                    tbisReportsDataService.clearSelectedTbisReport();
                    $mdDialog.hide();
                };
            },
            controllerAs: 'tbisDetailsViewReportViewOpenTabModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsViewReportViewOpenTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDetailsViewReportViewSearchTool,
    TbisDetailsViewReportViewIconDisplay,
    TbisDetailsViewReportViewOpenTabDetails,
    TbisReportsDataService,
    TbisDataService,
    DisplayNameFilter,
    DisplayRelativeTimeFilter
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewOpenTab
});