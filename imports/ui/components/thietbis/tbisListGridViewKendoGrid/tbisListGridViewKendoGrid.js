import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListGridViewKendoGrid.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisListGridViewKendoGrid {
    constructor(userLocalSettingsService, $timeout) {
        'ngInject';

        let vm = this;
        this.$timeout = $timeout;
        this.tbisListPageOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;

        this.kendoGridDataSource = new kendo.data.DataSource({
            data: [],
            pageSize: 10,
            schema: {
            }
        });

        this.kendoGridOptions = {
            dataSource: this.kendoGridDataSource,
            groupable: true,
            sortable: true,
            pageable: {
                pageSizes: true,
                buttonCount: 5
            },
            columns: [{
                field: "ma_thiet_bi.keyId",
                title: "Mã thiết bị"
            }, {
                field: "phan_loai.nhom",
                title: "Nhóm thiết bị"
            }, {
                field: "phan_loai.chung_loai",
                title: "Chủng loại"
            }, {
                field: "phan_loai.loai",
                title: "Loại thiết bị"
            }],
            dataBound: function(e) {
            }
        }
    }

    refreshDataSource() {
        this.onReload();
        this.$timeout(() => {
            this.kendoGridDataSource.data(this.thietbis);
        }, 1000);
    }
}

const name = 'tbisListGridViewKendoGrid';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbis: '<',
        onReload: '&'
    },
    controller: TbisListGridViewKendoGrid
});