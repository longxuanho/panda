import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Random } from 'meteor/random';

import template from './dhelpsListGridViewKendoGrid.html';

import _ from 'underscore';

import { name as SubscribeDataService } from '../../../services/workspaces/subscribeDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';
import { name as DhelpsDataService } from '../../../services/datahelpers/dhelpsDataService';
import { name as NotificationService } from '../../../services/common/notificationService';

class DhelpsListGridViewKendoGrid {
    constructor($reactive, $scope, subscribeDataService, kendoGridDataService, dhelpsDataService, notificationService, $timeout) {
        'ngInject';

        $reactive(this).attach($scope);

        this.$timeout = $timeout;
        this.dhelpsDataService = dhelpsDataService;

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.kendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();

        this.refreshToken = 'default_token';    // Token dùng để trigger kendo refresh qua k-rebind

        this.selectedDataHelper = dhelpsDataService.getSelectedDataHelper();


        initKendoGridOptions(this.kendoGridOptions.options, this.subscribeOptions.subscribe);

        this.helpers({
            datahelpers() {
                let fetchData = dhelpsDataService.query();
                try {
                    if (fetchData.length)
                        this.kendoGridOptions.options.dataSource.data(fetchData);
                } catch(error) {
                    notificationService.error('Các trường dữ liệu không đồng bộ. Tiến hành restart các quy trình..', 'Khởi tạo thông tin lỗi');
                }
                return null;
            }
        });

        $scope.$watch('dhelpsListGridViewKendoGrid.subscribeOptions.subscribe.subject', (newVal) => {
            if (newVal) {
                this.kendoGridOptions.options.dataSource.group([]);
                this.kendoGridOptions.options.dataSource.page(1);
                this.kendoGridOptions.options.dataSource.data([]);
                this.reloadGridColumns();
                this.triggerRefreshToken();
            }
        });
    }

    onGridSelect(event) {
        // Hàm được gọi khi user chọn một row trong grid
        let selecteRow = this.kendoGridOptions.gridRef.select();
        if (selecteRow) {
            let selectedDataItem = this.kendoGridOptions.gridRef.dataItem(selecteRow);

            if (selectedDataItem && selectedDataItem._id) {
                if (selectedDataItem._id === this.selectedDataHelper.dataHelper._id) {
                    this.kendoGridOptions.gridRef.clearSelection();
                    this.dhelpsDataService.setSelectedDataHelper(null);
                } else
                    this.dhelpsDataService.setSelectedDataHelper(selectedDataItem._id);
            }
        }
    }

    onGridDataBound(event) {
        // Preserve selected row after bounding to data
        let selectedId = this.selectedDataHelper.dataHelper._id;
        if (selectedId) {
            let selecteddataItem = this.kendoGridOptions.options.dataSource.get(selectedId);
            if (selecteddataItem && selecteddataItem.uid) {
                this.kendoGridOptions.gridRef.select(`tr[data-uid='${selecteddataItem.uid}']`);
            }
        }
    }

    reloadGridColumns() {
        this.kendoGridOptions.options.columns = solveKendoGridColumnsBasedOnSubject(this.subscribeOptions.subscribe.category, this.subscribeOptions.subscribe.subject);
    }

    triggerRefreshToken() {
        this.refreshToken = Random.id();
    }
}

const name = 'dhelpsListGridViewKendoGrid';

// create a module
export default angular.module(name, [
    angularMeteor,
    SubscribeDataService,
    DhelpsDataService,
    KendoGridDataService,
    NotificationService
]).component(name, {
    template,
    controllerAs: name,
    controller: DhelpsListGridViewKendoGrid
});

function initKendoGridOptions(gridOptions, subscribeOptions) {
    initKendoGridColumns(gridOptions, subscribeOptions);
    initKendoDataSource(gridOptions);
    initKendoGridFilterMenu(gridOptions);
}

function initKendoDataSource(gridOptions) {
    gridOptions.dataSource = new kendo.data.DataSource({
        data: [],
        pageSize: 10,
        schema: {
            model: {
                id: "_id",
                fields: {
                    'dataSource.order': {
                        type: "number"
                    }
                }
            }
        }
    });
}

function initKendoGridColumns(gridOptions, subscribeOptions) {
    gridOptions.columns = solveKendoGridColumnsBasedOnSubject(subscribeOptions.category,subscribeOptions.subject);
}

function initKendoGridFilterMenu(gridOptions) {
    gridOptions.filterMenuInit = (e) => {
        let defaultColumnsWithContainsOperator = ['dataSource.ten',
            'dataSource.ma', 'dataSource.nhom', 'dataSource.hang_san_xuat.ten', 'dataSource.hang_san_xuat.ma',
            'dataSource.nhom.ten', 'dataSource.chung_loai.ten', 'dataSource.don_vi.ten', 'dataSource.don_vi.ma'];

        if (_.contains(defaultColumnsWithContainsOperator, e.field)) {
            let firstValueDropDown = e.container.find("select:eq(0)").data("kendoDropDownList");
            firstValueDropDown.value("contains");
            firstValueDropDown.trigger("change");
        }
    }
}

