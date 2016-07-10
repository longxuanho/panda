import angular from 'angular';
import angularMeteor from 'angular-meteor';

// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';

class TbisDiaDiemDataService {

    constructor() {
        'ngInject';
        this.quocgias = this.queryQuocGias();
        this.khuvucs = this.queryKhuVucs();
    }

    getQuocGias() {
        return this.hangsanxuats;
    }

    getKhuVucs() {
        return this.models;
    }

    queryQuocGias() {
        return [
            'Hàn Quốc',
            'Hoa Kỳ',
            'Nhật Bản',
            'Trung Quốc',
            'Việt Nam'
        ];
    }

    queryKhuVucs() {
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
            _id: 'keyId_khuvucs_CMEP',
            ma: 'CMEP',
            ten: 'Cái Mép'
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
}

const name = 'tbisDiaDiemDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDiaDiemDataService);