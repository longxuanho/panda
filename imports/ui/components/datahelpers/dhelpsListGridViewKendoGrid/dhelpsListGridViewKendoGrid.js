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
    constructor($reactive, $scope, subscribeDataService, kendoGridDataService, dhelpsDataService, notificationService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.subscribeOptions = subscribeDataService.getCurrentSubscribeOptions();
        this.kendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();

        this.refreshToken = 'default_token';


        initKendoGridOptions(this.kendoGridOptions.options, this.subscribeOptions.subscribe);

        this.helpers({
            datahelpers() {
                let fetchData = dhelpsDataService.query();
                try {
                    this.kendoGridOptions.options.dataSource.data(fetchData);
                    this.reloadGridColumns();
                    this.triggerRefreshToken();
                } catch(error) {
                    notificationService.error('Các trường dữ liệu không đồng bộ. Tiến hành restart các quy trình..', 'Khởi tạo thông tin lỗi')
                    this.reloadGridColumns();
                    this.triggerRefreshToken();
                    this.kendoGridOptions.options.dataSource.data(fetchData);
                }

                return null;
            }
        });
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
                    field: "dataSource.hang_san_xuat.ten",
                    title: "Hãng sản xuất",
                    width: "240px"
                },  {
                    field: "dataSource.hang_san_xuat.ma",
                    title: "Mã hãng",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Tên Model",
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
                    field: "dataSource.nhom.ten",
                    title: "Nhóm TB",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Chủng loại TB",
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
            "loais": [
                {
                    field: "dataSource.chung_loai.ten",
                    title: "Chủng loại TB",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Loại TB",
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
            "donvis": [
                {
                    field: "dataSource.ma",
                    title: "Mã đơn vị",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Tên đơn vị",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.nhom",
                    title: "Nhóm tham chiếu",
                    width: "240px"
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "doivanhanhs": [
                {
                    field: "dataSource.don_vi.ma",
                    title: "Mã Đơn vị",
                    width: "240px"
                }, {
                    field: "dataSource.don_vi.ten",
                    title: "Đơn vị",
                    width: "240px"
                }, {
                    field: "dataSource.ma",
                    title: "Mã đội vận hành",
                    width: "240px",
                    groupable: false
                }, {
                    field: "dataSource.ten",
                    title: "Tên đội vận hành",
                    width: "240px",
                    groupable: false
                }, {
                    field: "_id",
                    title: "Mã tham chiếu",
                    width: "240px",
                    groupable: false
                }
            ],
            "tags": [
                {
                    field: "dataSource.nhom.ten",
                    title: "Nhóm tham chiếu",
                    width: "240px"
                }, {
                    field: "dataSource.ten",
                    title: "Tên Tag",
                    width: "240px"
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