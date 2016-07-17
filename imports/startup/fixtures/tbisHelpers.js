import { Meteor } from 'meteor/meteor';
import { TbisHelpers } from '../../api/thietbis/tbisHelpers';

Meteor.startup(() => {
    console.log('start up server... ', TbisHelpers.find().count(), ' tbisHelper items already seeded!');
    
    if (TbisHelpers.find().count() === 0) {

        // Subject: DiaDiems

        console.log('start creating seed TbisHelpers db...');

        const quocgias = [
            {
                ten: 'Anh',
                name: 'England'
            },{
                ten: 'Belarus',
                name: 'Belarus'
            }, {
                ten: 'Đài Loan',
                name: 'Taiwan'
            }, {
                ten: 'Đức',
                name: 'Germany'
            }, {
                ten: 'Hàn Quốc',
                name: 'Korea'
            }, {
                ten: 'Hoa Kỳ',
                name: 'US'
            }, {
                ten: 'Malaysia',
                name: 'Malaysia'
            }, {
                ten: 'Nhật Bản',
                name: 'Japan'
            }, {
                ten: 'Pháp',
                name: 'France'
            }, {
                ten: 'Phần Lan',
                name: 'Finland'
            }, {
                ten: 'Nga',
                name: 'Russia'
            }, {
                ten: 'Tây Ban Nha',
                name: 'Spain'
            }, {
                ten: 'Thụy Điển',
                name: 'Sweden'
            }, {
                ten: 'Trung Quốc',
                name: 'China'
            }, {
                ten: 'Việt Nam',
                name: 'Vietnam'
            }, {
                ten: 'Ý',
                name: 'Italia'
            }
        ];

        const khuvucs = [
            {
                ma: 'HP128',
                ten: '128 Hải Phòng'
            }, {
                ma: 'HP189',
                ten: '189 Hải Phòng'
            }, {
                ma: 'CAOL',
                ten: 'Cao Lãnh'
            }, {
                ma: 'CCUI',
                ten: 'Cái Cui'
            }, {
                ma: 'CLAI',
                ten: 'Cát Lái'
            }, {
                ma: 'CME_TCCT',
                ten: 'Cái Mép TCCT'
            }, {
                ma: 'CME_TCIT',
                ten: 'Cái Mép TCIT'
            }, {
                ma: 'CME_TCTT',
                ten: 'Cái Mép TCTT'
            }, {
                ma: 'CMR',
                ten: 'Cam Ranh'
            }, {
                ma: 'DNAI',
                ten: 'Đồng Nai'
            }, {
                ma: 'DTHA',
                ten: 'Đồng Tháp'
            }, {
                ma: 'DTV',
                ten: 'Dầu Thực Vật'
            }, {
                ma: 'GLNG',
                ten: 'Giao Long'
            }, {
                ma: 'HLUC',
                ten: 'Hiệp Lực'
            }, {
                ma: 'HPHC',
                ten: 'Hiệp Phước'
            }, {
                ma: 'LBNH',
                ten: 'Long Bình'
            }, {
                ma: 'MTHO',
                ten: 'Mỹ Tho'
            }, {
                ma: 'MTRG',
                ten: 'Miền Trung'
            }, {
                ma: 'NHTR',
                ten: 'Nhơn Trạch'
            }, {
                ma: 'PHHU',
                ten: 'Phú Hữu'
            }, {
                ma: 'SDEC',
                ten: 'Sa Đéc'
            }, {
                ma: 'STHN',
                ten: 'Sóng Thần'
            }, {
                ma: 'STIEN',
                ten: 'Suối Tiên'
            }, {
                ma: 'TCA',
                ten: 'Tân Cảng'
            }, {
                ma: 'THHOA',
                ten: 'Thanh Hóa'
            }, {
                ma: 'TNOT',
                ten: 'Thốt Nốt'
            }, {
                ma: 'TRGSA',
                ten: 'Trường Sa'
            }
        ];

        // Subject: NguonGocs

        const hangsanxuats = [
            {
                ma: 'ALIMAX',
                ten: 'Alimax'
            }, {
                ma: 'BINHTRIEU',
                ten: 'Bình Triệu'
            }, {
                ma: 'BOSS',
                ten: 'BOSS'
            }, {
                ma: 'CAPACITY',
                ten: 'Capacity'
            }, {
                ma: 'CHANPHAT',
                ten: 'Chấn Phát'
            }, {
                ma: 'CHIENYOU',
                ten: 'Chienyou'
            }, {
                ma: 'UNKNOWN',
                ten: 'Chưa xác định'
            }, {
                ma: 'CIMC',
                ten: 'CIMC'
            }, {
                ma: 'CONGDANH',
                ten: 'Công Danh'
            }, {
                ma: 'CUMMINS',
                ten: 'Cummins'
            }, {
                ma: 'DAEWOO',
                ten: 'Daewoo'
            }, {
                ma: 'DAIHATSU',
                ten: 'Daihatsu'
            }, {
                ma: 'DETROIT',
                ten: 'Detroit'
            }, {
                ma: 'DEUTZ',
                ten: 'Deutz'
            }, {
                ma: 'DGA',
                ten: 'DGA'
            }, {
                ma: 'DIAN',
                ten: 'Dĩ An'
            }, {
                ma: 'DVKT',
                ten: 'Dịch Vụ Kỹ Thuật'
            }, {
                ma: 'DONGFENG',
                ten: 'Dongfeng'
            }, {
                ma: 'DOOSAN',
                ten: 'Doosan'
            }, {
                ma: 'FANTUZZI',
                ten: 'Fantuzzi'
            }, {
                ma: 'FERRARI',
                ten: 'Ferrari'
            }, {
                ma: 'FORD',
                ten: 'Ford'
            }, {
                ma: 'FREIGHT',
                ten: 'Freightliner'
            }, {
                ma: 'GENE',
                ten: 'Gene'
            }, {
                ma: 'GMC',
                ten: 'GMC'
            }, {
                ma: 'HANAM',
                ten: 'Hà Nam'
            }, {
                ma: 'HINO',
                ten: 'Hino'
            }, {
                ma: 'HONDA',
                ten: 'Honda'
            }, {
                ma: 'HOWO',
                ten: 'Howo'
            }, {
                ma: 'HUUTOAN',
                ten: 'Hữu Toàn'
            }, {
                ma: 'HUYNDAI',
                ten: 'Huyndai'
            }, {
                ma: 'ISUZU',
                ten: 'Isuzu'
            }, {
                ma: 'JLG',
                ten: 'JLG'
            }, {
                ma: 'KALMAR',
                ten: 'Kalmar'
            }, {
                ma: 'KAMAZ',
                ten: 'Kamaz'
            }, {
                ma: 'KC',
                ten: 'KC'
            }, {
                ma: 'KIA',
                ten: 'KIA'
            }, {
                ma: 'KOCKS',
                ten: 'Kocks Krane GmbH'
            }, {
                ma: 'KOMATSU',
                ten: 'Komatsu'
            }, {
                ma: 'KE',
                ten: 'Kranbau Eberswalde'
            }, {
                ma: 'LANGCEBOSS',
                ten: 'Langceboss'
            }, {
                ma: 'LIEBHERR',
                ten: 'Liebherr'
            }, {
                ma: 'LINDE',
                ten: 'Linde'
            }, {
                ma: 'LUNA',
                ten: 'Luna'
            }, {
                ma: 'MAN',
                ten: 'MAN'
            }, {
                ma: 'MARK',
                ten: 'Mark'
            }, {
                ma: 'MAZ',
                ten: 'Maz'
            }, {
                ma: 'MAZDA',
                ten: 'Mazda'
            }, {
                ma: 'MIJACK',
                ten: 'Mi-jack'
            }, {
                ma: 'MITSUBISHI',
                ten: 'Mitsubishi'
            }, {
                ma: 'MITSUI',
                ten: 'Mitsui'
            }, {
                ma: 'MORNING',
                ten: 'Morning'
            }, {
                ma: 'NOVELTEX',
                ten: 'Noveltex'
            }, {
                ma: 'OTTAWA',
                ten: 'Ottawa'
            }, {
                ma: 'PH',
                ten: 'P&H'
            }, {
                ma: 'PERKINS',
                ten: 'Perkins'
            }, {
                ma: 'RENAULT',
                ten: 'Renault'
            }, {
                ma: 'SNP',
                ten: 'Saigon Newport'
            }, {
                ma: 'SISUMAGUM',
                ten: 'Sisu Magum'
            }, {
                ma: 'STINIT',
                ten: 'Stinit'
            }, {
                ma: 'SUMITOMO',
                ten: 'Sumitomo'
            }, {
                ma: 'TANTHANH',
                ten: 'Tân Thanh'
            }, {
                ma: 'TCM',
                ten: 'TCM'
            }, {
                ma: 'TERBERG',
                ten: 'Terberg'
            }, {
                ma: 'TEREX',
                ten: 'Terex'
            }, {
                ma: 'TOYOTA',
                ten: 'Toyota'
            }, {
                ma: 'UAZ',
                ten: 'UAZ'
            }, {
                ma: 'UDTRUCKS',
                ten: 'UD Trucks'
            }, {
                ma: 'VALMET',
                ten: 'Valmet'
            }, {
                ma: 'VINAXUKI',
                ten: 'Vinaxuki'
            }, {
                ma: 'VOLVO',
                ten: 'Volvo'
            }, {
                ma: 'YALE',
                ten: 'Yale'
            }, {
                ma: 'ZIN',
                ten: 'ZIN'
            }, {
                ma: 'ZPMC',
                ten: 'ZPMC'
            }
        ];

        const models = [
            {
                ten: 'TJ5000',
                hang_san_xuat: {
                    ma: 'CAPACITY',
                    ten: 'Capacity'
                }
            }, {
                ten: 'TJ9000',
                hang_san_xuat: {
                    ma: 'CAPACITY',
                    ten: 'Capacity'
                }
            }, {
                ten: '1045 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: '1065 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: '2000 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: '380 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: '450 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: '550 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: '750 KVA',
                hang_san_xuat: {
                    ma: 'CUMMINS',
                    ten: 'Cummins'
                }
            }, {
                ten: 'DWV3TEF',
                hang_san_xuat: {
                    ma: 'DAEWOO',
                    ten: 'Daewoo'
                }
            }, {
                ten: 'NOVUS',
                hang_san_xuat: {
                    ma: 'DAEWOO',
                    ten: 'Daewoo'
                }
            }, {
                ten: '108 KVA',
                hang_san_xuat: {
                    ma: 'DEUTZ',
                    ten: 'Deutz'
                }
            }, {
                ten: '350 KVA',
                hang_san_xuat: {
                    ma: 'DGA',
                    ten: 'DGA'
                }
            }, {
                ten: '1031 KVA',
                hang_san_xuat: {
                    ma: 'DIAN',
                    ten: 'Dĩ An'
                }
            }, {
                ten: 'ESCAPE',
                hang_san_xuat: {
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                ten: 'EVEREST',
                hang_san_xuat: {
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                ten: 'LEADER',
                hang_san_xuat: {
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                ten: 'LEADER',
                hang_san_xuat: {
                    ma: 'FORD',
                    ten: 'Ford'
                }
            }, {
                ten: '45/22',
                hang_san_xuat: {
                    ma: 'GENE',
                    ten: 'Gene'
                }
            }, {
                ten: 'ACCORD 2.0',
                hang_san_xuat: {
                    ma: 'HONDA',
                    ten: 'Honda'
                }
            }, {
                ten: '1031 KVA',
                hang_san_xuat: {
                    ma: 'HUUTOAN',
                    ten: 'Hữu Toàn'
                }
            }, {
                ten: 'HD700',
                hang_san_xuat: {
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                ten: 'PORTER 1.0T',
                hang_san_xuat: {
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                ten: 'PORTER 1.25T',
                hang_san_xuat: {
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                ten: 'STAREX',
                hang_san_xuat: {
                    ma: 'HUYNDAI',
                    ten: 'Huyndai'
                }
            }, {
                ten: '1T9',
                hang_san_xuat: {
                    ma: 'ISUZU',
                    ten: 'Isuzu'
                }
            }, {
                ten: 'FRR90N',
                hang_san_xuat: {
                    ma: 'ISUZU',
                    ten: 'Isuzu'
                }
            }, {
                ten: 'ZOOMLION',
                hang_san_xuat: {
                    ma: 'ISUZU',
                    ten: 'Isuzu'
                }
            }, {
                ten: '110 HX',
                hang_san_xuat: {
                    ma: 'JLG',
                    ten: 'JLG'
                }
            }, {
                ten: '600 AJ',
                hang_san_xuat: {
                    ma: 'JLG',
                    ten: 'JLG'
                }
            }, {
                ten: '800 A',
                hang_san_xuat: {
                    ma: 'JLG',
                    ten: 'JLG'
                }
            }, {
                ten: 'PT122',
                hang_san_xuat: {
                    ma: 'KALMAR',
                    ten: 'Kalmar'
                }
            }, {
                ten: '54112',
                hang_san_xuat: {
                    ma: 'KALMAR',
                    ten: 'Kalmar'
                }
            }, {
                ten: '54115',
                hang_san_xuat: {
                    ma: 'KALMAR',
                    ten: 'Kalmar'
                }
            }, {
                ten: 'K2700II',
                hang_san_xuat: {
                    ma: 'KIA',
                    ten: 'KIA'
                }
            }, {
                ten: 'D 2.0',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: 'D 2.5',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: 'D 3.0',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: 'D 4.5',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: 'G 1.5',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: 'G 2.0',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: 'FD25T',
                hang_san_xuat: {
                    ma: 'KOMATSU',
                    ten: 'Komatsu'
                }
            }, {
                ten: '5337',
                hang_san_xuat: {
                    ma: 'MAZ',
                    ten: 'Maz'
                }
            }, {
                ten: '54323',
                hang_san_xuat: {
                    ma: 'MAZ',
                    ten: 'Maz'
                }
            }, {
                ten: '64229',
                hang_san_xuat: {
                    ma: 'MAZ',
                    ten: 'Maz'
                }
            }, {
                ten: 'FUSO',
                hang_san_xuat: {
                    ma: 'MITSUBISHI',
                    ten: 'Mitsubishi'
                }
            }, {
                ten: 'FUSO',
                hang_san_xuat: {
                    ma: 'MITSUBISHI',
                    ten: 'Mitsubishi'
                }
            }, {
                ten: '1000 KVA',
                hang_san_xuat: {
                    ma: 'PERKINS',
                    ten: 'Perkins'
                }
            }, {
                ten: '1031 KVA',
                hang_san_xuat: {
                    ma: 'PERKINS',
                    ten: 'Perkins'
                }
            }, {
                ten: 'D 2.5',
                hang_san_xuat: {
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                ten: 'D 4.5',
                hang_san_xuat: {
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                ten: 'G 1.5',
                hang_san_xuat: {
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                ten: 'FD25T3',
                hang_san_xuat: {
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                ten: 'VM600',
                hang_san_xuat: {
                    ma: 'TCM',
                    ten: 'TCM'
                }
            }, {
                ten: 'YT180',
                hang_san_xuat: {
                    ma: 'TERBERG',
                    ten: 'Terberg'
                }
            }, {
                ten: 'YT220',
                hang_san_xuat: {
                    ma: 'TERBERG',
                    ten: 'Terberg'
                }
            }, {
                ten: 'ALTIS',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'CAMRY 2.2',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'CAMRY 2.4',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'CAMRY 2.5',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'COROLA 1.6',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'FORTUNER',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'G 1.5',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'HIACE-2ZR',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'HILUX',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'INNOVAR',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'ZACE',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: 'YA3469',
                hang_san_xuat: {
                    ma: 'TOYOTA',
                    ten: 'Toyota'
                }
            }, {
                ten: '1T9',
                hang_san_xuat: {
                    ma: 'VINAXUKI',
                    ten: 'Vinaxuki'
                }
            }, {
                ten: '375 KVA',
                hang_san_xuat: {
                    ma: 'VOLVO',
                    ten: 'Volvo'
                }
            }, {
                ten: '550 KVA',
                hang_san_xuat: {
                    ma: 'VOLVO',
                    ten: 'Volvo'
                }
            }, {
                ten: 'C489',
                hang_san_xuat: {
                    ma: 'YALE',
                    ten: 'Yale'
                }
            }, {
                ten: '131',
                hang_san_xuat: {
                    ma: 'ZIN',
                    ten: 'ZIN'
                }
            }
        ];

        const vendors = [
            {
                ten: 'Gia Việt Khang'
            }, {
                ten: 'Unico Vina'
            }
        ];

        // Subject: PhanLoais
        
        const nhoms = [
            {
                ten: 'Thiết bị nâng',
                order: 100
            }, {
                ten: 'Xe máy',
                order: 200
            }, {
                ten: 'Tàu thuyền',
                order: 300
            }, {
                ten: 'Trạm nguồn',
                order: 400
            }, {
                ten: 'Thanh lý',
                order: 500
            }  
        ];
        
        const chungloais = [
            {
                ten: 'Cẩu bờ',
                order: 100,
                nhom: {
                    ten: 'Thiết bị nâng'
                }
            }, {
                ten: 'Cẩu khung',
                order: 200,
                nhom: {
                    ten: 'Thiết bị nâng'
                }
            }, {
                ten: 'Xe nâng',
                order: 300,
                nhom: {
                    ten: 'Thiết bị nâng'
                }
            }, {
                ten: 'Khung chụp rời',
                order: 400,
                nhom: {
                    ten: 'Thiết bị nâng'
                }
            }, {
                ten: 'Vận thăng',
                order: 500,
                nhom: {
                    ten: 'Thiết bị nâng'
                }
            }, {
                ten: 'TB nâng khác',
                order: 600,
                nhom: {
                    ten: 'Thiết bị nâng'
                }
            }, {
                ten: 'Đầu kéo',
                order: 100,
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Rơ moóc',
                order: 200,
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Xe tải/bán tải',
                order: 300,
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Xe chuyên dụng',
                order: 400,
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Xe du lịch',
                order: 500,
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Mô tô',
                order: 600,
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Ca nô',
                order: 100,
                nhom: {
                    ten: 'Tàu thuyền'
                }
            }, {
                ten: 'Tàu',
                order: 200,
                nhom: {
                    ten: 'Tàu thuyền'
                }
            }, {
                ten: 'Sà lan',
                order: 400,
                nhom: {
                    ten: 'Tàu thuyền'
                }
            }, {
                ten: 'Máy phát',
                order: 500,
                nhom: {
                    ten: 'Trạm nguồn'
                }
            }
        ];
        
        const loais = [
            {
                ten: 'KE',
                order: 100,
                chung_loai: {
                    ten: 'Cẩu bờ'
                }
            }, {
                ten: 'KOCKS',
                order: 200,
                chung_loai: {
                    ten: 'Cẩu bờ'
                }
            }, {
                ten: 'LB cố định',
                order: 300,
                chung_loai: {
                    ten: 'Cẩu bờ'
                }
            }, {
                ten: 'LB ray',
                order: 400,
                chung_loai: {
                    ten: 'Cẩu bờ'
                }
            }, {
                ten: 'Mitsui',
                order: 500,
                chung_loai: {
                    ten: 'Cẩu bờ'
                }
            }, {
                ten: 'ZPMC',
                order: 600,
                chung_loai: {
                    ten: 'Cẩu bờ'
                }
            }, {
                ten: 'RTG 3+1',
                order: 100,
                chung_loai: {
                    ten: 'Cẩu khung'
                }
            }, {
                ten: 'RTG 6+1',
                order: 200,
                chung_loai: {
                    ten: 'Cẩu khung'
                }
            }, {
                ten: 'RMG',
                order: 300,
                chung_loai: {
                    ten: 'Cẩu khung'
                }
            }, {
                ten: 'Xe nâng hàng',
                order: 100,
                chung_loai: {
                    ten: 'Xe nâng'
                }
            }, {
                ten: 'Xe nâng rỗng',
                order: 200,
                chung_loai: {
                    ten: 'Xe nâng'
                }
            }, {
                ten: 'Xe nâng kho',
                order: 300,
                chung_loai: {
                    ten: 'Xe nâng'
                }
            }, {
                ten: 'Khung chụp 20ft',
                order: 100,
                chung_loai: {
                    ten: 'Khung chụp rời'
                }
            }, {
                ten: 'Khung chụp 40ft',
                order: 200,
                chung_loai: {
                    ten: 'Khung chụp rời'
                }
            }, {
                ten: 'Vận thăng cẩu bờ',
                order: 100,
                chung_loai: {
                    ten: 'Vận thăng'
                }
            }, {
                ten: 'Xe thang',
                order: 100,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Xe phục vụ SC',
                order: 200,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Cầu trục xưởng',
                order: 300,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Cẩu ô tô',
                order: 400,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Xe sửa chữa',
                order: 500,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Cẩu bánh xích',
                order: 600,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Cẩu bánh lốp',
                order: 700,
                chung_loai: {
                    ten: 'TB nâng khác'
                }
            }, {
                ten: 'Đầu kéo nội bộ',
                order: 100,
                chung_loai: {
                    ten: 'Đầu kéo'
                }
            }, {
                ten: 'Đầu kéo chạy ngoài',
                order: 200,
                chung_loai: {
                    ten: 'Đầu kéo'
                }
            }, {
                ten: 'Rơ moóc 20ft',
                order: 100,
                chung_loai: {
                    ten: 'Rơ moóc'
                }
            }, {
                ten: 'Rơ moóc 40ft',
                order: 200,
                chung_loai: {
                    ten: 'Rơ moóc'
                }
            }, {
                ten: 'Rơ moóc 45ft',
                order: 300,
                chung_loai: {
                    ten: 'Rơ moóc'
                }
            }, {
                ten: 'Xe tải',
                order: 100,
                chung_loai: {
                    ten: 'Xe tải/bán tải'
                }
            }, {
                ten: 'Xe bán tải',
                order: 200,
                chung_loai: {
                    ten: 'Xe tải/bán tải'
                }
            }, {
                ten: 'Xe nội bộ',
                order: 100,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe cứu hỏa',
                order: 200,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe phục vụ cứu hỏa',
                order: 300,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe cứu thương',
                order: 400,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe bồn',
                order: 500,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe rửa cẩu',
                order: 600,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe chỉ huy',
                order: 700,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe quét đường',
                order: 800,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe tưới đường',
                order: 900,
                chung_loai: {
                    ten: 'Xe chuyên dụng'
                }
            }, {
                ten: 'Xe bus đưa đón',
                order: 100,
                chung_loai: {
                    ten: 'Xe du lịch'
                }
            }, {
                ten: 'Xe 4 chỗ',
                order: 200,
                chung_loai: {
                    ten: 'Xe du lịch'
                }
            }, {
                ten: 'Xe 7 chỗ',
                order: 300,
                chung_loai: {
                    ten: 'Xe du lịch'
                }
            }, {
                ten: 'Xe 15 chỗ',
                order: 400,
                chung_loai: {
                    ten: 'Xe du lịch'
                }
            }, {
                ten: 'Ca nô',
                order: 100,
                chung_loai: {
                    ten: 'Ca nô'
                }
            }, {
                ten: 'Tàu kéo',
                order: 100,
                chung_loai: {
                    ten: 'Tàu'
                }
            }, {
                ten: 'Tàu khách',
                order: 200,
                chung_loai: {
                    ten: 'Tàu'
                }
            }, {
                ten: 'Sà lan',
                order: 100,
                chung_loai: {
                    ten: 'Sà lan'
                }
            }, {
                ten: 'Máy phát dưới 1000 KVA',
                order: 100,
                chung_loai: {
                    ten: 'Máy phát'
                }
            }, {
                ten: 'Máy phát trên 1000 KVA',
                order: 200,
                chung_loai: {
                    ten: 'Máy phát'
                }
            }
        ];

        // Subject: PhanQuyens

        const donvis = [
            {
                ma: 'CP1503',
                ten: 'CP 15-03'
            }, {
                ma: 'ATPC',
                ten: 'Phòng An Toàn Pháp Chế'
            }, {
                ma: 'BENTHANH',
                ten: 'Tân Cảng Bến Thành'
            }, {
                ma: 'CANGVU',
                ten: 'Cảng Vụ'
            }, {
                ma: 'CP128',
                ten: 'Tân Cảng 128 Hải Phòng'
            }, {
                ma: 'CP189',
                ten: 'Tân Cảng 189 Hải Phòng'
            }, {
                ma: 'CPCL',
                ten: 'CP Cảng Cát Lái'
            }, {
                ma: 'DIAOC',
                ten: 'Đầu Tư PT Hạ Tầng TC'
            }, {
                ma: 'DIC',
                ten: 'DIC'
            }, {
                ma: 'DTV',
                ten: 'Cảng Dầu Thực Vật'
            }, {
                ma: 'DVHH',
                ten: 'Dịch Vụ Hàng Hải'
            }, {
                ma: 'DVKT',
                ten: 'Dịch Vụ Kỹ Thuật'
            }, {
                ma: 'PHC',
                ten: 'Phòng Hậu Cần'
            }, {
                ma: 'HOATIEU',
                ten: 'Hoa Tiêu Tân Cảng'
            }, {
                ma: 'ICDLB',
                ten: 'ICD Long Bình'
            }, {
                ma: 'ICDSTH',
                ten: 'ICD Sóng Thần'
            }, {
                ma: 'ITCPHH',
                ten: 'Cảng ITC Phú Hữu'
            }, {
                ma: 'KTVT',
                ten: 'Phòng Kỹ Thuật Vật Tư'
            }, {
                ma: 'KVTC',
                ten: 'Kho Vận Tân Cảng'
            }, {
                ma: 'QSBV',
                ten: 'Phòng Quân Sự Bảo Vệ'
            }, {
                ma: 'TCCMR',
                ten: 'Tân Cảng Cam Ranh'
            }, {
                ma: 'TCCT',
                ten: 'Cảng Cái Mép TCCT'
            }, {
                ma: 'TCIT',
                ten: 'Cảng Quốc Tế Cái Mép TCIT'
            }, {
                ma: 'TCTT',
                ten: 'Cảng Cái Mép Thị Vải TCTT'
            }, {
                ma: 'TCHPHC',
                ten: 'Tân Cảng Hiệp Phước'
            }, {
                ma: 'TCL',
                ten: 'Giao Nhận Vận Tải TCL'
            }, {
                ma: 'TCMTR',
                ten: 'Tân Cảng Miền Trung'
            }, {
                ma: 'TCO',
                ten: 'CP Dịch Vụ Biển TCO'
            }, {
                ma: 'TCSS',
                ten: 'CP Vận Tải Biển TCSS'
            }, {
                ma: 'SNP',
                ten: 'Tổng Cty Tân Cảng Sài Gòn'
            }, {
                ma: 'TVBD',
                ten: 'Tiếp Vận Bình Dương'
            }, {
                ma: 'TVCL',
                ten: 'Tiếp Vận Cát Lái'
            }, {
                ma: 'TVDGN',
                ten: 'Tiếp Vận Đồng Nai'
            }, {
                ma: 'TVHPH',
                ten: 'Tiếp Vận Hiệp Phước'
            }, {
                ma: 'TVLB',
                ten: 'Tiếp Vận Long Bình'
            }, {
                ma: 'TVMB',
                ten: 'Tiếp Vận Miền Bắc'
            }, {
                ma: 'TVMK',
                ten: 'Tiếp Vận MeKong'
            }, {
                ma: 'TVVT',
                ten: 'Tiếp Vận Vũng Tàu'
            }, {
                ma: 'VTBO',
                ten: 'CP Vận Tải Bộ'
            }, {
                ma: 'VTT',
                ten: 'CP Vận Tải Thủy'
            }, {
                ma: 'XDCT',
                ten: 'Xây Dựng Công Trình'
            }, {
                ma: 'XDSM',
                ten: 'CP Xây Dựng Số Một'
            }, {
                ma: 'XNCG',
                ten: 'Xí Nghiệp Cơ Giới'
            }
        ];

        const doivanhanhs = [
            {
                ma: 'CG1',
                ten: 'Đội Cơ Giới 1',
                don_vi: {
                    ma: 'XNCG',
                    ten: 'Xí Nghiệp Cơ Giới'
                }
            }, {
                ma: 'CG2',
                ten: 'Đội Cơ Giới 2',
                don_vi: {
                    ma: 'XNCG',
                    ten: 'Xí Nghiệp Cơ Giới'
                }
            }, {
                ma: 'CG3',
                ten: 'Đội Cơ Giới 3',
                don_vi: {
                    ma: 'XNCG',
                    ten: 'Xí Nghiệp Cơ Giới'
                }
            }, {
                ma: 'CG4',
                ten: 'Đội Cơ Giới 4',
                don_vi: {
                    ma: 'XNCG',
                    ten: 'Xí Nghiệp Cơ Giới'
                }
            }, {
                ma: 'CG5',
                ten: 'Đội Cơ Giới 5',
                don_vi: {
                    ma: 'XNCG',
                    ten: 'Xí Nghiệp Cơ Giới'
                }
            }
        ];

        // Subject: Tags

        const tags = [
            {
                ten: 'Xe cứu hỏa',
                nhom: {
                    ten: 'Xe máy'
                }
            }, {
                ten: 'Xe biển đỏ',
                nhom: {
                    ten: 'Xe máy'
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

        // TAGS

        tags.forEach((tag) => {
            TbisHelpers.insert({
                subject: 'references',
                category: 'tags',
                dataObject: tag
            });
        });

        console.log('seeding db - done, total of ', quocgias.length + khuvucs.length +
            hangsanxuats.length + models.length + vendors.length + nhoms.length +
            chungloais.length + loais.length + donvis.length + doivanhanhs.length, 'items inserted!');
        
    }
});