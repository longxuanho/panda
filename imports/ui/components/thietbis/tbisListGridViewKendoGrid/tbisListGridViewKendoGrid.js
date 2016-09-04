import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisListGridViewKendoGrid.html';

import _ from 'underscore';

import { name as UtilsTopBarDataService } from '../../../services/workspaces/utilsTopBarDataService';
import { name as KendoGridDataService } from '../../../services/workspaces/kendoGridDataService';

class TbisListGridViewKendoGrid {
    constructor($scope, utilsTopBarDataService, kendoGridDataService, $timeout) {
        'ngInject';

        this.$timeout = $timeout;

        this.utilsTopBarOptions = utilsTopBarDataService.getCurrentUtilsTopBarOptions();
        this.kendoGridOptions = kendoGridDataService.getCurrentKendoGridOptions();

        initKendoGridOptions(this.kendoGridOptions.options);

        $scope.$watch('tbisListGridViewKendoGrid.utilsTopBarOptions._token', () => {
            this.refreshDataSource();
        });
    }

    refreshDataSource() {
        this.onReload();
        this.$timeout(() => {
            this.kendoGridOptions.options.dataSource.data(this.thietbis);
        }, 1000);
    }
}

const name = 'tbisListGridViewKendoGrid';

// create a module
export default angular.module(name, [
    angularMeteor,
    UtilsTopBarDataService,
    KendoGridDataService
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        thietbis: '<',
        onReload: '&'
    },
    controller: TbisListGridViewKendoGrid
});

function initKendoGridOptions(options) {
    initKendoGridColumns(options);
    initKendoDataSource(options);
    initKendoGridFilterMenu(options);
}

function initKendoDataSource(options) {
    options.dataSource = new kendo.data.DataSource({
        data: [],
        pageSize: 10,
        schema: {
            model: {
                id: "_id",
                fields: {
                    'nguon_goc.nam_san_xuat': {
                        type: "number"
                    },
                    'ho_so.nam_su_dung': {
                        type: "number"
                    },
                    'dia_diem.toa_do.enableAPI': {
                        type: "boolean"
                    },
                    'thong_so_hoat_dong.hours': {
                        type: "number"
                    },
                    'thong_so_hoat_dong.kms': {
                        type: "number"
                    },
                    'thong_so_hoat_dong.conts': {
                        type: "number"
                    },
                    'bao_hanh.isThongTinBaoHanh': {
                        type: "boolean"
                    },
                    'bao_hanh.thoi_gian.ngay_bat_dau': {
                        type: "date"
                    },
                    'bao_hanh.thoi_gian.ngay_ket_thuc': {
                        type: "date"
                    },
                    'kiem_dinh.isThongTinKiemDinh': {
                        type: "boolean"
                    },
                    'kiem_dinh.isTrongThoiGianKiemDinh': {
                        type: "boolean"
                    },
                    'kiem_dinh.thoi_gian.ngay_hieu_luc': {
                        type: "date"
                    },
                    'kiem_dinh.thoi_gian.ngay_het_han': {
                        type: "date"
                    },
                    'metadata.thoi_gian.tao_moi.ngay_tao_date': {
                        type: "date"
                    }
                }
            }
        }
    });
}

