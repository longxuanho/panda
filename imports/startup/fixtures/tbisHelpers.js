import { Meteor } from 'meteor/meteor';
import { TbisHelpers } from '../../api/thietbis/tbisHelpers';

Meteor.startup(() => {
    console.log('start up server... ', TbisHelpers.find().count());

    console.log('test passed... ');
    if (TbisHelpers.find().count() === 0) {

        // Subject: DiaDiems

        console.log('start creating seed db...');

        const quocgias = [
            {
                _id: 'keyId_quocgias_ENGLAND',
                ten: 'Anh',
                name: 'England'
            },{
                _id: 'keyId_quocgias_BELARUS',
                ten: 'Belarus',
                name: 'Belarus'
            }, {
                _id: 'keyId_quocgias_TAIWAN',
                ten: 'Đài Loan',
                name: 'Taiwan'
            }, {
                _id: 'keyId_quocgias_GERMANY',
                ten: 'Đức',
                name: 'Germany'
            }, {
                _id: 'keyId_quocgias_KOREA',
                ten: 'Hàn Quốc',
                name: 'Korea'
            }, {
                _id: 'keyId_quocgias_US',
                ten: 'Hoa Kỳ',
                name: 'US'
            }, {
                _id: 'keyId_quocgias_MALAYSIA',
                ten: 'Malaysia',
                name: 'Malaysia'
            }, {
                _id: 'keyId_quocgias_JAPAN',
                ten: 'Nhật Bản',
                name: 'Japan'
            }, {
                _id: 'keyId_quocgias_FRANCE',
                ten: 'Pháp',
                name: 'France'
            }, {
                _id: 'keyId_quocgias_FINLAND',
                ten: 'Phần Lan',
                name: 'Finland'
            }, {
                _id: 'keyId_quocgias_RUSSIA',
                ten: 'Nga',
                name: 'Russia'
            }, {
                _id: 'keyId_quocgias_SPAIN',
                ten: 'Tây Ban Nha',
                name: 'Spain'
            }, {
                _id: 'keyId_quocgias_SWEDEN',
                ten: 'Thụy Điển',
                name: 'Sweden'
            }, {
                _id: 'keyId_quocgias_CHINA',
                ten: 'Trung Quốc',
                name: 'China'
            }, {
                _id: 'keyId_quocgias_VIETNAM',
                ten: 'Việt Nam',
                name: 'Vietnam'
            }, {
                _id: 'keyId_quocgias_ITALIA',
                ten: 'Ý',
                name: 'Italia'
            }
        ];

        const khuvucs = [
            {
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
                _id: 'keyId_khuvucs_CME_TCTT',
                ma: 'CME_TCTT',
                ten: 'Cái Mép TCTT'
            }, {
                _id: 'keyId_khuvucs_CMR',
                ma: 'CMR',
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
                ma: 'DTV',
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
                _id: 'keyId_khuvucs_PHHU',
                ma: 'PHHU',
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
                _id: 'keyId_khuvucs_TCA',
                ma: 'TCA',
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
            }
        ];

        // Subject: NguonGocs

        const hangsanxuats = [
            {
                _id: 'keyId_hangsanxuats_ALIMAX',
                ma: 'ALIMAX',
                ten: 'Alimax'
            }, {
                _id: 'keyId_hangsanxuats_BINHTRIEU',
                ma: 'BINHTRIEU',
                ten: 'Bình Triệu'
            }, {
                _id: 'keyId_hangsanxuats_BOSS',
                ma: 'BOSS',
                ten: 'BOSS'
            }, {
                _id: 'keyId_hangsanxuats_CAPACITY',
                ma: 'CAPACITY',
                ten: 'Capacity'
            }, {
                _id: 'keyId_hangsanxuats_CHANPHAT',
                ma: 'CHANPHAT',
                ten: 'Chấn Phát'
            }, {
                _id: 'keyId_hangsanxuats_CHIENYOU',
                ma: 'CHIENYOU',
                ten: 'Chienyou'
            }, {
                _id: 'keyId_hangsanxuats_UNKNOWN',
                ma: 'UNKNOWN',
                ten: 'Chưa xác định'
            }, {
                _id: 'keyId_hangsanxuats_CIMC',
                ma: 'CIMC',
                ten: 'CIMC'
            }, {
                _id: 'keyId_hangsanxuats_CONGDANH',
                ma: 'CONGDANH',
                ten: 'Công Danh'
            }, {
                _id: 'keyId_hangsanxuats_CUMMINS',
                ma: 'CUMMINS',
                ten: 'Cummins'
            }, {
                _id: 'keyId_hangsanxuats_DAEWOO',
                ma: 'DAEWOO',
                ten: 'Daewoo'
            }, {
                _id: 'keyId_hangsanxuats_DAIHATSU',
                ma: 'DAIHATSU',
                ten: 'Daihatsu'
            }, {
                _id: 'keyId_hangsanxuats_DETROIT',
                ma: 'DETROIT',
                ten: 'Detroit'
            }, {
                _id: 'keyId_hangsanxuats_DEUTZ',
                ma: 'DEUTZ',
                ten: 'Deutz'
            }, {
                _id: 'keyId_hangsanxuats_DGA',
                ma: 'DGA',
                ten: 'DGA'
            }, {
                _id: 'keyId_hangsanxuats_DIAN',
                ma: 'DIAN',
                ten: 'Dĩ An'
            }, {
                _id: 'keyId_hangsanxuats_DVKT',
                ma: 'DVKT',
                ten: 'Dịch Vụ Kỹ Thuật'
            }, {
                _id: 'keyId_hangsanxuats_DONGFENG',
                ma: 'DONGFENG',
                ten: 'Dongfeng'
            }, {
                _id: 'keyId_hangsanxuats_DOOSAN',
                ma: 'DOOSAN',
                ten: 'Doosan'
            }, {
                _id: 'keyId_hangsanxuats_FANTUZZI',
                ma: 'FANTUZZI',
                ten: 'Fantuzzi'
            }, {
                _id: 'keyId_hangsanxuats_FERRARI',
                ma: 'FERRARI',
                ten: 'Ferrari'
            }, {
                _id: 'keyId_hangsanxuats_FORD',
                ma: 'FORD',
                ten: 'Ford'
            }, {
                _id: 'keyId_hangsanxuats_FREIGHT',
                ma: 'FREIGHT',
                ten: 'Freightliner'
            }, {
                _id: 'keyId_hangsanxuats_GENE',
                ma: 'GENE',
                ten: 'Gene'
            }, {
                _id: 'keyId_hangsanxuats_GMC',
                ma: 'GMC',
                ten: 'GMC'
            }, {
                _id: 'keyId_hangsanxuats_HANAM',
                ma: 'HANAM',
                ten: 'Hà Nam'
            }, {
                _id: 'keyId_hangsanxuats_HINO',
                ma: 'HINO',
                ten: 'Hino'
            }, {
                _id: 'keyId_hangsanxuats_HONDA',
                ma: 'HONDA',
                ten: 'Honda'
            }, {
                _id: 'keyId_hangsanxuats_HOWO',
                ma: 'HOWO',
                ten: 'Howo'
            }, {
                _id: 'keyId_hangsanxuats_HUUTOAN',
                ma: 'HUUTOAN',
                ten: 'Hữu Toàn'
            }, {
                _id: 'keyId_hangsanxuats_HUYNDAI',
                ma: 'HUYNDAI',
                ten: 'Huyndai'
            }, {
                _id: 'keyId_hangsanxuats_ISUZU',
                ma: 'ISUZU',
                ten: 'Isuzu'
            }, {
                _id: 'keyId_hangsanxuats_JLG',
                ma: 'JLG',
                ten: 'JLG'
            }, {
                _id: 'keyId_hangsanxuats_KALMAR',
                ma: 'KALMAR',
                ten: 'Kalmar'
            }, {
                _id: 'keyId_hangsanxuats_KAMAZ',
                ma: 'KAMAZ',
                ten: 'Kamaz'
            }, {
                _id: 'keyId_hangsanxuats_KC',
                ma: 'KC',
                ten: 'KC'
            }, {
                _id: 'keyId_hangsanxuats_KIA',
                ma: 'KIA',
                ten: 'KIA'
            }, {
                _id: 'keyId_hangsanxuats_KOCKS',
                ma: 'KOCKS',
                ten: 'Kocks Krane GmbH'
            }, {
                _id: 'keyId_hangsanxuats_KOMATSU',
                ma: 'KOMATSU',
                ten: 'Komatsu'
            }, {
                _id: 'keyId_hangsanxuats_KE',
                ma: 'KE',
                ten: 'Kranbau Eberswalde'
            }, {
                _id: 'keyId_hangsanxuats_LANGCEBOSS',
                ma: 'LANGCEBOSS',
                ten: 'Langceboss'
            }, {
                _id: 'keyId_hangsanxuats_LIEBHERR',
                ma: 'LIEBHERR',
                ten: 'Liebherr'
            }, {
                _id: 'keyId_hangsanxuats_LINDE',
                ma: 'LINDE',
                ten: 'Linde'
            }, {
                _id: 'keyId_hangsanxuats_LUNA',
                ma: 'LUNA',
                ten: 'Luna'
            }, {
                _id: 'keyId_hangsanxuats_MAN',
                ma: 'MAN',
                ten: 'MAN'
            }, {
                _id: 'keyId_hangsanxuats_MARK',
                ma: 'MARK',
                ten: 'Mark'
            }, {
                _id: 'keyId_hangsanxuats_MAZ',
                ma: 'MAZ',
                ten: 'Maz'
            }, {
                _id: 'keyId_hangsanxuats_MAZDA',
                ma: 'MAZDA',
                ten: 'Mazda'
            }, {
                _id: 'keyId_hangsanxuats_MIJACK',
                ma: 'MIJACK',
                ten: 'Mi-jack'
            }, {
                _id: 'keyId_hangsanxuats_MITSUBISHI',
                ma: 'MITSUBISHI',
                ten: 'Mitsubishi'
            }, {
                _id: 'keyId_hangsanxuats_MITSUI',
                ma: 'MITSUI',
                ten: 'Mitsui'
            }, {
                _id: 'keyId_hangsanxuats_MORNING',
                ma: 'MORNING',
                ten: 'Morning'
            }, {
                _id: 'keyId_hangsanxuats_NOVELTEX',
                ma: 'NOVELTEX',
                ten: 'Noveltex'
            }, {
                _id: 'keyId_hangsanxuats_OTTAWA',
                ma: 'OTTAWA',
                ten: 'Ottawa'
            }, {
                _id: 'keyId_hangsanxuats_PH',
                ma: 'PH',
                ten: 'P&H'
            }, {
                _id: 'keyId_hangsanxuats_PERKINS',
                ma: 'PERKINS',
                ten: 'Perkins'
            }, {
                _id: 'keyId_hangsanxuats_RENAULT',
                ma: 'RENAULT',
                ten: 'Renault'
            }, {
                _id: 'keyId_hangsanxuats_SNP',
                ma: 'SNP',
                ten: 'Saigon Newport'
            }, {
                _id: 'keyId_hangsanxuats_SISUMAGUM',
                ma: 'SISUMAGUM',
                ten: 'Sisu Magum'
            }, {
                _id: 'keyId_hangsanxuats_STINIT',
                ma: 'STINIT',
                ten: 'Stinit'
            }, {
                _id: 'keyId_hangsanxuats_SUMITOMO',
                ma: 'SUMITOMO',
                ten: 'Sumitomo'
            }, {
                _id: 'keyId_hangsanxuats_TANTHANH',
                ma: 'TANTHANH',
                ten: 'Tân Thanh'
            }, {
                _id: 'keyId_hangsanxuats_TCM',
                ma: 'TCM',
                ten: 'TCM'
            }, {
                _id: 'keyId_hangsanxuats_TERBERG',
                ma: 'TERBERG',
                ten: 'Terberg'
            }, {
                _id: 'keyId_hangsanxuats_TEREX',
                ma: 'TEREX',
                ten: 'Terex'
            }, {
                _id: 'keyId_hangsanxuats_TOYOTA',
                ma: 'TOYOTA',
                ten: 'Toyota'
            }, {
                _id: 'keyId_hangsanxuats_UAZ',
                ma: 'UAZ',
                ten: 'UAZ'
            }, {
                _id: 'keyId_hangsanxuats_UDTRUCKS',
                ma: 'UDTRUCKS',
                ten: 'UD Trucks'
            }, {
                _id: 'keyId_hangsanxuats_VALMET',
                ma: 'VALMET',
                ten: 'Valmet'
            }, {
                _id: 'keyId_hangsanxuats_VINAXUKI',
                ma: 'VINAXUKI',
                ten: 'Vinaxuki'
            }, {
                _id: 'keyId_hangsanxuats_VOLVO',
                ma: 'VOLVO',
                ten: 'Volvo'
            }, {
                _id: 'keyId_hangsanxuats_YALE',
                ma: 'YALE',
                ten: 'Yale'
            }, {
                _id: 'keyId_hangsanxuats_ZIN',
                ma: 'ZIN',
                ten: 'ZIN'
            }, {
                _id: 'keyId_hangsanxuats_ZPMC',
                ma: 'ZPMC',
                ten: 'ZPMC'
            }
        ];

        const models = [
            {
                _id: 'keyID_models_CAPACITY_TJ9000',
                ten: 'TJ9000',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CAPACITY',
                    ma: 'CAPACITY',
                    ten: 'Capacity'
                }
            }, {
                _id: 'keyID_models_CUMMINS_1045KVA',
                ten: '1045 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_CUMMINS_1065KVA',
                ten: '1065 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_CUMMINS_2000KVA',
                ten: '2000 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_CUMMINS_0380KVA',
                ten: '380 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_CUMMINS_0450KVA',
                ten: '450 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_CUMMINS_0550KVA',
                ten: '550 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_CUMMINS_0750KVA',
                ten: '750 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_CUMMINS',
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                _id: 'keyID_models_DAEWOO_DWV3TEF',
                ten: 'DWV3TEF',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_DAEWOO',
                    ma: 'DAEWOO',
                    ten: 'Daewoo'
                }
            }, {
                _id: 'keyID_models_DAEWOO_NOVUS',
                ten: 'NOVUS',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_DAEWOO',
                    ma: 'DAEWOO',
                    ten: 'Daewoo'
                }
            }, {
                _id: 'keyID_models_DEUTZ_0108KVA',
                ten: '108 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_DEUTZ',
                    ma: 'DEUTZ',
                    ten: 'Deutz'
                }
            }, {
                _id: 'keyID_models_DGA_0350KVA',
                ten: '350 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_DGA',
                    ma: 'DGA',
                    ten: 'DGA'
                }
            }, {
                _id: 'keyID_models_DIAN_1031KVA',
                ten: '1031 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_DIAN',
                    ma: 'DIAN',
                    ten: 'Dĩ An'
                }
            }, {
                _id: 'keyID_models_FORD_ESCAPE',
                ten: 'ESCAPE',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_FORD',
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                _id: 'keyID_models_FORD_EVEREST',
                ten: 'EVEREST',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_FORD',
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                _id: 'keyID_models_FORD_LEADER',
                ten: 'LEADER',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_FORD',
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                _id: 'keyID_models_DIAN_LEADER',
                ten: 'LEADER',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_FORD',
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                _id: 'keyID_models_DIAN_GENE_4522',
                ten: '45/22',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_GENE',
                    ma: 'GENE',
                    ten: 'Gene'
                }
            }, {
                _id: 'keyID_models_DIAN_HONDA_ACCORD_2_0',
                ten: 'ACCORD 2.0',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_HONDA',
                    ma: 'HONDA',
                    ten: 'Honda'
                }
            }, {
                _id: 'keyID_models_HUUTOAN_1031KVA',
                ten: '1031 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_HUUTOAN',
                    ma: 'HUUTOAN',
                    ten: 'Hữu Toàn'
                }
            }, {
                _id: 'keyID_models_HUYNDAI_HD700',
                ten: 'HD700',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_HUYNDAI',
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                _id: 'keyID_models_HUYNDAI_PORTER_1_0',
                ten: 'PORTER 1.0T',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_HUYNDAI',
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                _id: 'keyID_models_HUYNDAI_PORTER_1_25',
                ten: 'PORTER 1.25T',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_HUYNDAI',
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                _id: 'keyID_models_HUYNDAI_STAREX',
                ten: 'STAREX',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_HUYNDAI',
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                _id: 'keyID_models_ISUZU_1T9',
                ten: '1T9',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_ISUZU',
                    ma: 'ISUZU',
                    ten: 'Isuzu'
                }
            }, {
                _id: 'keyID_models_ISUZU_FRR90N',
                ten: 'FRR90N',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_ISUZU',
                    ma: 'ISUZU',
                    ten: 'Isuzu'
                }
            }, {
                _id: 'keyID_models_ISUZU_ZOOMLION',
                ten: 'ZOOMLION',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_ISUZU',
                    ma: 'ISUZU',
                    ten: 'Isuzu'
                }
            }, {
                _id: 'keyID_models_JLG_110HX',
                ten: '110 HX',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_JLG',
                    ma: 'JLG',
                    ten: 'JLG'
                }
            }, {
                _id: 'keyID_models_JLG_600AJ',
                ten: '600 AJ',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_JLG',
                    ma: 'JLG',
                    ten: 'JLG'
                }
            }, {
                _id: 'keyID_models_JLG_800A',
                ten: '800 A',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_JLG',
                    ma: 'JLG',
                    ten: 'JLG'
                }
            }, {
                _id: 'keyID_models_KALMAR_PT122',
                ten: 'PT122',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KALMAR',
                    ma: 'KALMAR',
                    ten: 'Kalmar'
                }
            }, {
                _id: 'keyID_models_KALMAR_54112',
                ten: '54112',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KALMAR',
                    ma: 'KALMAR',
                    ten: 'Kalmar'
                }
            }, {
                _id: 'keyID_models_KALMAR_54115',
                ten: '54115',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KALMAR',
                    ma: 'KALMAR',
                    ten: 'Kalmar'
                }
            }, {
                _id: 'keyID_models_KALMAR_K2700II',
                ten: 'K2700II',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KIA',
                    ma: 'KIA',
                    ten: 'KIA'
                }
            }, {
                _id: 'keyID_models_KOMATSU_D2_0',
                ten: 'D 2.0',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_KOMATSU_D2_5',
                ten: 'D 2.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_KOMATSU_D3_0',
                ten: 'D 3.0',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_KOMATSU_D4_5',
                ten: 'D 4.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_KOMATSU_G1_5',
                ten: 'G 1.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_KOMATSU_G2_0',
                ten: 'G 2.0',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_KOMATSU_FD25T',
                ten: 'FD25T',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_KOMATSU',
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                _id: 'keyID_models_MAZ_5337',
                ten: '5337',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_MAZ',
                    ma: 'MAZ',
                    ten: 'Maz'
                }
            }, {
                _id: 'keyID_models_MAZ_54323',
                ten: '54323',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_MAZ',
                    ma: 'MAZ',
                    ten: 'Maz'
                }
            }, {
                _id: 'keyID_models_MAZ_64229',
                ten: '64229',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_MAZ',
                    ma: 'MAZ',
                    ten: 'Maz'
                }
            }, {
                _id: 'keyID_models_MITSUBISHI_FUSO',
                ten: 'FUSO',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_MITSUBISHI',
                    ma: 'MITSUBISHI',
                    ten: 'Mitsubishi'
                }
            }, {
                _id: 'keyID_models_MITSUBISHI_FUSO',
                ten: 'FUSO',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_MITSUBISHI',
                    ma: 'MITSUBISHI',
                    ten: 'Mitsubishi'
                }
            }, {
                _id: 'keyID_models_PERKINS_1000KVA',
                ten: '1000 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_PERKINS',
                    ma: 'PERKINS',
                    ten: 'Perkins'
                }
            }, {
                _id: 'keyID_models_PERKINS_1031KVA',
                ten: '1031 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_PERKINS',
                    ma: 'PERKINS',
                    ten: 'Perkins'
                }
            }, {
                _id: 'keyID_models_TCM_D2_5',
                ten: 'D 2.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TCM',
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                _id: 'keyID_models_TCM_D4_5',
                ten: 'D 4.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TCM',
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                _id: 'keyID_models_TCM_G1_5',
                ten: 'G 1.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TCM',
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                _id: 'keyID_models_TCM_FD25T3',
                ten: 'FD25T3',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TCM',
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                _id: 'keyID_models_TCM_VM600',
                ten: 'VM600',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TCM',
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                _id: 'keyID_models_TERBERG_YT180',
                ten: 'YT180',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TERBERG',
                    ma: 'TERBERG',
                    ten: 'Terberg'
                }
            }, {
                _id: 'keyID_models_TERBERG_YT220',
                ten: 'YT220',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TERBERG',
                    ma: 'TERBERG',
                    ten: 'Terberg'
                }
            }, {
                _id: 'keyID_models_TOYOTA_ALTIS',
                ten: 'ALTIS',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_CAMRY_2_2',
                ten: 'CAMRY 2.2',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_CAMRY_2_4',
                ten: 'CAMRY 2.4',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_CAMRY_2_5',
                ten: 'CAMRY 2.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_COROLA_1_6',
                ten: 'COROLA 1.6',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_FORTUNER',
                ten: 'FORTUNER',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_G1_5',
                ten: 'G 1.5',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_HIACE_2ZR',
                ten: 'HIACE-2ZR',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_HILUX',
                ten: 'HILUX',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_INNOVAR',
                ten: 'INNOVAR',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_TOYOTA_ZACE',
                ten: 'ZACE',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_TOYOTA',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_UAZ_YA3469',
                ten: 'YA3469',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_UAZ',
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                _id: 'keyID_models_VINAXUKI_1T9',
                ten: '1T9',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_VINAXUKI',
                    ma: 'VINAXUKI',
                    ten: 'Vinaxuki'
                }
            }, {
                _id: 'keyID_models_VOLVO_0375KVA',
                ten: '375 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_VOLVO',
                    ma: 'VOLVO',
                    ten: 'Volvo'
                }
            }, {
                _id: 'keyID_models_VOLVO_0550KVA',
                ten: '550 KVA',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_VOLVO',
                    ma: 'VOLVO',
                    ten: 'Volvo'
                }
            }, {
                _id: 'keyID_models_YALE_C489',
                ten: 'C489',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_YALE',
                    ma: 'YALE',
                    ten: 'Yale'
                }
            }, {
                _id: 'keyID_models_ZIN_131',
                ten: '131',
                hang_san_xuat: {
                    _id: 'keyId_hangsanxuats_ZIN',
                    ma: 'ZIN',
                    ten: 'ZIN'
                }
            }
        ];

        const vendors = [
            {
                _id: 'keyId_vendors_GIAVIETKHANG',
                ten: 'Gia Việt Khang'
            }, {
                _id: 'keyId_vendors_UNICOVINA',
                ten: 'Unico Vina'
            }
        ];

        // Subject: PhanLoais
        
        const nhoms = [
            {
                _id: 'keyId_tbis_TBN',
                ten: 'Thiết bị nâng',
                order: 100
            }, {
                _id: 'keyId_tbis_XMY',
                ten: 'Xe máy',
                order: 200
            }, {
                _id: 'keyId_tbis_TTH',
                ten: 'Tàu thuyền',
                order: 300
            }, {
                _id: 'keyId_tbis_TRN',
                ten: 'Trạm nguồn',
                order: 400
            }, {
                _id: 'keyId_tbis_TLY',
                ten: 'Thanh lý',
                order: 500
            }  
        ];
        
        const chungloais = [
            {
                _id: 'keyId_tbis_TBN_CAUBO',
                ten: 'Cẩu bờ',
                order: 100,
                nhom: {
                    _id: 'keyId_tbis_TBN',
                    ten: 'Thiết bị nâng'
                }
            }, {
                _id: 'keyId_tbis_TBN_CAUKHUNG',
                ten: 'Cẩu khung',
                order: 200,
                nhom: {
                    _id: 'keyId_tbis_TBN',
                    ten: 'Thiết bị nâng'
                }
            }, {
                _id: 'keyId_tbis_TBN_XENANG',
                ten: 'Xe nâng',
                order: 300,
                nhom: {
                    _id: 'keyId_tbis_TBN',
                    ten: 'Thiết bị nâng'
                }
            }, {
                _id: 'keyId_tbis_TBN_KHUNGCHUPROI',
                ten: 'Khung chụp rời',
                order: 400,
                nhom: {
                    _id: 'keyId_tbis_TBN',
                    ten: 'Thiết bị nâng'
                }
            }, {
                _id: 'keyId_tbis_TBN_VANTHANG',
                ten: 'Vận thăng',
                order: 500,
                nhom: {
                    _id: 'keyId_tbis_TBN',
                    ten: 'Thiết bị nâng'
                }
            }, {
                _id: 'keyId_tbis_TBN_TBNKHAC',
                ten: 'TB nâng khác',
                order: 600,
                nhom: {
                    _id: 'keyId_tbis_TBN',
                    ten: 'Thiết bị nâng'
                }
            }, {
                _id: 'keyId_tbis_XMY_DAUKEO',
                ten: 'Đầu kéo',
                order: 100,
                nhom: {
                    _id: 'keyId_tbis_XMY',
                    ten: 'Xe máy'
                }
            }, {
                _id: 'keyId_tbis_XMY_ROMOOC',
                ten: 'Rơ móoc',
                order: 200,
                nhom: {
                    _id: 'keyId_tbis_XMY',
                    ten: 'Xe máy'
                }
            }, {
                _id: 'keyId_tbis_XMY_XETAIBANTAI',
                ten: 'Xe tải/bán tải',
                order: 300,
                nhom: {
                    _id: 'keyId_tbis_XMY',
                    ten: 'Xe máy'
                }
            }, {
                _id: 'keyId_tbis_XMY_XECHUYENDUNG',
                ten: 'Xe chuyên dụng',
                order: 400,
                nhom: {
                    _id: 'keyId_tbis_XMY',
                    ten: 'Xe máy'
                }
            }, {
                _id: 'keyId_tbis_XMY_XEDULICH',
                ten: 'Xe du lịch',
                order: 500,
                nhom: {
                    _id: 'keyId_tbis_XMY',
                    ten: 'Xe máy'
                }
            }, {
                _id: 'keyId_tbis_XMY_MOTO',
                ten: 'Mô tô',
                order: 600,
                nhom: {
                    _id: 'keyId_tbis_XMY',
                    ten: 'Xe máy'
                }
            }, {
                _id: 'keyId_tbis_XMY_CANO',
                ten: 'Ca nô',
                order: 100,
                nhom: {
                    _id: 'keyId_tbis_TTH',
                    ten: 'Tàu thuyền'
                }
            }, {
                _id: 'keyId_tbis_TTH_TAU',
                ten: 'Tàu',
                order: 200,
                nhom: {
                    _id: 'keyId_tbis_TTH',
                    ten: 'Tàu thuyền'
                }
            }, {
                _id: 'keyId_tbis_TTH_SALAN',
                ten: 'Sà lan',
                order: 400,
                nhom: {
                    _id: 'keyId_tbis_TTH',
                    ten: 'Tàu thuyền'
                }
            }, {
                _id: 'keyId_tbis_TRN_MAYPHAT',
                ten: 'Máy phát',
                order: 500,
                nhom: {
                    _id: 'keyId_tbis_TRN',
                    ten: 'Trạm nguồn'
                }
            }
        ];
        
        const loais = [
            {
                _id: 'keyId_tbis_CAUBO_KE',
                ten: 'KE',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_CAUBO',
                    ten: 'Cẩu bờ'
                }
            }, {
                _id: 'keyId_tbis_CAUBO_KOCKS',
                ten: 'KOCKS',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_CAUBO',
                    ten: 'Cẩu bờ'
                }
            }, {
                _id: 'keyId_tbis_CAUBO_LBCODINH',
                ten: 'LB cố định',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_CAUBO',
                    ten: 'Cẩu bờ'
                }
            }, {
                _id: 'keyId_tbis_CAUBO_LBRAY',
                ten: 'LB ray',
                order: 400,
                chung_loai: {
                    _id: 'keyId_tbis_CAUBO',
                    ten: 'Cẩu bờ'
                }
            }, {
                _id: 'keyId_tbis_CAUBO_MITSUI',
                ten: 'Mitsui',
                order: 500,
                chung_loai: {
                    _id: 'keyId_tbis_CAUBO',
                    ten: 'Cẩu bờ'
                }
            }, {
                _id: 'keyId_tbis_CAUBO_ZPMC',
                ten: 'ZPMC',
                order: 600,
                chung_loai: {
                    _id: 'keyId_tbis_CAUBO',
                    ten: 'Cẩu bờ'
                }
            }, {
                _id: 'keyId_tbis_CAUKHUNG_RTG3+1',
                ten: 'RTG 3+1',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_CAUKHUNG',
                    ten: 'Cẩu khung'
                }
            }, {
                _id: 'keyId_tbis_CAUKHUNG_RTG6+1',
                ten: 'RTG 6+1',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_CAUKHUNG',
                    ten: 'Cẩu khung'
                }
            }, {
                _id: 'keyId_tbis_CAUKHUNG_RMG',
                ten: 'RMG',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_CAUKHUNG',
                    ten: 'Cẩu khung'
                }
            }, {
                _id: 'keyId_tbis_XENANG_XENANGHANG',
                ten: 'Xe nâng hàng',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_XENANG',
                    ten: 'Xe nâng'
                }
            }, {
                _id: 'keyId_tbis_XENANG_XENANGRONG',
                ten: 'Xe nâng rỗng',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_XENANG',
                    ten: 'Xe nâng'
                }
            }, {
                _id: 'keyId_tbis_XENANG_XENANGKHO',
                ten: 'Xe nâng kho',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_XENANG',
                    ten: 'Xe nâng'
                }
            }, {
                _id: 'keyId_tbis_KHUNGCHUPROI_KHUNGCHUP20',
                ten: 'Khung chụp 20ft',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_KHUNGCHUPROI',
                    ten: 'Khung chụp rời'
                }
            }, {
                _id: 'keyId_tbis_KHUNGCHUPROI_KHUNGCHUP40',
                ten: 'Khung chụp 40ft',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_KHUNGCHUPROI',
                    ten: 'Khung chụp rời'
                }
            }, {
                _id: 'keyId_tbis_VANTHANG_VANTHANGCB',
                ten: 'Vận thăng cẩu bờ',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_VANTHANG',
                    ten: 'Vận thăng'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_XETHANG',
                ten: 'Xe thang',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_XEPVSC',
                ten: 'Xe phục vụ SC',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_CAUTRUCXUONG',
                ten: 'Cầu trục xưởng',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_CAUOTO',
                ten: 'Cẩu ô tô',
                order: 400,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_XESUACHUA',
                ten: 'Xe sửa chữa',
                order: 500,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_CAUBANHXICH',
                ten: 'Cẩu bánh xích',
                order: 600,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_TBNKHAC_CAUBANHLOP',
                ten: 'Cẩu bánh lốp',
                order: 700,
                chung_loai: {
                    _id: 'keyId_tbis_TBN_TBNKHAC',
                    ten: 'TB nâng khác'
                }
            }, {
                _id: 'keyId_tbis_DAUKEO_DKNOIBO',
                ten: 'Đầu kéo nội bộ',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_DAUKEO',
                    ten: 'Đầu kéo'
                }
            }, {
                _id: 'keyId_tbis_DAUKEO_DKCHAYNGOAI',
                ten: 'Đầu kéo chạy ngoài',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_DAUKEO',
                    ten: 'Đầu kéo'
                }
            }, {
                _id: 'keyId_tbis_ROMOOC_ROMOOC20',
                ten: 'Rơ móoc 20ft',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_ROMOOC',
                    ten: 'Rơ móoc'
                }
            }, {
                _id: 'keyId_tbis_ROMOOC_ROMOOC40',
                ten: 'Rơ móoc 40ft',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_ROMOOC',
                    ten: 'Rơ móoc'
                }
            }, {
                _id: 'keyId_tbis_ROMOOC_ROMOOC45',
                ten: 'Rơ móoc 45ft',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_ROMOOC',
                    ten: 'Rơ móoc'
                }
            }, {
                _id: 'keyId_tbis_XETAIBANTAI_XETAI',
                ten: 'Xe tải',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_XETAIBANTAI',
                    ten: 'Xe tải/bán tải'
                }
            }, {
                _id: 'keyId_tbis_XETAIBANTAI_XEBANTAI',
                ten: 'Xe bán tải',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_XETAIBANTAI',
                    ten: 'Xe tải/bán tải'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XENOIBO',
                ten: 'Xe nội bộ',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XECUUHOA',
                ten: 'Xe cứu hỏa',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XEPVCUUHOA',
                ten: 'Xe phục vụ cứu hỏa',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XECUUTHUONG',
                ten: 'Xe cứu thương',
                order: 400,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XEBON',
                ten: 'Xe bồn',
                order: 500,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XERUACAU',
                ten: 'Xe rửa cẩu',
                order: 600,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XECHIHUY',
                ten: 'Xe chỉ huy',
                order: 700,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XEQUETDUONG',
                ten: 'Xe quét đường',
                order: 800,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XETUOIDUONG',
                ten: 'Xe tưới đường',
                order: 900,
                chung_loai: {
                    _id: 'keyId_tbis_XECHUYENDUNG',
                    ten: 'Xe chuyên dụng'
                }
            }, {
                _id: 'keyId_tbis_XECHUYENDUNG_XEBUSDUADON',
                ten: 'Xe bus đưa đón',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_XEDULICH',
                    ten: 'Xe du lịch'
                }
            }, {
                _id: 'keyId_tbis_XEDULICH_XE4CHO',
                ten: 'Xe 4 chỗ',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_XEDULICH',
                    ten: 'Xe du lịch'
                }
            }, {
                _id: 'keyId_tbis_XEDULICH_XE7CHO',
                ten: 'Xe 7 chỗ',
                order: 300,
                chung_loai: {
                    _id: 'keyId_tbis_XEDULICH',
                    ten: 'Xe du lịch'
                }
            }, {
                _id: 'keyId_tbis_XEDULICH_XE15CHO',
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
                _id: 'keyId_tbis_MAYPHAT_MAYPHATLT1000',
                ten: 'Máy phát dưới 1000 KVA',
                order: 100,
                chung_loai: {
                    _id: 'keyId_tbis_MAYPHAT',
                    ten: 'Máy phát'
                }
            }, {
                _id: 'keyId_tbis_MAYPHAT_MAYPHATGT1000',
                ten: 'Máy phát trên 1000 KVA',
                order: 200,
                chung_loai: {
                    _id: 'keyId_tbis_MAYPHAT',
                    ten: 'Máy phát'
                }
            }
        ];

        // Subject: PhanQuyens

        const donvis = [
            {
                _id: 'keyId_donvis_CP1503',
                ma: 'CP1503',
                ten: 'CP 15-03'
            }, {
                _id: 'keyId_donvis_ATPC',
                ma: 'ATPC',
                ten: 'Phòng An Toàn Pháp Chế'
            }, {
                _id: 'keyId_donvis_BENTHANH',
                ma: 'BENTHANH',
                ten: 'Tân Cảng Bến Thành'
            }, {
                _id: 'keyId_donvis_CANGVU',
                ma: 'CANGVU',
                ten: 'Cảng Vụ'
            }, {
                _id: 'keyId_donvis_CP128',
                ma: 'CP128',
                ten: 'Tân Cảng 128 Hải Phòng'
            }, {
                _id: 'keyId_donvis_CP189',
                ma: 'CP189',
                ten: 'Tân Cảng 189 Hải Phòng'
            }, {
                _id: 'keyId_donvis_CPCL',
                ma: 'CPCL',
                ten: 'CP Cảng Cát Lái'
            }, {
                _id: 'keyId_donvis_DIAOC',
                ma: 'DIAOC',
                ten: 'Đầu Tư PT Hạ Tầng TC'
            }, {
                _id: 'keyId_donvis_DIC',
                ma: 'DIC',
                ten: 'DIC'
            }, {
                _id: 'keyId_donvis_DTV',
                ma: 'DTV',
                ten: 'Cảng Dầu Thực Vật'
            }, {
                _id: 'keyId_donvis_DVHH',
                ma: 'DVHH',
                ten: 'Dịch Vụ Hàng Hải'
            }, {
                _id: 'keyId_donvis_DVKT',
                ma: 'DVKT',
                ten: 'Dịch Vụ Kỹ Thuật'
            }, {
                _id: 'keyId_donvis_PHC',
                ma: 'PHC',
                ten: 'Phòng Hậu Cần'
            }, {
                _id: 'keyId_donvis_HOATIEU',
                ma: 'HOATIEU',
                ten: 'Hoa Tiêu Tân Cảng'
            }, {
                _id: 'keyId_donvis_ICDLB',
                ma: 'ICDLB',
                ten: 'ICD Long Bình'
            }, {
                _id: 'keyId_donvis_ICDSTH',
                ma: 'ICDSTH',
                ten: 'ICD Sóng Thần'
            }, {
                _id: 'keyId_donvis_ITCPHH',
                ma: 'ITCPHH',
                ten: 'Cảng ITC Phú Hữu'
            }, {
                _id: 'keyId_donvis_KTVT',
                ma: 'KTVT',
                ten: 'Phòng Kỹ Thuật Vật Tư'
            }, {
                _id: 'keyId_donvis_KVTC',
                ma: 'KVTC',
                ten: 'Kho Vận Tân Cảng'
            }, {
                _id: 'keyId_donvis_QSBV',
                ma: 'QSBV',
                ten: 'Phòng Quân Sự Bảo Vệ'
            }, {
                _id: 'keyId_donvis_QSBV',
                ma: 'QSBV',
                ten: 'Phòng Quân Sự Bảo Vệ'
            }, {
                _id: 'keyId_donvis_TCCMR',
                ma: 'TCCMR',
                ten: 'Tân Cảng Cam Ranh'
            }, {
                _id: 'keyId_donvis_TCCT',
                ma: 'TCCT',
                ten: 'Cảng Cái Mép TCCT'
            }, {
                _id: 'keyId_donvis_TCIT',
                ma: 'TCIT',
                ten: 'Cảng Quốc Tế Cái Mép TCIT'
            }, {
                _id: 'keyId_donvis_TCTT',
                ma: 'TCTT',
                ten: 'Cảng Cái Mép Thị Vải TCTT'
            }, {
                _id: 'keyId_donvis_TCHP',
                ma: 'TCHP',
                ten: 'Cảng Tân Cảng Hiệp Phước'
            }, {
                _id: 'keyId_donvis_TCL',
                ma: 'TCL',
                ten: 'Đại Lý Giao Nhận Vận Tải TCL'
            }, {
                _id: 'keyId_donvis_TCMTR',
                ma: 'TCMTR',
                ten: 'Tân Cảng Miền Trung'
            }, {
                _id: 'keyId_donvis_TCO',
                ma: 'TCO',
                ten: 'CP Dịch Vụ Biển TCO'
            }, {
                _id: 'keyId_donvis_TCSS',
                ma: 'TCSS',
                ten: 'CP Vận Tải Biển TCSS'
            }, {
                _id: 'keyId_donvis_SNP',
                ma: 'SNP',
                ten: 'Tổng Cty Tân Cảng Sài Gòn'
            }, {
                _id: 'keyId_donvis_SNP',
                ma: 'SNP',
                ten: 'Tổng Cty Tân Cảng Sài Gòn'
            }, {
                _id: 'keyId_donvis_TVBD',
                ma: 'TVBD',
                ten: 'Tiếp Vận Bình Dương'
            }, {
                _id: 'keyId_donvis_TVCL',
                ma: 'TVCL',
                ten: 'Tiếp Vận Cát Lái'
            }, {
                _id: 'keyId_donvis_TVDGN',
                ma: 'TVDGN',
                ten: 'Tiếp Vận Đồng Nai'
            }, {
                _id: 'keyId_donvis_TVHPH',
                ma: 'TVHPH',
                ten: 'Tiếp Vận Hiệp Phước'
            }, {
                _id: 'keyId_donvis_TVLB',
                ma: 'TVLB',
                ten: 'Tiếp Vận Long Bình'
            }, {
                _id: 'keyId_donvis_TVMB',
                ma: 'TVMB',
                ten: 'Tiếp Vận Miền Bắc'
            }, {
                _id: 'keyId_donvis_TVMK',
                ma: 'TVMK',
                ten: 'Tiếp Vận MeKong'
            }, {
                _id: 'keyId_donvis_TVVT',
                ma: 'TVVT',
                ten: 'Tiếp Vận Vũng Tàu'
            }, {
                _id: 'keyId_donvis_VTBO',
                ma: 'VTBO',
                ten: 'CP Vận Tải Bộ'
            }, {
                _id: 'keyId_donvis_VTT',
                ma: 'VTT',
                ten: 'CP Vận Tải Thủy'
            }, {
                _id: 'keyId_donvis_XDCT',
                ma: 'XDCT',
                ten: 'Xây Dựng Công Trình'
            }, {
                _id: 'keyId_donvis_XDSM',
                ma: 'XDSM',
                ten: 'CP Xây Dựng Số Một'
            }, {
                _id: 'keyId_donvis_XNCG',
                ma: 'XNCG',
                ten: 'Xí Nghiệp Cơ Giới'
            }
        ];

        const doivanhanhs = [
            {
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
            }
        ];

        // >>>>>>>>>>>>>>>>>>>>>
        // DIADIEMS

        quocgias.forEach((quocgia) => {
            TbisHelpers.insert({
                subject: 'diadiems',
                category: 'quocgias',
                dataObject: quocgia
            });
        });

        khuvucs.forEach((khuvuc) => {
            TbisHelpers.insert({
                subject: 'diadiems',
                category: 'khuvucs',
                dataObject: khuvuc
            });
        });

        // NGUONGOCS

        hangsanxuats.forEach((hangsanxuat) => {
            TbisHelpers.insert({
                subject: 'nguongocs',
                category: 'hangsanxuats',
                dataObject: hangsanxuat
            });
        });

        models.forEach((model) => {
            TbisHelpers.insert({
                subject: 'nguongocs',
                category: 'models',
                dataObject: model
            });
        });

        vendors.forEach((vendor) => {
            TbisHelpers.insert({
                subject: 'nguongocs',
                category: 'vendors',
                dataObject: vendor
            });
        });
        
        // PHANLOAIS

        nhoms.forEach((nhom) => {
            TbisHelpers.insert({
                subject: 'phanloais',
                category: 'nhoms',
                dataObject: nhom
            });
        });

        chungloais.forEach((chungloai) => {
            TbisHelpers.insert({
                subject: 'phanloais',
                category: 'chungloais',
                dataObject: chungloai
            });
        });

        loais.forEach((loai) => {
            TbisHelpers.insert({
                subject: 'phanloais',
                category: 'loais',
                dataObject: loai
            });
        });

        // PHANQUYENS

        donvis.forEach((donvi) => {
            TbisHelpers.insert({
                subject: 'phanquyens',
                category: 'donvis',
                dataObject: donvi
            });
        });

        doivanhanhs.forEach((doivanhanh) => {
            TbisHelpers.insert({
                subject: 'phanquyens',
                category: 'doivanhanhs',
                dataObject: doivanhanh
            });
        });

        console.log('seeding db - done, total of ', quocgias.length + khuvucs.length +
            hangsanxuats.length + models.length + vendors.length + nhoms.length +
            chungloais.length + loais.length + donvis.length + doivanhanhs.length, 'items inserted!');
        
    }
});