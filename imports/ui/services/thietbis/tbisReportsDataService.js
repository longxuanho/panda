import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import moment from 'moment';

import { TbisReports } from '../../../api/thietbis/tbisReports';

class TbisReportsDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.tbisReports = queryTbisReports();
        this.selectedTbisReport = {};
    }

    query(selector, options) {
        return this.tbisReports;
    }


    initNewTbisReportsData(thietbi) {
        return {
            status: 'open',
            isActive: true,
            tieu_de: '',
            noi_dung: '',
            tham_chieu: {
                _id: thietbi._id,
                phan_loai: thietbi.phan_loai,
                ma_thiet_bi: thietbi.ma_thiet_bi,
                don_vi_van_hanh: thietbi.phan_quyen.van_hanh,
                doi_van_hanh: thietbi.phan_quyen.doi_van_hanh
            },
            comments: [],
            actions: [],
            thong_ke: {
                openWhen: new Date(),
                openHours: 0,
                commentsCount: 0,
                actionsCount: 0
            },
            metadata: {}
        }
    }

    validateTbisReportsInputData(data) {
        if (!data.status || !data.isActive || _.isEmpty(data.thong_ke) || _.isEmpty(data.tham_chieu))
            throw Error('Có lỗi khi khởi tạo. Vui lòng đóng hộp thoại, kiểm tra đăng nhập và thử lại sau.');
        if (!data.tham_chieu._id || _.isEmpty(data.tham_chieu.phan_loai) || _.isEmpty(data.tham_chieu.ma_thiet_bi))
            throw Error('Thiết bị không tồn tại. Vui lòng thử lại sau.');
        if (!data.tieu_de)
            throw Error('Chưa có thông tin về tiêu đề thông báo');
        if (!data.noi_dung)
            throw Error('Chưa có thông tin về nội dung thông báo');
    }

    addNew(data) {
        let defer = this.$q.defer();
        TbisReports.insert(data, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }
}

const name = 'tbisReportsDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisReportsDataService);

