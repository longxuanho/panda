import _ from 'underscore';
import { Meteor } from 'meteor/meteor';

import { ThietBis } from './collection';

export function getTbisSourceForPanelFilter() {
    if (!Meteor.userId()) {
        throw new Meteor.Error(400, 'Bạn cần đăng nhập để có thể truy vấn thông tin!');
    }
    let tbisResource =  ThietBis.find({},{
        fields: {
            'phan_loai.chung_loai': 1,
            'phan_loai.loai': 1,
            'dia_diem.khu_vuc.ten': 1,
            'nguon_goc.hang_san_xuat': 1,
            'phan_quyen.so_huu.ten': 1,
            'phan_quyen.quan_ly.ten': 1,
        }
    }).fetch();
    let result = {};

    result.chungloais = _.uniq(_.map(tbisResource,(item) => item.phan_loai.chung_loai));
    result.loais = _.uniq(_.map(tbisResource,(item) => item.phan_loai.loai));
    result.khuvucs = _.uniq(_.map(tbisResource,(item) => item.dia_diem.khu_vuc.ten));
    result.hangsanxuats = _.uniq(_.map(tbisResource,(item) => item.nguon_goc.hang_san_xuat));
    result.dvsohuus = _.uniq(_.map(tbisResource,(item) => item.phan_quyen.so_huu.ten));
    result.dvquanlies = _.uniq(_.map(tbisResource,(item) => item.phan_quyen.quan_ly.ten));

    return result;
}

Meteor.methods({
    getTbisSourceForPanelFilter
});