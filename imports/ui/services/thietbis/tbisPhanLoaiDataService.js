import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import { TbisHelpers } from '../../../api/thietbis/tbisHelpers';

class TbisPhanLoaiDataService {

    constructor() {
        'ngInject';
        

        // Chuẩn bị đặt helper() tại đây để truy vấn thời gian thực
        // this.nhoms = queryNhoms();
        this.chungloais = queryChungLoais();
        this.loais = queryLoais();

        this.options = {
            // nhoms: buildNhomOptions(this.nhoms),
            chungloais: buildChungLoaiOptions(this.chungloais),
            loais: buildLoaiOptions(this.loais)
        };
    }

    getSelectOptions() {
        return this.options;
    }
    
    queryTest() {
        return TbisHelpers.find({
            subject: 'phanloais',
            category: 'nhoms'
        }, {
            sort: { order: 1 }
        }).fetch()
    }

    getNhoms() {
        return this.nhoms;
    }

    getChungLoais() {
        return this.chungloais;
    }

    getLoais() {
        return this.loais;
    }

}

const name = 'tbisPhanLoaiDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisPhanLoaiDataService);

function queryNhoms() {
    "use strict";
    return TbisHelpers.find({
        subject: 'phanloais',
        category: 'nhoms'
    }, {
        sort: { order: 1 }
    }).fetch();
}
//
// function queryNhoms() {
//     "use strict";
//     return [{
//         _id: 'keyId_tbis_TBN',
//         ten: 'Thiết bị nâng',
//         order: 100
//     }, {
//         _id: 'keyId_tbis_XMY',
//         ten: 'Xe máy',
//         order: 200
//     }, {
//         _id: 'keyId_tbis_TTH',
//         ten: 'Tàu thuyền',
//         order: 300
//     }, {
//         _id: 'keyId_tbis_TRN',
//         ten: 'Trạm nguồn',
//         order: 400
//     }, {
//         _id: 'keyId_tbis_TLY',
//         ten: 'Thanh lý',
//         order: 500
//     }];
// }

function queryChungLoais() {
    "use strict";
    return [{
        _id: 'keyId_tbis_CAUBO',
        ten: 'Cẩu bờ',
        order: 100,
        nhom: {
            _id: 'keyId_tbis_TBN',
            ten: 'Thiết bị nâng'
        }
    }, {
        _id: 'keyId_tbis_CAUKHUNG',
        ten: 'Cẩu khung',
        order: 200,
        nhom: {
            _id: 'keyId_tbis_TBN',
            ten: 'Thiết bị nâng'
        }
    }, {
        _id: 'keyId_tbis_XENANG',
        ten: 'Xe nâng',
        order: 300,
        nhom: {
            _id: 'keyId_tbis_TBN',
            ten: 'Thiết bị nâng'
        }
    }, {
        _id: 'keyId_tbis_KHUNGCHUPROI',
        ten: 'Khung chụp rời',
        order: 400,
        nhom: {
            _id: 'keyId_tbis_TBN',
            ten: 'Thiết bị nâng'
        }
    }, {
        _id: 'keyId_tbis_VANTHANG',
        ten: 'Vận thăng',
        order: 500,
        nhom: {
            _id: 'keyId_tbis_TBN',
            ten: 'Thiết bị nâng'
        }
    }, {
        _id: 'keyId_tbis_KHAC',
        ten: 'TB nâng khác',
        order: 600,
        nhom: {
            _id: 'keyId_tbis_TBN',
            ten: 'Thiết bị nâng'
        }
    }, {
        _id: 'keyId_tbis_DAUKEO',
        ten: 'Đầu kéo',
        order: 100,
        nhom: {
            _id: 'keyId_tbis_XMY',
            ten: 'Xe máy'
        }
    }, {
        _id: 'keyId_tbis_ROMOOC',
        ten: 'Rơ móoc',
        order: 200,
        nhom: {
            _id: 'keyId_tbis_XMY',
            ten: 'Xe máy'
        }
    }, {
        _id: 'keyId_tbis_XETAIBANTAI',
        ten: 'Xe tải/bán tải',
        order: 300,
        nhom: {
            _id: 'keyId_tbis_XMY',
            ten: 'Xe máy'
        }
    }, {
        _id: 'keyId_tbis_XECHUYENDUNG',
        ten: 'Xe chuyên dụng',
        order: 400,
        nhom: {
            _id: 'keyId_tbis_XMY',
            ten: 'Xe máy'
        }
    }, {
        _id: 'keyId_tbis_XEDULICH',
        ten: 'Xe du lịch',
        order: 500,
        nhom: {
            _id: 'keyId_tbis_XMY',
            ten: 'Xe máy'
        }
    }, {
        _id: 'keyId_tbis_MOTO',
        ten: 'Mô tô',
        order: 600,
        nhom: {
            _id: 'keyId_tbis_XMY',
            ten: 'Xe máy'
        }
    }, {
        _id: 'keyId_tbis_CANO',
        ten: 'Ca nô',
        order: 100,
        nhom: {
            _id: 'keyId_tbis_TTH',
            ten: 'Tàu thuyền'
        }
    }, {
        _id: 'keyId_tbis_TAU',
        ten: 'Tàu',
        order: 200,
        nhom: {
            _id: 'keyId_tbis_TTH',
            ten: 'Tàu thuyền'
        }
    }, {
        _id: 'keyId_tbis_SALAN',
        ten: 'Sà lan',
        order: 400,
        nhom: {
            _id: 'keyId_tbis_TTH',
            ten: 'Tàu thuyền'
        }
    }, {
        _id: 'keyId_tbis_MAYPHAT',
        ten: 'Máy phát',
        order: 500,
        nhom: {
            _id: 'keyId_tbis_TRN',
            ten: 'Trạm nguồn'
        }
    }];
}

