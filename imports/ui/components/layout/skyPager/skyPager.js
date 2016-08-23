import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import _ from 'underscore';

import template from './skyPager.html';

class SkyPager {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.skyPagerOptions = {
            dataSource: new kendo.data.DataSource({
                data: [],
                pageSize: 10
            })
        };

        $scope.$watch(('skyPager.subscribeOptions.subscribe.total'), (newVal) => {
           if (!newVal)
                this.resetPager();
           else
               this.resolvePager(newVal);
        });

        $scope.$watch(('skyPager.subscribeOptions.subscribe.page'), (newVal) => {
            this.skyPagerOptions.dataSource.page(newVal);
        });

        $scope.$watch(('skyPager.subscribeOptions.subscribe.pageSize'), (newVal) => {
            this.skyPagerOptions.dataSource.pageSize(newVal);
        });

    }

    onPageChange(event) {
        this.subscribeOptions.subscribe.page = parseInt(event.index);
    }

    resolvePager(totalItem) {
        let newRange = _.range(1, totalItem);
        this.skyPagerOptions.dataSource.data(newRange);
    }

    resetPager() {
        this.skyPagerOptions.dataSource.data([]);
        this.skyPagerOptions.dataSource.page(1);
        this.skyPagerOptions.dataSource.pageSize(10);
    }
}

const name = 'skyPager';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        template,
        controllerAs: name,
        bindings: {
            subscribeOptions: '='
        },
        controller: SkyPager
    });