function solveKendoGridColumnsBasedOnSubject(module, subject) {
    let db = {
        "commons": {
            "quocgias": [
                {
                    field: "dataSource.ten",
                    title: "Tên quốc gia",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.name",
                    title: "Country",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "donvis": [
                {
                    field: "dataSource.ten",
                    title: "Tên đơn vị",
                    width: "400px",
                    groupable: false
                }, {
                    field: "dataSource.ma",
                    title: "Mã đơn vị",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.nhom",
                    title: "Phân nhóm",
                    width: "320px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Nhóm: #= value # (#= count#)"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ]
        },
        "thietbis": {
            "khuvucs": [
                {
                    field: "dataSource.ten",
                    title: "Tên khu vực",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.ma",
                    title: "Mã khu vực",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "hangsanxuats": [
                {
                    field: "dataSource.ten",
                    title: "Hãng sản xuất",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.ma",
                    title: "Mã hãng",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "models": [
                {
                    field: "dataSource.ten",
                    title: "Tên Model",
                    width: "240px"
                }, {
                    field: "dataSource.hang_san_xuat.ten",
                    title: "Hãng sản xuất",
                    width: "240px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Hãng sản xuất: #= value # (#= count#)"
                },  {
                    field: "dataSource.hang_san_xuat.ma",
                    title: "Mã hãng",
                    width: "240px"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "vendors": [
                {
                    field: "dataSource.ten",
                    title: "Nhà phân phối",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "nhoms": [
                {
                    field: "dataSource.ten",
                    title: "Nhóm thiết bị",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.order",
                    title: "Mức ưu tiên",
                    width: "240px"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "chungloais": [
                {
                    field: "dataSource.ten",
                    title: "Chủng loại TB",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.order",
                    title: "Mức ưu tiên",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.nhom.ten",
                    title: "Nhóm TB",
                    width: "240px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Nhóm TB: #= value # (#= count#)"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "loais": [
                {
                    field: "dataSource.ten",
                    title: "Loại TB",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.order",
                    title: "Mức ưu tiên",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.chung_loai.ten",
                    title: "Chủng loại TB",
                    width: "240px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Chủng loại TB: #= value # (#= count#)"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "donvis": [
                {
                    field: "dataSource.ten",
                    title: "Tên đơn vị",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.ma",
                    title: "Mã đơn vị",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.nhom",
                    title: "Nhóm tham chiếu",
                    width: "240px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Nhóm: #= value # (#= count#)"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "doivanhanhs": [
                {
                    field: "dataSource.ten",
                    title: "Đội vận hành",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.ma",
                    title: "Mã đội",
                    width: "180px",
                    groupable: false
                }, {
                    field: "dataSource.don_vi.ma",
                    title: "Mã Đơn vị",
                    width: "180px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Mã đơn vị: #= value # (#= count#)"
                }, {
                    field: "dataSource.don_vi.ten",
                    title: "Đơn vị",
                    width: "320px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Đơn vị: #= value # (#= count#)"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "tags": [
                {
                    field: "dataSource.ten",
                    title: "Tên Tag",
                    width: "240px"
                }, {
                    field: "dataSource.nhom.ten",
                    title: "Nhóm tham chiếu",
                    width: "240px",
                    aggregates: ["count"],
                    groupHeaderTemplate: "Nhóm TB: #= value # (#= count#)"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ]
        },
        "thongsokts": {
            "nhomtskts": [
                , {
                    field: "dataSource.loai_thiet_bi",
                    title: "Loại thiết bị",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Nhóm thông số",
                    width: "240px"
                }, {
                    field: "dataSource.order",
                    title: "Mức ưu tiên",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "tentskts": [
                {
                    field: "dataSource.nhom.loai_thiet_bi",
                    title: "Loại thiết bị",
                    width: "240px"
                }, {
                    field: "dataSource.nhom.ten",
                    title: "Nhóm thông số",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Tên thông số",
                    width: "240px"
                }, {
                    field: "dataSource.order",
                    title: "Mức ưu tiên",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "donvitinhs": [
                {
                    field: "dataSource.nhom.loai_thiet_bi",
                    title: "Loại thiết bị",
                    width: "240px"
                }, {
                    field: "dataSource.nhom.ten",
                    title: "Nhóm thông số",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Đơn vị tính",
                    width: "240px"
                }, {
                    field: "dataSource.order",
                    title: "Mức ưu tiên",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ]
        }
    };
    if (db[module])
        return db[module][subject] || [];
    return [];
}