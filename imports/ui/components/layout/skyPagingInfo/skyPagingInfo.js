import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './skyPagingInfo.html';

class SkyPagingInfo {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.liveOptions = {
            from: 0,
            to: 0
        };

        $scope.$watch(('skyPagingInfo.subscribeOptions.subscribe.page'), (newVal) => {
            this.resolvePagingInfo(newVal, this.subscribeOptions.subscribe.pageSize, this.subscribeOptions.subscribe.total);
        });

        $scope.$watch(('skyPagingInfo.subscribeOptions.subscribe.pageSize'), (newVal) => {
            this.resolvePagingInfo(this.subscribeOptions.subscribe.page, newVal, this.subscribeOptions.subscribe.total);
        });

        $scope.$watch(('skyPagingInfo.subscribeOptions.subscribe.total'), (newVal) => {
            this.resolvePagingInfo(this.subscribeOptions.subscribe.page, this.subscribeOptions.subscribe.pageSize, newVal);
        });
    }

    resolvePagingInfo(page, pageSize, total) {
        this.liveOptions.from = (total) ? pageSize * (page - 1) + 1 : 0;
        this.liveOptions.to = pageSize * page;

        this.liveOptions.to = (this.liveOptions.to < total) ? this.liveOptions.to : total;
    }
}

const name = 'skyPagingInfo';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        template,
        controllerAs: name,
        bindings: {
            subscribeOptions: '='
        },
        controller: SkyPagingInfo
    });
