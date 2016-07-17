import { Meteor } from 'meteor/meteor';
import { TsktHelpers } from '../../api/thietbis/tsktHelpers';

Meteor.startup(() => {
    console.log('start up server... ', TsktHelpers.find().count(), ' tsktHelper items already seeded!');

    if (TsktHelpers.find().count() === 0) {

        console.log('start creating seed tsktHelpers db...');

        // Subject: nhoms

        const nhoms = [
            {
                order: 100,
                ten: 'Phân cấp cẩu',
                loai_thiet_bi: 'LB cố định'
            }, {
                order: 200,
                ten: 'Tải trọng, tầm với',
                loai_thiet_bi: 'LB cố định'
            }, {
                order: 300,
                ten: 'Trọng lượng',
                loai_thiet_bi: 'LB cố định'
            }, {
                order: 400,
                ten: 'Tốc độ, công suất',
                loai_thiet_bi: 'LB cố định'
            }, {
                order: 500,
                ten: 'Điều kiện thiết kế',
                loai_thiet_bi: 'LB cố định'
            }, {
                order: 600,
                ten: 'Động cơ điện',
                loai_thiet_bi: 'LB cố định'
            }
        ];

        // Subject: tens

        const tenthongsos = [
            {
                order: 100,
                ten: 'Toàn bộ cẩu',
                nhom: {
                    ten: 'Phân cấp cẩu',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 200,
                ten: 'Kết cấu thép',
                nhom: {
                    ten: 'Phân cấp cẩu',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 300,
                ten: 'Cc nâng hàng',
                nhom: {
                    ten: 'Phân cấp cẩu',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 400,
                ten: 'Cc xoay cần',
                nhom: {
                    ten: 'Phân cấp cẩu',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 500,
                ten: 'Cc nâng cần',
                nhom: {
                    ten: 'Phân cấp cẩu',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 100,
                ten: 'Bán kính',
                nhom: {
                    ten: 'Tải trọng, tầm với',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 200,
                ten: 'Khi dùng móc',
                nhom: {
                    ten: 'Tải trọng, tầm với',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 300,
                ten: 'Khi dùng gàu',
                nhom: {
                    ten: 'Tải trọng, tầm với',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 100,
                ten: 'Tổng trọng lượng',
                nhom: {
                    ten: 'Trọng lượng',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 200,
                ten: 'Phần đế nối',
                nhom: {
                    ten: 'Trọng lượng',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 300,
                ten: 'Các cấu kiện rời',
                nhom: {
                    ten: 'Trọng lượng',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 100,
                ten: 'Nâng/hạ tải 40 tấn',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 200,
                ten: 'Nâng/hạ tải 20 tấn',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 300,
                ten: 'Nâng/hạ tải với móc rỗng',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 400,
                ten: 'Tốc độ xoay',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 500,
                ten: 'Góc xoay',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 600,
                ten: 'Thời gian nâng cần',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 700,
                ten: 'Khai thác hàng cont',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 800,
                ten: 'Khai thác hàng rời',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 100,
                ten: 'Nhiệt dộ thiết kế',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 200,
                ten: 'Nhiệt dộ làm việc',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 300,
                ten: 'Độ ẩm tối đa',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 400,
                ten: 'Tốc độ gió cho phép',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 500,
                ten: 'Tốc độ gió cho phép',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 100,
                ten: 'Dòng khởi động',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 200,
                ten: 'Dòng danh nghĩa',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 300,
                ten: 'Bộ khởi động',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 400,
                ten: 'Nguồn chính',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 500,
                ten: 'Nguồn phụ',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 600,
                ten: 'Cấp bảo vệ',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                order: 700,
                ten: 'Cấp cách điện',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }
        ];

        // Subject: donvis

        const donvis = [
            {
                ten: '',
                nhom: {
                    ten: 'Phân cấp cẩu',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'tấn',
                nhom: {
                    ten: 'Tải trọng, tầm với',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'mét',
                nhom: {
                    ten: 'Tải trọng, tầm với',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'tấn',
                nhom: {
                    ten: 'Trọng lượng',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'm/phút',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'vòng/phút',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'giây',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'cont/giờ',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'tấn/giờ',
                nhom: {
                    ten: 'Tốc độ, công suất',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'độ C',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: '%',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'm/giây',
                nhom: {
                    ten: 'Điều kiện thiết kế',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: '',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }, {
                ten: 'A',
                nhom: {
                    ten: 'Động cơ điện',
                    loai_thiet_bi: 'LB cố định'
                }
            }
        ];

        // >>>>>>>>>>>>>>>>>>>>>

        // NHOMS

        nhoms.forEach((nhom) => {
            TsktHelpers.insert({
                subject: 'thongsokythuats',
                category: 'nhoms',
                dataObject: nhom
            });
        });

        // TENS

        tenthongsos.forEach((tenthongso) => {
            TsktHelpers.insert({
                subject: 'thongsokythuats',
                category: 'tenthongsos',
                dataObject: tenthongso
            });
        });

        // DONVIS

        donvis.forEach((donvi) => {
            TsktHelpers.insert({
                subject: 'thongsokythuats',
                category: 'donvis',
                dataObject: donvi
            });
        });

        console.log('seeding db - done, total of ', nhoms.length + tenthongsos.length +
            donvis.length, 'items inserted!');

    }
});