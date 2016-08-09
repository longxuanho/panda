import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewReportViewSearchTool.html';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisDetailsViewReportViewSearchTool {
    constructor(userLocalSettingsService) {
        'ngInject';
        this.searchFilterBarOptions = userLocalSettingsService.getPageSettings('tbisreports', 'tbisrepList').searchFilterBar;
        this.subscribeOptions = userLocalSettingsService.getPageSettings('tbisreports', 'tbisrepList').suscribe;
    }

    setSearchTextSubscribe() {
        this.subscribeOptions.searchText = this.searchFilterBarOptions.searchText;
    }

    setSortOrderSubscribe() {
        this.subscribeOptions.sort = {
            'metadata.thoi_gian.tao_moi.ngay_tao_string': parseInt(this.searchFilterBarOptions.sort)
        }
    }
}

const name = 'tbisDetailsViewReportViewSearchTool';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewReportViewSearchTool
});