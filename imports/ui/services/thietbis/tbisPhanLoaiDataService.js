import angular from 'angular';
import angularMeteor from 'angular-meteor';

// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';

class TbisPhanLoaiDataService {

    constructor() {
        'ngInject';
        this.thietbis = this.queryThietBis();
    }

    getAllThietBis() {
        return this.thietbis;
    }

    queryNhom() {
        return [{
            _id: 'keyId_TBN',
            ten: 'Thiết bị nâng',
            order: 100
        }, {
            _id: 'keyId_XMY',
            ten: 'Xe máy',
            order: 200
        }, {
            _id: 'keyId_TTH',
            ten: 'Tàu thuyền',
            order: 300
        }, {
            _id: 'keyId_TRN',
            ten: 'Trạm nguồn',
            order: 400
        }, {
            _id: 'keyId_TLY',
            ten: 'Thanh lý',
            order: 500
        }];
    }

    queryChungLoai() {
        return [{
            _id: 'keyId_CAUBO',
            ten: 'Cẩu bờ',
            order: 100,
            nhom: {
                _id: 'keyId_TBN',
                ten: 'Thiết bị nâng'
            }
        }, {
            _id: 'keyId_CAUKHUNG',
            ten: 'Cẩu khung',
            order: 200,
            nhom: {
                _id: 'keyId_TBN',
                ten: 'Thiết bị nâng'
            }
        }, {
            _id: 'keyId_XENANG',
            ten: 'Xe nâng',
            order: 300,
            nhom: {
                _id: 'keyId_TBN',
                ten: 'Thiết bị nâng'
            }
        }, {
            _id: 'keyId_KHUNGCHUPROI',
            ten: 'Khung chụp rời',
            order: 400,
            nhom: {
                _id: 'keyId_TBN',
                ten: 'Thiết bị nâng'
            }
        }, {
            _id: 'keyId_VANTHANG',
            ten: 'Vận thăng',
            order: 500,
            nhom: {
                _id: 'keyId_TBN',
                ten: 'Thiết bị nâng'
            }
        }, {
            _id: 'keyId_KHAC',
            ten: 'TB nâng khác',
            order: 600,
            nhom: {
                _id: 'keyId_TBN',
                ten: 'Thiết bị nâng'
            }
        }, {
            _id: 'keyId_DAUKEO',
            ten: 'Đầu kéo',
            order: 100,
            nhom: {
                _id: 'keyId_XMY',
                ten: 'Xe máy'
            }
        }, {
            _id: 'keyId_ROMOOC',
            ten: 'Rơ móoc',
            order: 200,
            nhom: {
                _id: 'keyId_XMY',
                ten: 'Xe máy'
            }
        }, {
            _id: 'keyId_XETAIBANTAI',
            ten: 'Xe tải/bán tải',
            order: 300,
            nhom: {
                _id: 'keyId_XMY',
                ten: 'Xe máy'
            }
        }, {
            _id: 'keyId_XECHUYENDUNG',
            ten: 'Xe chuyên dụng',
            order: 400,
            nhom: {
                _id: 'keyId_XMY',
                ten: 'Xe máy'
            }
        }, {
            _id: 'keyId_XEDULICH',
            ten: 'Xe du lịch',
            order: 500,
            nhom: {
                _id: 'keyId_XMY',
                ten: 'Xe máy'
            }
        }, {
            _id: 'keyId_MOTO',
            ten: 'Mô tô',
            order: 600,
            nhom: {
                _id: 'keyId_XMY',
                ten: 'Xe máy'
            }
        }];
    }

