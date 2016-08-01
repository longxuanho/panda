import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import moment from 'moment';

import { TbisHistories } from '../../../api/thietbis/tbisHistories';

class TbisHistoriesDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;
        this.selectedTbisHistory = {};
    }

    query(selector, options) {
        if (_.isEmpty(selector))
            return TbisHistories.find({}).fetch();
        return TbisHistories.find(selector, options).fetch();
    }

    queryOne(tbisHistoryId) {
        return TbisHistories.findOne({_id: tbisHistoryId});
    }


    initNewTbisHistoryData(thietbi) {
        return {
            isDone: true,
            tham_chieu: {
                _id: thietbi._id,
                phan_loai: thietbi.phan_loai,
                ma_thiet_bi: thietbi.ma_thiet_bi,
                don_vi_van_hanh: thietbi.phan_quyen.van_hanh,
                doi_van_hanh: thietbi.phan_quyen.doi_van_hanh
            },
            phan_loai: {
                nhom: '',
                loai: ''
            },
            noi_dung: '',
            ghi_chu: {},
            thoi_gian: {
                bat_dau: {},
                ket_thuc: {}
            },
            thong_ke: {
                duration: {}
            },
            isActive: true,
            metadata: {}
        }
    }

    validateTbisHistoryInputData(data) {
        if (!data.isActive || _.isEmpty(data.tham_chieu))
            throw Error('Có lỗi khi khởi tạo. Vui lòng đóng hộp thoại, kiểm tra đăng nhập của bạn và thử lại sau.');
        if (!data.tham_chieu._id || _.isEmpty(data.tham_chieu.phan_loai) || _.isEmpty(data.tham_chieu.ma_thiet_bi))
            throw Error('Thiết bị không tồn tại. Vui lòng thử lại sau.');
        if (!data.phan_loai.nhom)
            throw Error('Chưa có thông tin về nhóm sửa chữa.');
        if (data.phan_loai.nhom=='Sửa chữa nhỏ' && !data.phan_loai.loai)
            throw Error('Chưa có thông tin về loại sửa chữa (Kế hoạch hay Đột xuất?)');
        if (!data.noi_dung)
            throw Error('Chưa có thông tin về nội dung sửa chữa.');
        if (_.isEmpty(data.thoi_gian.bat_dau))
            throw Error('Chưa có thông tin về thời gian bắt đầu.');
        if (data.isDone) {
            if (!data.thoi_gian.ket_thuc.refDate)
                throw Error('Chưa có thông tin về thời gian kết thúc.');
            if (data.thoi_gian.ket_thuc.refDate <= data.thoi_gian.bat_dau.refDate)
                throw Error('Thông tin về khoảng thời gian không hợp lệ.');
            if (_.isEmpty(data.thong_ke.duration))
                throw Error('Có lỗi khi tính toán xác định khoảng thời gian. Vui lòng thử lại sau.');
        }
        if (!data.isDone && data.thoi_gian.ket_thuc.refDate)
            throw Error('Sửa chữa chưa hoàn thành nhưng bạn đã nhập thời gian kết thúc. Bạn chắc chứ?');
    }

    solveStatistics(data) {
        if (data.isDone) {
            let myDuration = moment.duration(moment(data.thoi_gian.ket_thuc.refDate).diff(data.thoi_gian.bat_dau.refDate));
            data.thong_ke.duration = {
                days: myDuration.get('days'),
                hours: myDuration.get('hours'),
                minutes: myDuration.get('minutes')
            }
        } else {
            data.thong_ke.duration = {
                days: 0,
                hours: 0,
                minutes: 0
            }
        }
    }

    addNew(data) {
        let defer = this.$q.defer();
        TbisHistories.insert(data, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateGhiChuSelectedTbisHistory(newGhiChuObj) {
        let defer = this.$q.defer();
        TbisHistories.update({
            _id: this.selectedTbisHistory._id
        }, {
            $set: {
                'ghi_chu': newGhiChuObj
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateSelectedTbisHistory(newTbisHistory) {
        let defer = this.$q.defer();
        TbisHistories.update({
            _id: this.selectedTbisHistory._id
        }, {
            $set: {
                'noi_dung': newTbisHistory.noi_dung
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    setSelectedTbisHistory(tbisHistoryId) {
        this.selectedTbisHistory = this.queryOne(tbisHistoryId);
    }

    getSelectedTbisHistory() {
        return this.selectedTbisHistory;
    }

    clearSelectedTbisHistory() {
        this.selectedTbisHistory = {};
    }
}

const name = 'tbisHistoriesDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisHistoriesDataService);