function queryTbisReports() {
    "use strict";

    return [
        {
            _id: "TbisReport_001",
            status: 'open',
            tham_chieu: {
                phan_loai: {
                    "nhom" : "Thiết bị nâng",
                    "chung_loai" : "Cẩu bờ",
                    "loai" : "LB cố định",
                    "scope": "Tân Cảng Sài Gòn"
                },
                ma_thiet_bi: {
                    "_id": "mYJ24ciaPQ6HNaKNm",
                    "keyId" : "LBH01_HP"
                },
                don_vi_van_hanh: {
                    "_id" : "keyId_donvis_DVKT",
                    "ma" : "DVKT",
                    "ten" : "Dịch Vụ Kỹ Thuật"
                },
                doi_van_hanh: {}
            },
            isActive: true,
            tieu_de: "Mất tín hiệu điều khiển góc A",
            noi_dung: "Mất tín hiệu điều khiển góc A. Y/c Kiểm tra, đấu lại dây tín hiệu.",
            comments: [
                {
                    _id: "TbisReport_Commments_001",
                    noi_dung: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    isActive: true,
                    metadata: {
                        "thoi_gian" : {
                            "tao_moi" : {
                                "ngay_tao_date" : moment("2016-07-13T07:00:45.084Z").toDate(),
                                "ngay_tao_string" : "2016-07-13, 02:00:45",
                                "nam" : "2016",
                                "thang" : "07",
                                "ngay" : "13",
                                "gio" : "02:00:45"
                            }
                        },
                        "user" : {
                            "nguoi_tao" : {
                                "keyId" : "Tpd9Berm4DbTR2eqb",
                                "name" : "",
                                "email" : "usercomment1@gmail.com"
                            }
                        }
                    }
                },
                {
                    _id: "TbisReport_Commments_002",
                    noi_dung: "Yes, it answers the title, and toDate is indeed how to get a Date object from a moment. But the code in the body of the question asks about time zone conversion.",
                    isActive: true,
                    metadata: {
                        "thoi_gian" : {
                            "tao_moi" : {
                                "ngay_tao_date" : moment("2016-08-13T07:00:45.084Z").toDate(),
                                "ngay_tao_string" : "2016-07-13, 02:00:45",
                                "nam" : "2016",
                                "thang" : "07",
                                "ngay" : "13",
                                "gio" : "02:00:45"
                            }
                        },
                        "user" : {
                            "nguoi_tao" : {
                                "keyId" : "Zpd9Berm4DbTR2eqb",
                                "name" : "User Comment 2",
                                "email" : "usercomment2@gmail.com"
                            }
                        }
                    }
                }
            ],
            thong_ke: {
                openWhen: moment("2016-07-13T07:00:45.084Z").toDate(),
                commentsCount: 2
            },
            metadata: {
                "thoi_gian" : {
                    "tao_moi" : {
                        "ngay_tao_date" : moment("2016-06-13T07:00:45.084Z").toDate(),
                        "ngay_tao_string" : "2016-07-13, 02:00:45",
                        "nam" : "2016",
                        "thang" : "07",
                        "ngay" : "13",
                        "gio" : "02:00:45"
                    }
                },
                "user" : {
                    "nguoi_tao" : {
                        "keyId" : "Bpd9Berm4DbTR2eqb",
                        "name" : "Creator 1",
                        "email" : "creator1@gmail.com"
                    }
                }
            }
        },
        {
            _id: "TbisReport_002",
            status: 'open',
            tham_chieu: {
                phan_loai: {
                    "nhom" : "Thiết bị nâng",
                    "chung_loai" : "Cẩu bờ",
                    "loai" : "LB cố định",
                    "scope": "Tân Cảng Sài Gòn"
                },
                ma_thiet_bi: {
                    "_id": "mYJ24ciaPQ6HNaKNm",
                    "keyId" : "LBH01_HP"
                },
                don_vi_van_hanh: {
                    "_id" : "keyId_donvis_DVKT",
                    "ma" : "DVKT",
                    "ten" : "Dịch Vụ Kỹ Thuật"
                },
                doi_van_hanh: {}
            },
            isActive: true,
            tieu_de: "Matt it just depends on which part of the question you're looking at.",
            noi_dung: "A majority of people search google and see that this title lines up with their question and upvote the answer which answers the title, not the body of the question.",
            comments: [
                {
                    _id: "TbisReport_Commments_001",
                    noi_dung: "You are correctly converting the moment to the time zone, which is reflected in the second line of output from .",
                    isActive: true,
                    metadata: {
                        "thoi_gian" : {
                            "tao_moi" : {
                                "ngay_tao_date" : moment("2016-07-13T07:00:45.084Z").toDate(),
                                "ngay_tao_string" : "2016-07-13, 02:00:45",
                                "nam" : "2016",
                                "thang" : "07",
                                "ngay" : "13",
                                "gio" : "02:00:45"
                            }
                        },
                        "user" : {
                            "nguoi_tao" : {
                                "keyId" : "Tpd9Berm4DbTR2eqb",
                                "name" : "",
                                "email" : "usercomment1@gmail.com"
                            }
                        }
                    }
                }
            ],
            thong_ke: {
                openWhen: moment("2016-07-13T07:00:45.084Z").toDate(),
                commentsCount: 1
            },
            metadata: {
                "thoi_gian" : {
                    "tao_moi" : {
                        "ngay_tao_date" : moment("2016-05-13T07:00:45.084Z").toDate(),
                        "ngay_tao_string" : "2016-07-13, 02:00:45",
                        "nam" : "2016",
                        "thang" : "07",
                        "ngay" : "13",
                        "gio" : "02:00:45"
                    }
                },
                "user" : {
                    "nguoi_tao" : {
                        "keyId" : "Bpd9Berm4DbTR2eqb",
                        "name" : "Creator 2",
                        "email" : "creator1@gmail.com"
                    }
                }
            }
        },
        {
            _id: "TbisReport_003",
            status: 'open',
            tham_chieu: {
                phan_loai: {
                    "nhom" : "Thiết bị nâng",
                    "chung_loai" : "Cẩu bờ",
                    "loai" : "LB cố định",
                    "scope": "Tân Cảng Sài Gòn"
                },
                ma_thiet_bi: {
                    "_id": "mYJ24ciaPQ6HNaKNm",
                    "keyId" : "LBH01_HP"
                },
                don_vi_van_hanh: {
                    "_id" : "keyId_donvis_DVKT",
                    "ma" : "DVKT",
                    "ten" : "Dịch Vụ Kỹ Thuật"
                },
                doi_van_hanh: {}
            },
            isActive: true,
            tieu_de: "Switching to UTC doesn't just drop the offset",
            noi_dung: "Perhaps you are just trying to change the output format string? If so, just specify the parameters you want to the format method.",
            comments: [
            ],
            thong_ke: {
                openWhen: moment("2016-06-13T07:00:45.084Z").toDate(),
                commentsCount: 0
            },
            metadata: {
                "thoi_gian" : {
                    "tao_moi" : {
                        "ngay_tao_date" : moment("2016-07-25T07:00:45.084Z").toDate(),
                        "ngay_tao_string" : "2016-07-13, 02:00:45",
                        "nam" : "2016",
                        "thang" : "07",
                        "ngay" : "13",
                        "gio" : "02:00:45"
                    }
                },
                "user" : {
                    "nguoi_tao" : {
                        "keyId" : "Bpd9Berm4DbTR2eqb",
                        "name" : "Creator 1",
                        "email" : "creator1@gmail.com"
                    }
                }
            }
        }
    ]
}
