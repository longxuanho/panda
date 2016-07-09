import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisSearchForm.html';
import { name as TbisListPageSettingsService } from '../../../services/thietbis/tbisListPageSettingsService';

class TbisSearchForm {
    constructor(tbisListPageSettingsService) {
        'ngInject';

        this.settings = tbisListPageSettingsService.getPageSettings();
        this.searchText = '';
    }

    submit() {
        // Click để tìm kiếm: nếu chưa có text trong ô tìm kiếm -> confirm. Nếu đã có text -> reset.
        if (this.settings.searchText.length) {
            this.searchText = '';
            this.settings.searchText = '';
        } else
            this.settings.searchText = this.searchText;
    }

    reset() {
        console.log('reset Search!');
    }
}

const name = 'tbisSearchForm';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisListPageSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisSearchForm
});