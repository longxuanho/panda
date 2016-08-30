import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsDarkZoneTab.html';

import { name as TbisDataService } from '../../../services/thietbis/tbisDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class TbisDetailsDarkZoneTab {
    constructor(tbisDataService, notificationService, $mdToast, $stateParams, $state, $timeout) {
        'ngInject';

        this.tbisDataService = tbisDataService;
        this.notificationService = notificationService;
        this.$mdToast = $mdToast;
        this.$state = $state;
        this.$timeout = $timeout;

        // id của thiết bị được chọn sẽ được check với thietbiId trong DataService để đảm bảo gỡ bỏ đúng đối tượng
        this.selectedThietBiId = $stateParams.thietbiId;

        console.log('this.selectedThietBiId, ', this.selectedThietBiId,)
    }

    remove() {
        this.$mdToast.show({
            hideDelay: 5000,
            position : 'top right',
            controller: ($scope) => {
                'ngInject';
                $scope.yes = () => {
                    this.tbisDataService.remove(this.selectedThietBiId).then(() => {
                        this.notificationService.info('Thiết bị được chọn đã được gỡ bỏ khỏi hệ thống.', 'Gỡ bỏ thành công');
                        this.done();
                        this.$timeout(() => {
                            // Khi chuyển tới route tbisList cũng đồng nghĩa việc reset selectedThietBi trong DataService về {}
                            this.$state.go('tbisList');
                        }, 1000);
                    }).catch((err) => {
                        this.notificationService.error(err.message, 'Gỡ bỏ thất bại');
                    });
                    this.$mdToast.hide();
                };
                $scope.no = () => {
                    this.$mdToast.hide();
                };
            },
            template : '<md-toast><span class="md-toast-text" flex>Bạn chắc chắn gỡ bỏ thiết bị này?<md-button class="md-highlight" ng-click="yes()">OK, tiếp tục!</md-button><md-button ng-click="no()">Không</md-button></span></md-toast>'
        });
    }
}

const name = 'tbisDetailsDarkZoneTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataService,
    NotificationService
]).component(name, {
    template,
    bindings: {
        done: '&'
    },
    controllerAs: name,
    controller: TbisDetailsDarkZoneTab
});