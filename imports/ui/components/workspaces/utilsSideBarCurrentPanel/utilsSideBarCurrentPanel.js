import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './utilsSideBarCurrentPanel.html';

import { name as WorkspacesDataService } from '../../../services/workspaces/workspacesDataService';
import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';

class UtilsSideBarCurrentPanel {
    constructor($reactive, $scope, workspacesDataService, subscribeDataService) {
        'ngInject';
        $reactive(this).attach($scope);

        this.workspacesDataService = workspacesDataService;

        this.currentUtilsSideBarOptions = workspacesDataService.getCurrentUtilsSideBarOptions();
        this.currentSubscribeOptions = subscribeDataService.getCurrentSubscribeOptions();

        this.liveOptions = {
            searchText: ''
        };

        $scope.$watch('utilsSideBarCurrentPanel.currentSubscribeOptions.subscribe.searchText', (newVal) => {
            this.liveOptions.searchText = newVal;
        });

    }

    searchFormSubmit() {
        // Click để tìm kiếm: nếu chưa có text trong ô tìm kiếm -> confirm. Nếu đã có text -> reset.
        if (this.currentSubscribeOptions.subscribe.searchText) {
            this.currentSubscribeOptions.subscribe.searchText = '';
            this.liveOptions.searchText = '';
        } else {
            this.currentSubscribeOptions.subscribe.searchText = this.liveOptions.searchText;
        }
    }
}

const name = 'utilsSideBarCurrentPanel';

// create a module
export default angular.module(name, [
    angularMeteor,
    WorkspacesDataService,
    SubscribeDataService
]).component(name, {
    template,
    controllerAs: name,
    controller: UtilsSideBarCurrentPanel
});