function queryLoais() {
    "use strict";
    return [{
        _id: 'keyId_tbis_KE',
        ten: 'KE',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_CAUBO',
            ten: 'Cẩu bờ'
        }
    }, {
        _id: 'keyId_tbis_KOCKS',
        ten: 'KOCKS',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_CAUBO',
            ten: 'Cẩu bờ'
        }
    }, {
        _id: 'keyId_tbis_LBCODINH',
        ten: 'LB cố định',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_CAUBO',
            ten: 'Cẩu bờ'
        }
    }, {
        _id: 'keyId_tbis_LBRAY',
        ten: 'LB ray',
        order: 400,
        chung_loai: {
            _id: 'keyId_tbis_CAUBO',
            ten: 'Cẩu bờ'
        }
    }, {
        _id: 'keyId_tbis_Mitsui',
        ten: 'Mitsui',
        order: 500,
        chung_loai: {
            _id: 'keyId_tbis_CAUBO',
            ten: 'Cẩu bờ'
        }
    }, {
        _id: 'keyId_tbis_ZPMC',
        ten: 'ZPMC',
        order: 600,
        chung_loai: {
            _id: 'keyId_tbis_CAUBO',
            ten: 'Cẩu bờ'
        }
    }, {
        _id: 'keyId_tbis_RTG3+1',
        ten: 'RTG 3+1',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_CAUKHUNG',
            ten: 'Cẩu khung'
        }
    }, {
        _id: 'keyId_tbis_RTG6+1',
        ten: 'RTG 6+1',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_CAUKHUNG',
            ten: 'Cẩu khung'
        }
    }, {
        _id: 'keyId_tbis_RMG',
        ten: 'RMG',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_CAUKHUNG',
            ten: 'Cẩu khung'
        }
    }, {
        _id: 'keyId_tbis_XENANGHANG',
        ten: 'Xe nâng hàng',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_XENANG',
            ten: 'Xe nâng'
        }
    }, {
        _id: 'keyId_tbis_XENANGRONG',
        ten: 'Xe nâng rỗng',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_XENANG',
            ten: 'Xe nâng'
        }
    }, {
        _id: 'keyId_tbis_XENANGKHO',
        ten: 'Xe nâng kho',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_XENANG',
            ten: 'Xe nâng'
        }
    }, {
        _id: 'keyId_tbis_KHUNGCHUP20',
        ten: 'Khung chụp 20ft',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_KHUNGCHUPROI',
            ten: 'Khung chụp rời'
        }
    }, {
        _id: 'keyId_tbis_KHUNGCHUP40',
        ten: 'Khung chụp 40ft',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_KHUNGCHUPROI',
            ten: 'Khung chụp rời'
        }
    }, {
        _id: 'keyId_tbis_VANTHANGCB',
        ten: 'Vận thăng cẩu bờ',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_VANTHANG',
            ten: 'Vận thăng'
        }
    }, {
        _id: 'keyId_tbis_XETHANG',
        ten: 'Xe thang',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_XEPVSC',
        ten: 'Xe phục vụ SC',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_CAUTRUCXUONG',
        ten: 'Cầu trục xưởng',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_CAUOTO',
        ten: 'Cẩu ô tô',
        order: 400,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_XESUACHUA',
        ten: 'Xe sửa chữa',
        order: 500,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_CAUBANHXICH',
        ten: 'Cẩu bánh xích',
        order: 600,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_CAUBANHLOP',
        ten: 'Cẩu bánh lốp',
        order: 700,
        chung_loai: {
            _id: 'keyId_tbis_KHAC',
            ten: 'TB nâng khác'
        }
    }, {
        _id: 'keyId_tbis_DKNOIBO',
        ten: 'Đầu kéo nội bộ',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_DAUKEO',
            ten: 'Đầu kéo'
        }
    }, {
        _id: 'keyId_tbis_DKCHAYNGOAI',
        ten: 'Đầu kéo chạy ngoài',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_DAUKEO',
            ten: 'Đầu kéo'
        }
    }, {
        _id: 'keyId_tbis_ROMOOC20',
        ten: 'Rơ móoc 20ft',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_ROMOOC',
            ten: 'Rơ móoc'
        }
    }, {
        _id: 'keyId_tbis_ROMOOC40',
        ten: 'Rơ móoc 40ft',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_ROMOOC',
            ten: 'Rơ móoc'
        }
    }, {
        _id: 'keyId_tbis_ROMOOC45',
        ten: 'Rơ móoc 45ft',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_ROMOOC',
            ten: 'Rơ móoc'
        }
    }, {
        _id: 'keyId_tbis_XETAI',
        ten: 'Xe tải',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_XETAIBANTAI',
            ten: 'Xe tải/bán tải'
        }
    }, {
        _id: 'keyId_tbis_XEBANTAI',
        ten: 'Xe bán tải',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_XETAIBANTAI',
            ten: 'Xe tải/bán tải'
        }
    }, {
        _id: 'keyId_tbis_XENOIBO',
        ten: 'Xe nội bộ',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XECUUHOA',
        ten: 'Xe cứu hỏa',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XEPVCUUHOA',
        ten: 'Xe phục vụ cứu hỏa',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XECUUTHUONG',
        ten: 'Xe cứu thương',
        order: 400,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XEBON',
        ten: 'Xe bồn',
        order: 500,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XERUACAU',
        ten: 'Xe rửa cẩu',
        order: 600,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XECHIHUY',
        ten: 'Xe chỉ huy',
        order: 700,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XEQUETDUONG',
        ten: 'Xe quét đường',
        order: 800,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XETUOIDUONG',
        ten: 'Xe tưới đường',
        order: 900,
        chung_loai: {
            _id: 'keyId_tbis_XECHUYENDUNG',
            ten: 'Xe chuyên dụng'
        }
    }, {
        _id: 'keyId_tbis_XEDUADON',
        ten: 'Xe bus đưa đón',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_XEDULICH',
            ten: 'Xe du lịch'
        }
    }, {
        _id: 'keyId_tbis_XE4CHO',
        ten: 'Xe 4 chỗ',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_XEDULICH',
            ten: 'Xe du lịch'
        }
    }, {
        _id: 'keyId_tbis_XE7CHO',
        ten: 'Xe 7 chỗ',
        order: 300,
        chung_loai: {
            _id: 'keyId_tbis_XEDULICH',
            ten: 'Xe du lịch'
        }
    }, {
        _id: 'keyId_tbis_XE15CHO',
        ten: 'Xe 15 chỗ',
        order: 400,
        chung_loai: {
            _id: 'keyId_tbis_XEDULICH',
            ten: 'Xe du lịch'
        }
    }, {
        _id: 'keyId_tbis_CANO_CANO',
        ten: 'Ca nô',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_CANO',
            ten: 'Ca nô'
        }
    }, {
        _id: 'keyId_tbis_TAU_TAUKEO',
        ten: 'Tàu kéo',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_TAU',
            ten: 'Tàu'
        }
    }, {
        _id: 'keyId_tbis_TAU_TAUKHACH',
        ten: 'Tàu khách',
        order: 200,
        chung_loai: {
            _id: 'keyId_tbis_TAU',
            ten: 'Tàu'
        }
    }, {
        _id: 'keyId_tbis_SALAN_SALAN',
        ten: 'Sà lan',
        order: 100,
        chung_loai: {
            _id: 'keyId_tbis_SALAN',
            ten: 'Sà lan'
        }
    }, {
        _id: 'keyId_tbis_MAYPHAT_MAYPHAT',
        ten: 'Máy phát',
        order: 500,
        chung_loai: {
            _id: 'keyId_tbis_MAYPHAT',
            ten: 'Máy phát'
        }
    }];
}

function buildNhomOptions(nhoms) {
    "use strict";
    return _.pluck(nhoms, 'ten');
}

function buildChungLoaiOptions(chungloais) {
    "use strict";
    try {
        let result = _.groupBy(chungloais, (chungloai) => {
            return chungloai.nhom.ten;
        });
        // Chuyển key Thiết bị nâng từ [Object] thành ['String'] chỉ chứa tên các chủng lại 'Cẩu bờ', 'Cẩu khung',...
        return _.mapObject(result, function(val, key) {
            return _.pluck(val, 'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Phân Loại > Chủng Loại (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}

function buildLoaiOptions(loais) {
    "use strict";
    try {
        let result = _.groupBy(loais, (loai) => {
            return loai.chung_loai.ten;
        });
        return _.mapObject(result, function(val, key) {
            return _.pluck(val, 'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Phân Loại > Loại (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}