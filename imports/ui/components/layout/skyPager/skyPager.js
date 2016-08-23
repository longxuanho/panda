import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import template from './skyPager.html';

class SkyPager {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.skyPagerOptions = {
            dataSource: new kendo.data.DataSource({
                data: [],
                pageSize: 5
            }),
            info: true
        };

        $scope.$watch(('skyPager.subscribeOptions.subscribe.total'), (newVal) => {
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
        let newRange = _.range(0, totalItem);
        this.skyPagerOptions.dataSource.data(newRange);
    }
}

const name = 'skyPager';

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
        controller: SkyPager
    });
