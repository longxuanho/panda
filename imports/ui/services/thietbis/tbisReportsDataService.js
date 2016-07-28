import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';
import moment from 'moment';

import { TbisReports } from '../../../api/thietbis/tbisReports';

class TbisReportsDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;
        this.selectedTbisReport = {};
    }

    query(selector, options) {
        // return this.tbisReports;
        if (_.isEmpty(selector))
            return TbisReports.find({}).fetch();
        return TbisReports.find(selector, options).fetch();
    }

    queryOne(tbisReportId) {
        return TbisReports.findOne({_id: tbisReportId});
    }


    initNewTbisReportsData(thietbi) {
        return {
            status: 'open',
            isActive: true,
            tieu_de: '',
            noi_dung: {
                html: '',
                text: ''
            },
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
            throw Error('Có lỗi khi khởi tạo. Vui lòng đóng hộp thoại, kiểm tra đăng nhập của bạn và thử lại sau.');
        if (!data.tham_chieu._id || _.isEmpty(data.tham_chieu.phan_loai) || _.isEmpty(data.tham_chieu.ma_thiet_bi))
            throw Error('Thiết bị không tồn tại. Vui lòng thử lại sau.');
        if (!data.tieu_de)
            throw Error('Chưa có thông tin về tiêu đề thông báo');
        if (!data.noi_dung.html || !data.noi_dung.text)
            throw Error('Chưa có thông tin về nội dung thông báo');
    }

    validateCommentInputData(data) {
        if ((!data._id) || !data.isActive || _.isEmpty(data.metadata.user.nguoi_tao))
            throw Error('Có lỗi khi khởi tạo. Vui lòng đóng hộp thoại, kiểm tra đăng nhập của bạn và thử lại sau.');
        if (!data.noi_dung.html || !data.noi_dung.text.trim())
            throw Error('Chưa có nội dung bình luận');
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

    addNewComment(newComment) {
        let defer = this.$q.defer();
        TbisReports.update({
            _id: this.selectedTbisReport._id
        }, {
            $addToSet: {
                'comments': newComment
            },
            $inc: {
                'thong_ke.commentsCount': 1
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    closeSelectedTbisReport(newAction) {
        let defer = this.$q.defer();
        TbisReports.update({
            _id: this.selectedTbisReport._id
        }, {
            $set: {
                'status': 'closed'
            },
            $addToSet: {
                'actions': newAction
            },
            $inc: {
                'thong_ke.actionsCount': 1
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    mixCommentsAndActions(comments, actions) {
        if (!comments || !actions) return [];
        if (!comments.length && !actions.length) return [];
        if (!comments.length) return actions;
        if (!actions.length) return comments;

        _.each(comments, (comment) => {
            comment.type = 'comment'
        });
        _.each(actions, (action) => {
            action.type = 'action'
        });
        return _.sortBy(_.union(comments, actions), (item) => {
            return item.metadata.thoi_gian.tao_moi.ngay_tao_date;
        });
    }

    setSelectedTbisReport(tbisReportId) {
        this.selectedTbisReport = this.queryOne(tbisReportId);
    }

    getSelectedTbisReport() {
        return this.selectedTbisReport;
    }

    clearSelectedTbisReport() {
        this.selectedTbisReport = {};
    }
}

const name = 'tbisReportsDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisReportsDataService);

