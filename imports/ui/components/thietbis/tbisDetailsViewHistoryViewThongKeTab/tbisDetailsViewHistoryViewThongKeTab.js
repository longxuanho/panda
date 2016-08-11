import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewThongKeTab.html';

import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';
import { name as TbisDetailsViewHistoryViewDurationToolbar } from '../tbisDetailsViewHistoryViewDurationToolbar/tbisDetailsViewHistoryViewDurationToolbar';


class TbisDetailsViewHistoryViewThongKeTab {
    constructor($scope, userLocalSettingsService) {
        'ngInject';

        let vm = this;


        vm.durationToolbarOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisDetails').modules.tbisHistories.durationToolbar;
        $scope.$watch(() => this.isDurationSelectByUser, (newVal) => {
            vm.durationToolbarOptions.mode = (newVal) ? 'selectByUser' : 'default';
        });

        vm.thongKeKendoGridOptions = {
            dataSource: {
                data: [
                    { nhom: "Sửa chữa nhỏ", loai: "Đột xuất", duration: 3.2, luotsCount: 5 },
                    { nhom: "Sửa chữa nhỏ", loai: "Kế hoạch", duration: 2.1, luotsCount: 1 },
                    { nhom: "Sửa chữa lớn", duration: 2.1, luotsCount: 1 },
                    { nhom: "Sửa chữa cụm", duration: 0, luotsCount: 0 },
                    { nhom: "Bảo dưỡng", duration: 0, luotsCount: 0 },
                    { nhom: "Đại tu", duration: 3.1, luotsCount: 1 },
                ],
                group: {
                    field: "nhom",
                    aggregates: [
                        {
                            field: "duration",
                            aggregate: "sum"
                        }
                    ],
                    dir: "desc"
                },
            },
            groupable: false,
            dataBound: (e) => {
                vm.thongKeGrid = vm.thongKeGrid || $('#thongKeGrid').data("kendoGrid");
                let allMasterGroups = vm.thongKeGrid.tbody.find('tr.k-grouping-row').not(':first');
                for (var i = 0; i < allMasterGroups.length; i++) {
                    vm.thongKeGrid.collapseGroup(allMasterGroups.eq(i));
                }
            },
            columns: [{
                field: "nhom",
                sortable: true,
                hidden: true,
                groupHeaderTemplate: (e) => {
                    return `${e.value}: ${Math.round(e.aggregates.duration.sum * 100)/100} giờ`;
                }
            }, {
                field: "loai",
                title: "Loại"
            }, {
                field: "luotsCount",
                title: "Số lượt",
                attributes: {
                    "class": "table-cell",
                    style: "text-align: center;"
                },
                headerAttributes: {
                    "class": "table-header-cell",
                    style: "text-align: center;"
                }
            }, {
                field: "duration",
                title: "Thời gian",
                attributes: {
                    "class": "table-cell",
                    style: "text-align: center;"
                },
                headerAttributes: {
                    "class": "table-header-cell",
                    style: "text-align: center;"
                }
            }]
        }
    }
}

const name = 'tbisDetailsViewHistoryViewThongKeTab';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService,
    TbisDetailsViewHistoryViewDurationToolbar,
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewThongKeTab
});