function initKendoGridColumns(options) {
    options.columns = [
        {
            field: "_id",
            title: "KeyId",
            width: "300px",
            groupable: false,
            hidden: true
        }, {
            field: "ma_thiet_bi.keyId",
            title: "Mã thiết bị",
            width: "150px",
            groupable: false
        }, {
            field: "ma_thiet_bi.topX",
            title: "Mã TopX",
            width: "150px",
            groupable: false
        }, {
            field: "ma_thiet_bi.maximo",
            title: "Mã Maximo",
            width: "150px",
            groupable: false
        }, {
            field: "phan_loai.nhom",
            title: "Nhóm thiết bị",
            width: "180px",
            aggregates: ["count"],
            groupHeaderTemplate: "Nhóm: #= value # (#= count#)"
            // hidden: true
        }, {
            field: "phan_loai.chung_loai",
            title: "Chủng loại",
            width: "180px",
            aggregates: ["count"],
            groupHeaderTemplate: "Chủng loại: #= value # (#= count#)"
        }, {
            field: "phan_loai.loai",
            title: "Loại thiết bị",
            width: "210px",
            aggregates: ["count"],
            groupHeaderTemplate: "Loại: #= value # (#= count#)"
        }, {
            field: "trang_thai",
            title: "Trạng thái",
            width: "180px",
            aggregates: ["count"],
            groupHeaderTemplate: "Trạng thái: #= value # (#= count#)"
        }, {
            field: "nguon_goc.hang_san_xuat",
            title: "Hãng sản xuất",
            width: "240px",
            aggregates: ["count"],
            groupHeaderTemplate: "Hãng SX: #= value # (#= count#)"
        }, {
            field: "nguon_goc.model",
            title: "Model",
            width: "240px",
            aggregates: ["count"],
            groupHeaderTemplate: "Model: #= value # (#= count#)"
        }, {
            field: "nguon_goc.vendor",
            title: "Vendor",
            width: "180px",
            aggregates: ["count"],
            groupHeaderTemplate: "Vendor: #= value # (#= count#)"
        }, {
            field: "nguon_goc.noi_lap_rap",
            title: "Nơi lắp ráp",
            width: "150px",
            aggregates: ["count"],
            groupHeaderTemplate: "Nơi lắp ráp: #= value # (#= count#)"
        }, {
            field: "ho_so.xuat_xu",
            title: "Xuất xứ",
            width: "150px",
            aggregates: ["count"],
            groupHeaderTemplate: "Xuất xứ: #= value # (#= count#)"
        }, {
            field: "nguon_goc.nam_san_xuat",
            title: "Năm SX",
            width: "150px",
            aggregates: ["count"],
            groupHeaderTemplate: "Năm SX: #= value # (#= count#)",
            attributes: {
                style: "text-align: center;"
            }
        }, {
            field: "ho_so.nam_su_dung",
            title: "Năm SD",
            width: "150px",
            aggregates: ["count"],
            groupHeaderTemplate: "Năm SD: #= value # (#= count#)",
            attributes: {
                style: "text-align: center;"
            }
        }, {
            field: "ho_so.so_dang_ky",
            title: "Số đăng ký",
            width: "180px",
            groupable: false
        }, {
            field: "ho_so.so_dang_kiem",
            title: "Số đăng kiểm",
            width: "180px",
            groupable: false
        }, {
            field: "ho_so.so_khung",
            title: "Số khung",
            width: "180px",
            groupable: false
        }, {
            field: "ho_so.so_may",
            title: "Số máy",
            width: "180px",
            groupable: false
        }, {
            field: "ho_so.bien_so",
            title: "Biển số",
            width: "180px",
            groupable: false
        }, {
            field: "phan_quyen.so_huu.ma",
            title: "Mã ĐVSH",
            width: "150px",
            aggregates: ["count"],
            groupHeaderTemplate: "Mã ĐVSH: #= value # (#= count#)"
        }, {
            field: "phan_quyen.so_huu.ten",
            title: "Tên ĐVSH",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "ĐVSH: #= value # (#= count#)"
        }, {
            field: "phan_quyen.so_huu.nhom",
            title: "Nhóm ĐVSH",
            width: "480px",
            aggregates: ["count"],
            groupHeaderTemplate: "Nhóm ĐVSH: #= value # (#= count#)"
        }, {
            field: "phan_quyen.quan_ly.ma",
            title: "Mã ĐVQL",
            width: "150px",
            aggregates: ["count"],
            groupHeaderTemplate: "Mã ĐVQL: #= value # (#= count#)"
        }, {
            field: "phan_quyen.quan_ly.ten",
            title: "Tên ĐVQL",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "ĐVQL: #= value # (#= count#)"
        }, {
            field: "phan_quyen.quan_ly.nhom",
            title: "Nhóm ĐVQL",
            width: "480px",
            aggregates: ["count"],
            groupHeaderTemplate: "Nhóm ĐVQL: #= value # (#= count#)"
        }, {
            field: "phan_quyen.van_hanh.ma",
            title: "Mã ĐVVH",
            width: "150px",
            groupable: false
        }, {
            field: "phan_quyen.van_hanh.ten",
            title: "Tên ĐVVH",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "ĐVVH: #= value # (#= count#)"
        }, {
            field: "phan_quyen.van_hanh.nhom",
            title: "Nhóm ĐVVH",
            width: "480px",
            aggregates: ["count"],
            groupable: false
        }, {
            field: "phan_quyen.doi_van_hanh.ma",
            title: "Mã đội VH",
            width: "150px",
            groupable: false
        }, {
            field: "phan_quyen.doi_van_hanh.ten",
            title: "Tên đội VH",
            width: "480px",
            aggregates: ["count"],
            groupHeaderTemplate: "Đội vận hành: #= value # (#= count#)"
        }, {
            field: "dia_diem.mien",
            title: "Miền hoạt động",
            width: "180px",
            aggregates: ["count"],
            groupHeaderTemplate: "Miền hoạt động: #= value # (#= count#)"
        }, {
            field: "dia_diem.dia_phuong",
            title: "Địa phương hoạt động",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Địa phương hoạt động: #= value # (#= count#)"
        }, {
            field: "dia_diem.khu_vuc.ma",
            title: "Mã khu vực",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Mã khu vực: #= value # (#= count#)"
        }, {
            field: "dia_diem.khu_vuc.ten",
            title: "Tên khu vực",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Khu vực hoạt động: #= value # (#= count#)"
        }, {
            field: "dia_diem.terminal",
            title: "Terminal",
            width: "180px",
            groupable: false
        }, {
            field: "dia_diem.line",
            title: "Line",
            width: "180px",
            groupable: false
        }, {
            field: "dia_diem.cau_cang",
            title: "Cầu cảng",
            width: "180px",
            groupable: false
        }, {
            field: "dia_diem.toa_do.enableAPI",
            title: "Cập nhật vị trí qua API?",
            width: "420px",
            aggregates: ["count"],
            groupHeaderTemplate: "Cho phép API? #= value # (#= count#)",
            values: [
                { text: "Có", value: true },
                { text: "Không", value: false }
            ]
        }, {
            field: "dia_diem.toa_do.api",
            title: "GPS API",
            width: "420px",
            groupable: false
        }, {
            field: "thong_so_hoat_dong.hours",
            title: "Giờ hoạt động",
            width: "150px",
            groupable: false
        }, {
            field: "thong_so_hoat_dong.kms",
            title: "Số kms",
            width: "150px",
            groupable: false
        }, {
            field: "thong_so_hoat_dong.conts",
            title: "Số Conts",
            width: "150px",
            groupable: false
        }, {
            field: "ghi_chu",
            title: "Ghi chú",
            width: "420px",
            groupable: false
        }, {
            field: "mo_ta",
            title: "Mô tả",
            width: "420px",
            groupable: false
        }, {
            field: "bao_hanh.isThongTinBaoHanh",
            title: "Có thông tin bảo hành?",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Thông tin bảo hành? #= value # (#= count#)",
            values: [
                { text: "Có", value: true },
                { text: "Không", value: false }
            ]
        }, {
            field: "bao_hanh.isTrongThoiGianBaoHanh",
            title: "Đang bảo hành?",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Đang bảo hành? #= value # (#= count#)",
            values: [
                { text: "Có", value: true },
                { text: "Không", value: false }
            ]
        }, {
            field: "bao_hanh.thoi_gian.ngay_bat_dau",
            title: "Ngày bắt đầu",
            width: "240px",
            format: "{0: yyyy-MM-dd}",
            groupable: false
        }, {
            field: "bao_hanh.thoi_gian.ngay_ket_thuc",
            title: "Ngày kết thúc",
            width: "240px",
            format: "{0: yyyy-MM-dd}",
            groupable: false
        }, {
            field: "kiem_dinh.isThongTinKiemDinh",
            title: "Có thông tin kiểm định?",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Thông tin kiểm định? #= value # (#= count#)",
            values: [
                { text: "Có", value: true },
                { text: "Không", value: false }
            ]
        }, {
            field: "kiem_dinh.isTrongThoiGianKiemDinh",
            title: "Trong thời hạn kiểm định?",
            width: "300px",
            aggregates: ["count"],
            groupHeaderTemplate: "Trong thời hạn kiểm định #= value # (#= count#)",
            values: [
                { text: "Có", value: true },
                { text: "Không", value: false }
            ]
        }, {
            field: "kiem_dinh.ho_so.so_phieu_kiem_dinh",
            title: "Số phiếu kiểm định",
            width: "240px",
            groupable: false
        }, {
            field: "kiem_dinh.ho_so.so_tem_kiem_dinh",
            title: "Số tem kiểm định",
            width: "240px",
            groupable: false
        }, {
            field: "kiem_dinh.thoi_gian.ngay_hieu_luc",
            title: "Ngày có hiệu lực",
            width: "240px",
            format: "{0: yyyy-MM-dd}",
            groupable: false
        }, {
            field: "kiem_dinh.thoi_gian.ngay_het_han",
            title: "Ngày hết hạn",
            width: "240px",
            format: "{0: yyyy-MM-dd}",
            groupable: false
        }, {
            field: "metadata.thoi_gian.tao_moi.ngay_tao_date",
            title: "Ngày tạo",
            width: "240px",
            format: "{0: yyyy-MM-dd}",
            groupable: false
        }, {
            field: "metadata.user.nguoi_tao.email",
            title: "Người tạo (email)",
            width: "240px",
            aggregates: ["count"],
            groupHeaderTemplate: "Người tạo (email): #= value # (#= count#)"
        }, {
            field: "metadata.user.nguoi_tao.name",
            title: "Người tạo",
            width: "240px",
            aggregates: ["count"],
            groupHeaderTemplate: "Người tạo: #= value # (#= count#)"
        }

    ]
}

function initKendoGridFilterMenu(options) {
    options.filterMenuInit = (e) => {
        let defaultColumnsWithContainsOperator = ['ma_thiet_bi.keyId', 'phan_loai.nhom', 'phan_loai.chung_loai', 'phan_loai.loai'];

        if (_.contains(defaultColumnsWithContainsOperator, e.field)) {
            let firstValueDropDown = e.container.find("select:eq(0)").data("kendoDropDownList");
            firstValueDropDown.value("contains");
            firstValueDropDown.trigger("change");
        }
    }
}