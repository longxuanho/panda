import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
// import { ThietBis } from '../../../api/tbis/thietbis/thietbis';

class TbisNguonGocDataService {

    constructor() {
        'ngInject';
        this.hangsanxuats = queryHangSanXuats();
        this.models = queryModels();
        this.vendors = queryVendors();

        this.selectOptions = {
            hangsanxuats: buildHangSanXuatOptions(this.hangsanxuats),
            models: buildModelOptions(this.models),
            vendors: buildVendorOptions(this.vendors)
        }
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    getHangSanXuats() {
        return this.hangsanxuats;
    }

    getModels() {
        return this.models;
    }
}

const name = 'tbisNguonGocDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisNguonGocDataService);

function queryHangSanXuats() {
    "use strict";
    return [{
        _id: 'keyId_hangsxs_ALIMAX',
        ma: 'ALIMAX',
        ten: 'Alimax'
    }, {
        _id: 'keyId_hangsxs_BINHTRIEU',
        ma: 'BINHTRIEU',
        ten: 'Bình Triệu'
    }, {
        _id: 'keyId_hangsxs_BOSS',
        ma: 'BOSS',
        ten: 'BOSS'
    }, {
        _id: 'keyId_hangsxs_CAPACITY',
        ma: 'CAPACITY',
        ten: 'Capacity'
    }, {
        _id: 'keyId_hangsxs_CHANPHAT',
        ma: 'CHANPHAT',
        ten: 'Chấn Phát'
    }, {
        _id: 'keyId_hangsxs_CHIENYOU',
        ma: 'CHIENYOU',
        ten: 'Chienyou'
    }, {
        _id: 'keyId_hangsxs_UNKNOWN',
        ma: 'UNKNOWN',
        ten: 'Chưa xác định'
    }, {
        _id: 'keyId_hangsxs_CIMC',
        ma: 'CIMC',
        ten: 'CIMC'
    }, {
        _id: 'keyId_hangsxs_CONGDANH',
        ma: 'CONGDANH',
        ten: 'Công Danh'
    }, {
        _id: 'keyId_hangsxs_CUMMINS',
        ma: 'CUMMINS',
        ten: 'Cummins'
    }, {
        _id: 'keyId_hangsxs_DAEWOO',
        ma: 'DAEWOO',
        ten: 'Daewoo'
    }, {
        _id: 'keyId_hangsxs_DAIHATSU',
        ma: 'DAIHATSU',
        ten: 'Daihatsu'
    }, {
        _id: 'keyId_hangsxs_DETROIT',
        ma: 'DETROIT',
        ten: 'Detroit'
    }, {
        _id: 'keyId_hangsxs_DEUTZ',
        ma: 'DEUTZ',
        ten: 'Deutz'
    }, {
        _id: 'keyId_hangsxs_DGA',
        ma: 'DGA',
        ten: 'DGA'
    }, {
        _id: 'keyId_hangsxs_DIAN',
        ma: 'DIAN',
        ten: 'Dĩ An'
    }, {
        _id: 'keyId_hangsxs_DVKT',
        ma: 'DVKT',
        ten: 'Dịch Vụ Kỹ Thuật'
    }, {
        _id: 'keyId_hangsxs_DONGFENG',
        ma: 'DONGFENG',
        ten: 'Dongfeng'
    }, {
        _id: 'keyId_hangsxs_DOOSAN',
        ma: 'DOOSAN',
        ten: 'Doosan'
    }, {
        _id: 'keyId_hangsxs_FANTUZZI',
        ma: 'FANTUZZI',
        ten: 'Fantuzzi'
    }, {
        _id: 'keyId_hangsxs_FERRARI',
        ma: 'FERRARI',
        ten: 'Ferrari'
    }, {
        _id: 'keyId_hangsxs_FORD',
        ma: 'FORD',
        ten: 'Ford'
    }, {
        _id: 'keyId_hangsxs_FREIGHT',
        ma: 'FREIGHT',
        ten: 'Freightliner'
    }, {
        _id: 'keyId_hangsxs_GENE',
        ma: 'GENE',
        ten: 'Gene'
    }, {
        _id: 'keyId_hangsxs_GMC',
        ma: 'GMC',
        ten: 'GMC'
    }, {
        _id: 'keyId_hangsxs_HANAM',
        ma: 'HANAM',
        ten: 'Hà Nam'
    }, {
        _id: 'keyId_hangsxs_HINO',
        ma: 'HINO',
        ten: 'Hino'
    }, {
        _id: 'keyId_hangsxs_HONDA',
        ma: 'HONDA',
        ten: 'Honda'
    }, {
        _id: 'keyId_hangsxs_HOWO',
        ma: 'HOWO',
        ten: 'Howo'
    }, {
        _id: 'keyId_hangsxs_HUUTOAN',
        ma: 'HUUTOAN',
        ten: 'Hữu Toàn'
    }, {
        _id: 'keyId_hangsxs_HUYNDAI',
        ma: 'HUYNDAI',
        ten: 'Huyndai'
    }, {
        _id: 'keyId_hangsxs_ISUZU',
        ma: 'ISUZU',
        ten: 'Isuzu'
    }, {
        _id: 'keyId_hangsxs_JLG',
        ma: 'JLG',
        ten: 'JLG'
    }, {
        _id: 'keyId_hangsxs_KALMAR',
        ma: 'KALMAR',
        ten: 'Kalmar'
    }, {
        _id: 'keyId_hangsxs_KAMAZ',
        ma: 'KAMAZ',
        ten: 'Kamaz'
    }, {
        _id: 'keyId_hangsxs_KC',
        ma: 'KC',
        ten: 'KC'
    }, {
        _id: 'keyId_hangsxs_KIA',
        ma: 'KIA',
        ten: 'KIA'
    }, {
        _id: 'keyId_hangsxs_KOCKS',
        ma: 'KOCKS',
        ten: 'Kocks Krane GmbH'
    }, {
        _id: 'keyId_hangsxs_KOMATSU',
        ma: 'KOMATSU',
        ten: 'Komatsu'
    }, {
        _id: 'keyId_hangsxs_KE',
        ma: 'KE',
        ten: 'Kranbau Eberswalde'
    }, {
        _id: 'keyId_hangsxs_LANGCEBOSS',
        ma: 'LANGCEBOSS',
        ten: 'Langceboss'
    }, {
        _id: 'keyId_hangsxs_LIEBHERR',
        ma: 'LIEBHERR',
        ten: 'Liebherr'
    }, {
        _id: 'keyId_hangsxs_LINDE',
        ma: 'LINDE',
        ten: 'Linde'
    }, {
        _id: 'keyId_hangsxs_LUNA',
        ma: 'LUNA',
        ten: 'Luna'
    }, {
        _id: 'keyId_hangsxs_MAN',
        ma: 'MAN',
        ten: 'MAN'
    }, {
        _id: 'keyId_hangsxs_MARK',
        ma: 'MARK',
        ten: 'Mark'
    }, {
        _id: 'keyId_hangsxs_MAZ',
        ma: 'MAZ',
        ten: 'Maz'
    }, {
        _id: 'keyId_hangsxs_MAZDA',
        ma: 'MAZDA',
        ten: 'Mazda'
    }, {
        _id: 'keyId_hangsxs_MIJACK',
        ma: 'MIJACK',
        ten: 'Mi-jack'
    }, {
        _id: 'keyId_hangsxs_MITSUBISHI',
        ma: 'MITSUBISHI',
        ten: 'Mitsubishi'
    }, {
        _id: 'keyId_hangsxs_MITSUI',
        ma: 'MITSUI',
        ten: 'Mitsui'
    }, {
        _id: 'keyId_hangsxs_MORNING',
        ma: 'MORNING',
        ten: 'Morning'
    }, {
        _id: 'keyId_hangsxs_NOVELTEX',
        ma: 'NOVELTEX',
        ten: 'Noveltex'
    }, {
        _id: 'keyId_hangsxs_OTTAWA',
        ma: 'OTTAWA',
        ten: 'Ottawa'
    }, {
        _id: 'keyId_hangsxs_PH',
        ma: 'PH',
        ten: 'P&H'
    }, {
        _id: 'keyId_hangsxs_PERKINS',
        ma: 'PERKINS',
        ten: 'Perkins'
    }, {
        _id: 'keyId_hangsxs_RENAULT',
        ma: 'RENAULT',
        ten: 'Renault'
    }, {
        _id: 'keyId_hangsxs_SNP',
        ma: 'SNP',
        ten: 'Saigon Newport'
    }, {
        _id: 'keyId_hangsxs_SISUMAGUM',
        ma: 'SISUMAGUM',
        ten: 'Sisu Magum'
    }, {
        _id: 'keyId_hangsxs_STINIT',
        ma: 'STINIT',
        ten: 'Stinit'
    }, {
        _id: 'keyId_hangsxs_SUMITOMO',
        ma: 'SUMITOMO',
        ten: 'Sumitomo'
    }, {
        _id: 'keyId_hangsxs_TANTHANH',
        ma: 'TANTHANH',
        ten: 'Tân Thanh'
    }, {
        _id: 'keyId_hangsxs_TCM',
        ma: 'TCM',
        ten: 'TCM'
    }, {
        _id: 'keyId_hangsxs_TERBERG',
        ma: 'TERBERG',
        ten: 'Terberg'
    }, {
        _id: 'keyId_hangsxs_TEREX',
        ma: 'TEREX',
        ten: 'Terex'
    }, {
        _id: 'keyId_hangsxs_TOYOTA',
        ma: 'TOYOTA',
        ten: 'Toyota'
    }, {
        _id: 'keyId_hangsxs_UAZ',
        ma: 'UAZ',
        ten: 'UAZ'
    }, {
        _id: 'keyId_hangsxs_UDTRUCKS',
        ma: 'UDTRUCKS',
        ten: 'UD Trucks'
    }, {
        _id: 'keyId_hangsxs_VALMET',
        ma: 'VALMET',
        ten: 'Valmet'
    }, {
        _id: 'keyId_hangsxs_VINAXUKI',
        ma: 'VINAXUKI',
        ten: 'Vinaxuki'
    }, {
        _id: 'keyId_hangsxs_VOLVO',
        ma: 'VOLVO',
        ten: 'Volvo'
    }, {
        _id: 'keyId_hangsxs_YALE',
        ma: 'YALE',
        ten: 'Yale'
    }, {
        _id: 'keyId_hangsxs_ZIN',
        ma: 'ZIN',
        ten: 'ZIN'
    }, {
        _id: 'keyId_hangsxs_ZPMC',
        ma: 'ZPMC',
        ten: 'ZPMC'
    }];
}

function queryModels() {
    "use strict";
    return [{
        _id: 'keyID_models_DAEWOO_DWV3TEF',
        ten: 'DWV3TEF',
        hang_san_xuat: {
            _id: 'keyId_hangsxs_DAEWOO',
            ma: 'DAEWOO',
            ten: 'Daewoo'
        }
    }, {
        _id: 'keyID_models_DAEWOO_NOVUS',
        ten: 'NOVUS',
        hang_san_xuat: {
            _id: 'keyId_hangsxs_DAEWOO',
            ma: 'DAEWOO',
            ten: 'Daewoo'
        }
    }, {
        _id: 'keyID_models_HUYNDAI_HD700',
        ten: 'HD700',
        hang_san_xuat: {
            _id: 'keyId_hangsxs_HUYNDAI',
            ma: 'HUYNDAI',
            ten: 'Huyndai'
        }
    }, {
        _id: 'keyID_models_HUYNDAI_PORTER_1_0',
        ten: 'PORTER 1.0T',
        hang_san_xuat: {
            _id: 'keyId_hangsxs_HUYNDAI',
            ma: 'HUYNDAI',
            ten: 'Huyndai'
        }
    }, {
        _id: 'keyID_models_HUYNDAI_PORTER_1_25',
        ten: 'PORTER 1.25T',
        hang_san_xuat: {
            _id: 'keyId_hangsxs_HUYNDAI',
            ma: 'HUYNDAI',
            ten: 'Huyndai'
        }
    }, {
        _id: 'keyID_models_HUYNDAI_STAREX',
        ten: 'STAREX',
        hang_san_xuat: {
            _id: 'keyId_hangsxs_HUYNDAI',
            ma: 'HUYNDAI',
            ten: 'Huyndai'
        }
    }];
}

function queryVendors() {
    "use strict";
    return [{
        _id: 'keyId_vendors_GIAVIETKHANG',
        ten: 'Gia Việt Khang'
    }, {
        _id: 'keyId_vendors_UNICO',
        ten: 'Unico Vina'
    }]
}

function buildHangSanXuatOptions(hangsanxuats) {
    "use strict";
    return _.pluck(hangsanxuats, 'ten');
}

function buildModelOptions(models) {
    "use strict";
    try {
        let result = _.groupBy(models, (model) => {
            return model.hang_san_xuat.ten;
        });
        return _.mapObject(result, function(val, key) {
            return _.pluck(val, 'ten');
        });
    } catch (error) {
        console.log('Có lỗi khi xử lý thông tin về Nguồn Gốc > Model (Dữ liệu từ CSDL không đồng bộ). Kiểm tra lại CSDL. Chi tiết:', error.message);
    }
    return [];
}

function buildVendorOptions(vendors) {
    "use strict";
    return _.pluck(vendors, 'ten');
}