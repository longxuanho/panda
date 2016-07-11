import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';

class TbisPhanQuyenDataService {

    constructor() {
        'ngInject';
        this.donvis = queryDonVis();
        this.doivanhanhs = queryDoiVanHanhs();

        this.selectOptions = {
            donvis: buildDonViOptions(this.donvis),
            doivanhanhs: buildDoiVanHanhOptions(this.doivanhanhs)
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    getDonVis() {
        return this.donvis;
    }

    getDoiVanHanhs() {
        return this.doivanhanhs;
    }
}

const name = 'tbisPhanQuyenDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisPhanQuyenDataService);

function queryDonVis() {
    return [{
        _id: 'keyId_dvis_CP1503',
        ma: 'CP1503',
        ten: 'CP 15-03'
    }, {
        _id: 'keyId_dvis_ATPC',
        ma: 'ATPC',
        ten: 'Phòng An Toàn Pháp Chế'
    }, {
        _id: 'keyId_dvis_BENTHANH',
        ma: 'BENTHANH',
        ten: 'Tân Cảng Bến Thành'
    }, {
        _id: 'keyId_dvis_CANGVU',
        ma: 'CANGVU',
        ten: 'Cảng Vụ'
    }, {
        _id: 'keyId_dvis_CP128',
        ma: 'CP128',
        ten: 'Tân Cảng 128 Hải Phòng'
    }, {
        _id: 'keyId_dvis_CP189',
        ma: 'CP189',
        ten: 'Tân Cảng 189 Hải Phòng'
    }, {
        _id: 'keyId_dvis_CPCL',
        ma: 'CPCL',
        ten: 'CP Cảng Cát Lái'
    }, {
        _id: 'keyId_dvis_DIAOC',
        ma: 'DIAOC',
        ten: 'Đầu Tư PT Hạ Tầng TC'
    }, {
        _id: 'keyId_dvis_DIC',
        ma: 'DIC',
        ten: 'DIC'
    }, {
        _id: 'keyId_dvis_DTV',
        ma: 'DTV',
        ten: 'Cảng Dầu Thực Vật'
    }, {
        _id: 'keyId_dvis_DVHH',
        ma: 'DVHH',
        ten: 'Dịch Vụ Hàng Hải'
    }, {
        _id: 'keyId_dvis_DVKT',
        ma: 'DVKT',
        ten: 'Dịch Vụ Kỹ Thuật'
    }, {
        _id: 'keyId_dvis_PHC',
        ma: 'PHC',
        ten: 'Phòng Hậu Cần'
    }, {
        _id: 'keyId_dvis_HOATIEU',
        ma: 'HOATIEU',
        ten: 'Hoa Tiêu Tân Cảng'
    }, {
        _id: 'keyId_dvis_ICDLB',
        ma: 'ICDLB',
        ten: 'ICD Long Bình'
    }, {
        _id: 'keyId_dvis_ICDSTH',
        ma: 'ICDSTH',
        ten: 'ICD Sóng Thần'
    }, {
        _id: 'keyId_dvis_ITCPHH',
        ma: 'ITCPHH',
        ten: 'Cảng ITC Phú Hữu'
    }, {
        _id: 'keyId_dvis_KTVT',
        ma: 'KTVT',
        ten: 'Phòng Kỹ Thuật Vật Tư'
    }, {
        _id: 'keyId_dvis_KVTC',
        ma: 'KVTC',
        ten: 'Kho Vận Tân Cảng'
    }, {
        _id: 'keyId_dvis_QSBV',
        ma: 'QSBV',
        ten: 'Phòng Quân Sự Bảo Vệ'
    }, {
        _id: 'keyId_dvis_QSBV',
        ma: 'QSBV',
        ten: 'Phòng Quân Sự Bảo Vệ'
    }, {
        _id: 'keyId_dvis_TCCMR',
        ma: 'TCCMR',
        ten: 'Tân Cảng Cam Ranh'
    }, {
        _id: 'keyId_dvis_TCCT',
        ma: 'TCCT',
        ten: 'CP Tân Cảng Cái Mép TCCT'
    }, {
        _id: 'keyId_dvis_TCIT',
        ma: 'TCIT',
        ten: 'Cảng Quốc Tế TC Cái Mép TCIT'
    }, {
        _id: 'keyId_dvis_TCOT',
        ma: 'TCOT',
        ten: 'Cảng Quốc Tế Cái Mép ODA TCOT'
    }, {
        _id: 'keyId_dvis_TCHP',
        ma: 'TCHP',
        ten: 'Cảng Tân Cảng Hiệp Phước'
    }, {
        _id: 'keyId_dvis_TCL',
        ma: 'TCL',
        ten: 'Đại Lý Giao Nhận Vận Tải TCL'
    }, {
        _id: 'keyId_dvis_TCMTR',
        ma: 'TCMTR',
        ten: 'Tân Cảng Miền Trung'
    }, {
        _id: 'keyId_dvis_TCO',
        ma: 'TCO',
        ten: 'CP Dịch Vụ Biển TCO'
    }, {
        _id: 'keyId_dvis_TCSS',
        ma: 'TCSS',
        ten: 'CP Vận Tải Biển TCSS'
    }, {
        _id: 'keyId_dvis_SNP',
        ma: 'SNP',
        ten: 'Tổng Cty Tân Cảng Sài Gòn'
    }, {
        _id: 'keyId_dvis_SNP',
        ma: 'SNP',
        ten: 'Tổng Cty Tân Cảng Sài Gòn'
    }, {
        _id: 'keyId_dvis_TVBD',
        ma: 'TVBD',
        ten: 'Tiếp Vận Bình Dương'
    }, {
        _id: 'keyId_dvis_TVCL',
        ma: 'TVCL',
        ten: 'Tiếp Vận Cát Lái'
    }, {
        _id: 'keyId_dvis_TVDGN',
        ma: 'TVDGN',
        ten: 'Tiếp Vận Đồng Nai'
    }, {
        _id: 'keyId_dvis_TVHPH',
        ma: 'TVHPH',
        ten: 'Tiếp Vận Hiệp Phước'
    }, {
        _id: 'keyId_dvis_TVLB',
        ma: 'TVLB',
        ten: 'Tiếp Vận Long Bình'
    }, {
        _id: 'keyId_dvis_TVMB',
        ma: 'TVMB',
        ten: 'Tiếp Vận Miền Bắc'
    }, {
        _id: 'keyId_dvis_TVMK',
        ma: 'TVMK',
        ten: 'Tiếp Vận MeKong'
    }, {
        _id: 'keyId_dvis_TVVT',
        ma: 'TVVT',
        ten: 'Tiếp Vận Vũng Tàu'
    }, {
        _id: 'keyId_dvis_VTBO',
        ma: 'VTBO',
        ten: 'CP Vận Tải Bộ'
    }, {
        _id: 'keyId_dvis_VTT',
        ma: 'VTT',
        ten: 'CP Vận Tải Thủy'
    }, {
        _id: 'keyId_dvis_XDCT',
        ma: 'XDCT',
        ten: 'Xây Dựng Công Trình'
    }, {
        _id: 'keyId_dvis_XDSM',
        ma: 'XDSM',
        ten: 'CP Xây Dựng Số Một'
    }, {
        _id: 'keyId_dvis_XNCG',
        ma: 'XNCG',
        ten: 'Xí Nghiệp Cơ Giới'
    } ];
}

function queryDoiVanHanhs() {
    return [{
        _id: 'keyId_dvis_XNCG_CG1',
        ma: 'CG1',
        ten: 'Đội Cơ Giới 1',
        don_vi: {
            _id: 'keyId_dvis_XNCG',
            ma: 'XNCG',
            ten: 'Xí Nghiệp Cơ Giới'
        }
    }, {
        _id: 'keyId_dvis_XNCG_CG2',
        ma: 'CG2',
        ten: 'Đội Cơ Giới 2',
        don_vi: {
            _id: 'keyId_dvis_XNCG',
            ma: 'XNCG',
            ten: 'Xí Nghiệp Cơ Giới'
        }
    }, {
        _id: 'keyId_dvis_XNCG_CG3',
        ma: 'CG3',
        ten: 'Đội Cơ Giới 3',
        don_vi: {
            _id: 'keyId_dvis_XNCG',
            ma: 'XNCG',
            ten: 'Xí Nghiệp Cơ Giới'
        }
    }, {
        _id: 'keyId_dvis_XNCG_CG4',
        ma: 'CG4',
        ten: 'Đội Cơ Giới 4',
        don_vi: {
            _id: 'keyId_dvis_XNCG',
            ma: 'XNCG',
            ten: 'Xí Nghiệp Cơ Giới'
        }
    }, {
        _id: 'keyId_dvis_XNCG_CG5',
        ma: 'CG5',
        ten: 'Đội Cơ Giới 5',
        don_vi: {
            _id: 'keyId_dvis_XNCG',
            ma: 'XNCG',
            ten: 'Xí Nghiệp Cơ Giới'
        }
    }];
}

function buildDonViOptions(donvis) {
    "use strict";
    return donvis;
    // return _.map(donvis, (donvi) => {
    //     return _.pick(donvi, 'ten', 'ma');
    // });
}

function buildDoiVanHanhOptions(doivanhanhs) {
    "use strict";
    try {
        let result = _.groupBy(doivanhanhs, (doivanhanh) => {
            return doivanhanh.don_vi.ten;
        });
        console.log('result ', result);
        return _.mapObject(result, function(val, key) {
            return _.map(val, (doivanhanh) => {
                return _.pick(doivanhanh, '_id', 'ten', 'ma');
            })
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Phân Quyền > Đội Vận Hành (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}