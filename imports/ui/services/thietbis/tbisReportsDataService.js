import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import moment from 'moment';

// import { ThietBis } from '../../../api/thietbis/tbis';

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


    initNewTbisReportsData() {
        return {
            // ma_thiet_bi: {},
            // phan_loai: {},
            // trang_thai: 'Đang hoạt động',
            // nguon_goc: {},
            // dia_diem: {},
            // phan_quyen: {
            //     quan_ly: {},
            //     so_huu: {},
            //     van_hanh: {},
            //     doi_van_hanh: {}
            // },
            // ho_so: {},
            // bao_hanh: {},
            // tags: [],
            // thong_so_ky_thuat: [],
            // thong_so_hoat_dong: {},
            // isActive: true,
            // metadata: {}
        }
    }

    validateTbisReportsInputData(data) {
        // if (!data.ma_thiet_bi.keyId)
        //     throw Error('Chưa có thông tin về mã thiết bị');
        // if (!data.phan_loai.nhom)
        //     throw Error('Chưa có thông tin về nhóm thiết bị');
        // if (!data.phan_loai.chung_loai)
        //     throw Error('Chưa có thông tin về chủng loại thiết bị');
        // if (!data.phan_loai.loai)
        //     throw Error('Chưa có thông tin về loại thiết bị');
        // if (!data.nguon_goc.hang_san_xuat)
        //     throw Error('Chưa có thông tin về hãng sản xuất');
        // if (_.isEmpty(data.dia_diem.khu_vuc))
        //     throw Error('Chưa có thông tin về khu vực hoạt động');
        // if (_.isEmpty(data.phan_quyen.quan_ly))
        //     throw Error('Chưa có thông tin về đơn vị quản lý');
        // if (_.isEmpty(data.phan_quyen.so_huu))
        //     throw Error('Chưa có thông tin về đơn vị sở hữu');
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
                        "keyId" : "Bpd9Berm4DbTR2eqb",
                        "name" : "Creator 1",
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
                        "keyId" : "Bpd9Berm4DbTR2eqb",
                        "name" : "Creator 1",
                        "email" : "creator1@gmail.com"
                    }
                }
            }
        }
    ]
}
