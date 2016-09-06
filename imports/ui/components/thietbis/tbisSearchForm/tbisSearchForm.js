import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisSearchForm.html';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';

class TbisSearchForm {
    constructor($scope, subscribeDataService) {
        'ngInject';

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.searchText = '';

        $scope.$watch('tbisSearchForm.subscribeOptions.subscribe.searchText', (newVal) => {
            this.searchText = newVal;
        });

    }

    submit() {
        // Click để tìm kiếm: nếu chưa có text trong ô tìm kiếm -> confirm. Nếu đã có text -> reset.
        if (this.subscribeOptions.subscribe.searchText && (this.subscribeOptions.subscribe.searchText === this.searchText)) {
            this.reset();
        } else {
            this.subscribeOptions.subscribe.page = 1;
            this.subscribeOptions.subscribe.searchText = this.searchText;
        }

    }

    reset() {
        this.searchText = '';
        this.subscribeOptions.subscribe.searchText = '';
    }
}

const name = 'tbisSearchForm';

// create a module
export default angular.module(name, [
    angularMeteor,
    SubscribeDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisSearchForm
});