import angular from 'angular';
import angularMeteor from 'angular-meteor';

// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';

class TbisDiaDiemDataService {

    constructor() {
        'ngInject';
        this.quocgias = queryQuocGias();
        this.khuvucs = queryKhuVucs();

        this.selectOptions = {
            quocgias: buildQuocGiasOptions(this.quocgias),
            khuvucs: buildKhuVucsOptions(this.khuvucs)
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    getQuocGias() {
        return this.quocgias;
    }

    getKhuVucs() {
        return this.khuvucs;
    }


}

const name = 'tbisDiaDiemDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDiaDiemDataService);

function queryQuocGias() {
    "use strict";
    return [{
        _id: 'keyId_KOREA',
        ten: 'Hàn Quốc',
        name: 'Korea'
    }, {
        _id: 'keyId_US',
        ten: 'Hoa Kỳ',
        name: 'US'
    }, {
        _id: 'keyId_JAPAN',
        ten: 'Nhật Bản',
        name: 'Japan'
    }, {
        _id: 'keyId_CHINA',
        ten: 'Trung Quốc',
        name: 'China'
    }, {
        _id: 'keyId_VIETNAM',
        ten: 'Việt Nam',
        name: 'Vietnam'
    }];
}

function queryKhuVucs() {
    "use strict";
    return [{
        _id: 'keyId_khuvucs_HP128',
        ma: 'HP128',
        ten: '128 Hải Phòng'
    }, {
        _id: 'keyId_khuvucs_HP189',
        ma: 'HP189',
        ten: '189 Hải Phòng'
    }, {
        _id: 'keyId_khuvucs_CAOL',
        ma: 'CAOL',
        ten: 'Cao Lãnh'
    }, {
        _id: 'keyId_khuvucs_CCUI',
        ma: 'CCUI',
        ten: 'Cái Cui'
    }, {
        _id: 'keyId_khuvucs_CLAI',
        ma: 'CLAI',
        ten: 'Cát Lái'
    }, {
        _id: 'keyId_khuvucs_CME_TCCT',
        ma: 'CME_TCCT',
        ten: 'Cái Mép TCCT'
    }, {
        _id: 'keyId_khuvucs_CME_TCIT',
        ma: 'CME_TCIT',
        ten: 'Cái Mép TCIT'
    }, {
        _id: 'keyId_khuvucs_CME_TCOT',
        ma: 'CME_TCOT',
        ten: 'Cái Mép TCOT'
    }, {
        _id: 'keyId_khuvucs_CMRH',
        ma: 'CMRH',
        ten: 'Cam Ranh'
    }, {
        _id: 'keyId_khuvucs_DNAI',
        ma: 'DNAI',
        ten: 'Đồng Nai'
    }, {
        _id: 'keyId_khuvucs_DTHA',
        ma: 'DTHA',
        ten: 'Đồng Tháp'
    }, {
        _id: 'keyId_khuvucs_DTHV',
        ma: 'DTHV',
        ten: 'Dầu Thực Vật'
    }, {
        _id: 'keyId_khuvucs_GLNG',
        ma: 'GLNG',
        ten: 'Giao Long'
    }, {
        _id: 'keyId_khuvucs_HLUC',
        ma: 'HLUC',
        ten: 'Hiệp Lực'
    }, {
        _id: 'keyId_khuvucs_LBNH',
        ma: 'LBNH',
        ten: 'Long Bình'
    }, {
        _id: 'keyId_khuvucs_MTHO',
        ma: 'MTHO',
        ten: 'Mỹ Tho'
    }, {
        _id: 'keyId_khuvucs_MTRG',
        ma: 'MTRG',
        ten: 'Miền Trung'
    }, {
        _id: 'keyId_khuvucs_NHTR',
        ma: 'NHTR',
        ten: 'Nhơn Trạch'
    }, {
        _id: 'keyId_khuvucs_PHH',
        ma: 'PHH',
        ten: 'Phú Hữu'
    }, {
        _id: 'keyId_khuvucs_SDEC',
        ma: 'SDEC',
        ten: 'Sa Đéc'
    }, {
        _id: 'keyId_khuvucs_STHN',
        ma: 'STHN',
        ten: 'Sóng Thần'
    }, {
        _id: 'keyId_khuvucs_STIEN',
        ma: 'STIEN',
        ten: 'Suối Tiên'
    }, {
        _id: 'keyId_khuvucs_TNCA',
        ma: 'TNCA',
        ten: 'Tân Cảng'
    }, {
        _id: 'keyId_khuvucs_THHOA',
        ma: 'THHOA',
        ten: 'Thanh Hóa'
    }, {
        _id: 'keyId_khuvucs_TNOT',
        ma: 'TNOT',
        ten: 'Thốt Nốt'
    }, {
        _id: 'keyId_khuvucs_TRGSA',
        ma: 'TRGSA',
        ten: 'Trường Sa'
    }];
}

function buildQuocGiasOptions(quocgias) {
    "use strict";
    return _.pluck(quocgias, 'ten');
}

function buildKhuVucsOptions(khuvucs) {
    "use strict";
    return khuvucs;
    // return _.map(khuvucs, (khuvuc) => {
    //     return _.pick(khuvuc, 'ten', 'ma');
    // });
}