    queryLoai() {
        return [{
            _id: 'keyId_KE',
            ten: 'KE',
            order: 100,
            chung_loai: {
                _id: 'keyId_CAUBO',
                ten: 'Cẩu bờ'
            }
        }, {
            _id: 'keyId_KOCKS',
            ten: 'KOCKS',
            order: 200,
            chung_loai: {
                _id: 'keyId_CAUBO',
                ten: 'Cẩu bờ'
            }
        }, {
            _id: 'keyId_LBCODINH',
            ten: 'LB cố định',
            order: 300,
            chung_loai: {
                _id: 'keyId_CAUBO',
                ten: 'Cẩu bờ'
            }
        }, {
            _id: 'keyId_LBRAY',
            ten: 'LB ray',
            order: 400,
            chung_loai: {
                _id: 'keyId_CAUBO',
                ten: 'Cẩu bờ'
            }
        }, {
            _id: 'keyId_Mitsui',
            ten: 'Mitsui',
            order: 500,
            chung_loai: {
                _id: 'keyId_CAUBO',
                ten: 'Cẩu bờ'
            }
        }, {
            _id: 'keyId_ZPMC',
            ten: 'ZPMC',
            order: 600,
            chung_loai: {
                _id: 'keyId_CAUBO',
                ten: 'Cẩu bờ'
            }
        }, {
            _id: 'keyId_RTG3+1',
            ten: 'RTG 3+1',
            order: 100,
            chung_loai: {
                _id: 'keyId_CAUKHUNG',
                ten: 'Cẩu khung'
            }
        }, {
            _id: 'keyId_RTG6+1',
            ten: 'RTG 6+1',
            order: 200,
            chung_loai: {
                _id: 'keyId_CAUKHUNG',
                ten: 'Cẩu khung'
            }
        }, {
            _id: 'keyId_RMG',
            ten: 'RMG',
            order: 300,
            chung_loai: {
                _id: 'keyId_CAUKHUNG',
                ten: 'Cẩu khung'
            }
        }, {
            _id: 'keyId_XENANGHANG',
            ten: 'Xe nâng hàng',
            order: 100,
            chung_loai: {
                _id: 'keyId_XENANG',
                ten: 'Xe nâng'
            }
        }, {
            _id: 'keyId_XENANGRONG',
            ten: 'Xe nâng rỗng',
            order: 200,
            chung_loai: {
                _id: 'keyId_XENANG',
                ten: 'Xe nâng'
            }
        }, {
            _id: 'keyId_XENANGKHO',
            ten: 'Xe nâng kho',
            order: 300,
            chung_loai: {
                _id: 'keyId_XENANG',
                ten: 'Xe nâng'
            }
        }, {
            _id: 'keyId_KHUNGCHUP20',
            ten: 'Khung chụp 20ft',
            order: 100,
            chung_loai: {
                _id: 'keyId_KHUNGCHUPROI',
                ten: 'Khung chụp rời'
            }
        }, {
            _id: 'keyId_KHUNGCHUP40',
            ten: 'Khung chụp 40ft',
            order: 200,
            chung_loai: {
                _id: 'keyId_KHUNGCHUPROI',
                ten: 'Khung chụp rời'
            }
        }, {
            _id: 'keyId_VANTHANGCB',
            ten: 'Vận thăng cẩu bờ',
            order: 100,
            chung_loai: {
                _id: 'keyId_VANTHANG',
                ten: 'Vận thăng'
            }
        }, {
            _id: 'keyId_XETHANG',
            ten: 'Xe thang',
            order: 100,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_XEPVSC',
            ten: 'Xe phục vụ SC',
            order: 200,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_CAUTRUCXUONG',
            ten: 'Cầu trục xưởng',
            order: 300,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_CAUOTO',
            ten: 'Cẩu ô tô',
            order: 400,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_XESUACHUA',
            ten: 'Xe sửa chữa',
            order: 500,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_CAUBANHXICH',
            ten: 'Cẩu bánh xích',
            order: 600,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_CAUBANHLOP',
            ten: 'Cẩu bánh lốp',
            order: 700,
            chung_loai: {
                _id: 'keyId_KHAC',
                ten: 'TB nâng khác'
            }
        }, {
            _id: 'keyId_DKNOIBO',
            ten: 'Đầu kéo nội bộ',
            order: 100,
            chung_loai: {
                _id: 'keyId_DAUKEO',
                ten: 'Đầu kéo'
            }
        }, {
            _id: 'keyId_DKCHAYNGOAI',
            ten: 'Đầu kéo chạy ngoài',
            order: 200,
            chung_loai: {
                _id: 'keyId_DAUKEO',
                ten: 'Đầu kéo'
            }
        }, {
            _id: 'keyId_ROMOOC20',
            ten: 'Rơ móoc 20ft',
            order: 100,
            chung_loai: {
                _id: 'keyId_ROMOOC',
                ten: 'Rơ móoc'
            }
        }, {
            _id: 'keyId_ROMOOC40',
            ten: 'Rơ móoc 40ft',
            order: 200,
            chung_loai: {
                _id: 'keyId_ROMOOC',
                ten: 'Rơ móoc'
            }
        }, {
            _id: 'keyId_ROMOOC45',
            ten: 'Rơ móoc 45ft',
            order: 300,
            chung_loai: {
                _id: 'keyId_ROMOOC',
                ten: 'Rơ móoc'
            }
        }, {
            _id: 'keyId_XETAI',
            ten: 'Xe tải',
            order: 100,
            chung_loai: {
                _id: 'keyId_XETAIBANTAI',
                ten: 'Xe tải/bán tải'
            }
        }, {
            _id: 'keyId_XEBANTAI',
            ten: 'Xe bán tải',
            order: 200,
            chung_loai: {
                _id: 'keyId_XETAIBANTAI',
                ten: 'Xe tải/bán tải'
            }
        }, {
            _id: 'keyId_XENOIBO',
            ten: 'Xe nội bộ',
            order: 100,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XECUUHOA',
            ten: 'Xe cứu hỏa',
            order: 200,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XEPVCUUHOA',
            ten: 'Xe phục vụ cứu hỏa',
            order: 300,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XECUUTHUONG',
            ten: 'Xe cứu thương',
            order: 400,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XEBON',
            ten: 'Xe bồn',
            order: 500,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XERUACAU',
            ten: 'Xe rửa cẩu',
            order: 600,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XECHIHUY',
            ten: 'Xe chỉ huy',
            order: 700,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XEQUETDUONG',
            ten: 'Xe quét đường',
            order: 800,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XETUOIDUONG',
            ten: 'Xe tưới đường',
            order: 900,
            chung_loai: {
                _id: 'keyId_XECHUYENDUNG',
                ten: 'Xe chuyên dụng'
            }
        }, {
            _id: 'keyId_XEDUADON',
            ten: 'Xe bus đưa đón',
            order: 100,
            chung_loai: {
                _id: 'keyId_XEDULICH',
                ten: 'Xe du lịch'
            }
        }, {
            _id: 'keyId_XE4CHO',
            ten: 'Xe 4 chỗ',
            order: 200,
            chung_loai: {
                _id: 'keyId_XEDULICH',
                ten: 'Xe du lịch'
            }
        }, {
            _id: 'keyId_XE7CHO',
            ten: 'Xe 7 chỗ',
            order: 300,
            chung_loai: {
                _id: 'keyId_XEDULICH',
                ten: 'Xe du lịch'
            }
        }, {
            _id: 'keyId_XE15CHO',
            ten: 'Xe 15 chỗ',
            order: 400,
            chung_loai: {
                _id: 'keyId_XEDULICH',
                ten: 'Xe du lịch'
            }
        }];
    }
}

const name = 'tbisPhanLoaiDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisPhanLoaiDataService);