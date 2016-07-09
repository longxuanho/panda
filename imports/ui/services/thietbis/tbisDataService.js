import angular from 'angular';
import angularMeteor from 'angular-meteor';

// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';

class TbisDataService {

    constructor() {
        'ngInject';
        this.thietbis = this.queryThietBis();
    }

    getAllThietBis() {
        return this.thietbis;
    }

    queryThietBis() {
        return [{
            ma_thiet_bi: {
                keyId: 'NB132'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Xe máy',
                chung_loai: 'Đầu kéo',
                loai: 'Đầu kéo nội bộ'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_XNCG',
                    ma_don_vi: 'XNCG',
                    ten_don_vi: 'Xí nghiệp Cơ giới'    
                }                  
            },
            thong_tin_chung: {
                nam_su_dung: 2007
            },
            hang_san_xuat: {
                keyId: 'keyId_Terberg',
                ten_hang: 'Terberg',
                ma_hang: 'Terberg'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_CatLai',
                    ma_khu_vuc: 'CLI',
                    ten_khu_vuc: 'Cát Lái'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }, {
            ma_thiet_bi: {
                keyId: 'NB119'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Xe máy',
                chung_loai: 'Đầu kéo',
                loai: 'Đầu kéo nội bộ'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_GNVT',
                    ma_don_vi: 'GNVT',
                    ten_don_vi: 'Giao nhận vận tải'
                }
            },
            thong_tin_chung: {
                nam_su_dung: 2004
            },
            hang_san_xuat: {
                keyId: 'keyId_Maz',
                ten_hang: 'Maz',
                ma_hang: 'Maz'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_CatLai',
                    ma_khu_vuc: 'CLI',
                    ten_khu_vuc: 'Cát Lái'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }, {
            ma_thiet_bi: {
                keyId: 'CP189-01'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Xe máy',
                chung_loai: 'Đầu kéo',
                loai: 'Đầu kéo chạy ngoài'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_189HP',
                    ma_don_vi: '189HP',
                    ten_don_vi: '189 Hải Phòng'
                }
            },
            thong_tin_chung: {
                nam_su_dung: 2015
            },
            hang_san_xuat: {
                keyId: 'keyId_Dongfeng',
                ten_hang: 'Dongfeng',
                ma_hang: 'Dongfeng'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_189HP',
                    ma_khu_vuc: '189HP',
                    ten_khu_vuc: '189 Hải Phòng'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }, {
            ma_thiet_bi: {
                keyId: 'Q02'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Thiết bị nâng',
                chung_loai: 'Cẩu bờ',
                loai: 'KE'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_XNCG',
                    ma_don_vi: 'XNCG',
                    ten_don_vi: 'Xí nghiệp Cơ giới'
                }
            },
            thong_tin_chung: {
                nam_su_dung: 2000
            },
            hang_san_xuat: {
                keyId: 'keyId_KE',
                ten_hang: 'Kranbau Eberswalde',
                ma_hang: 'KE'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_CatLai',
                    ma_khu_vuc: 'CLI',
                    ten_khu_vuc: 'Cát Lái'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }, {
            ma_thiet_bi: {
                keyId: 'Q18'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Thiết bị nâng',
                chung_loai: 'Cẩu bờ',
                loai: 'KE'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_XNCG',
                    ma_don_vi: 'XNCG',
                    ten_don_vi: 'Xí nghiệp Cơ giới'
                }
            },
            thong_tin_chung: {
                nam_su_dung: 2011
            },
            hang_san_xuat: {
                keyId: 'keyId_KOCKS',
                ten_hang: 'Kocks Krane GmbH',
                ma_hang: 'KOCKS'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_CatLai',
                    ma_khu_vuc: 'CLI',
                    ten_khu_vuc: 'Cát Lái'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }, {
            ma_thiet_bi: {
                keyId: 'LBH01_GL'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Thiết bị nâng',
                chung_loai: 'Cẩu bờ',
                loai: 'KE'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_VTT',
                    ma_don_vi: 'VTT',
                    ten_don_vi: 'Vận tải thủy'
                }
            },
            thong_tin_chung: {
                nam_su_dung: 2000
            },
            hang_san_xuat: {
                keyId: 'keyId_Liebherr',
                ten_hang: 'Liebherr',
                ma_hang: 'Liebherr'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_GLG',
                    ma_khu_vuc: 'GLG',
                    ten_khu_vuc: 'Giao Long'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }, {
            ma_thiet_bi: {
                keyId: 'TC-01'
            },
            phan_loai: {
                scope: 'Tân Cảng Sài Gòn',
                nhom: 'Tàu thuyền',
                chung_loai: 'Tàu kéo'
            },
            phan_quyen: {
                quan_ly: {
                    keyId: 'keyId_DVHH',
                    ma_don_vi: 'DVHH',
                    ten_don_vi: 'Dịch vụ Hàng hải'
                }
            },
            thong_tin_chung: {
                nam_su_dung: 2015
            },
            hang_san_xuat: {
                keyId: 'keyId_UNKNW',
                ten_hang: 'Chưa xác định',
                ma_hang: 'UNKNW'
            },
            vi_tri: {
                quoc_gia: 'Việt Nam',
                mien: 'Nam',
                khu_vuc: {
                    keyId: 'keyId_CatLai',
                    ma_khu_vuc: 'CLI',
                    ten_khu_vuc: 'Cát Lái'
                }
            },
            trang_thai: 'Đang hoạt động',
            isActive: true
        }];
    }
}

const name = 'tbisDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisDataService);