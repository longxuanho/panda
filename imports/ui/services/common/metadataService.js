import angular from 'angular';
import angularMeteor from 'angular-meteor';

import moment from 'moment/min/moment-with-locales.min';

class MetadataService {

    constructor() {
    }

    buildNewMetadata(object, user) {
        if (_.isEmpty(object))
            throw Error('Không có thông tin về đối tượng được xử lý (metadata).');
        if (_.isEmpty(user))
            throw Error('Skynet không thể truy vấn thông tin của bạn. Vui lòng đăng nhập lại chương trình.');

        object.metadata = {
            thoi_gian: {
                tao_moi: buildDateStamp()
            },
            user: {
                nguoi_tao: buildUserStamp(user)
            },
            statistics: {
                isModified: false,
                modifyCount: 0
            }
        }
    }

    buildEditMetadata(object, user) {
        if (_.isEmpty(object))
            throw Error('Không có thông tin về đối tượng được xử lý (metadata).');
        if (_.isEmpty(user))
            throw Error('Skynet không thể truy vấn thông tin của bạn. Vui lòng đăng nhập lại chương trình.');

        object.metadata = object.metadata || { thoi_gian: {}, user: {} };
        object.metadata.thoi_gian.cap_nhat_cuoi = buildDateStamp();
        object.metadata.user.nguoi_cap_nhat_cuoi = buildUserStamp(user);
        object.metadata.statistics.isModified = true;
        object.metadata.statistics.modifyCount++;
    }
}

const name = 'metadataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, MetadataService);


function buildDateStamp() {
    let now = moment();
    return {
        ngay_tao_date: new Date(),
        ngay_tao_string: now.format('YYYY-MM-DD, hh:mm:ss'),
        nam: now.format('YYYY'),
        thang: now.format('MM'),
        ngay:  now.format('DD'),
        gio: now.format('hh:mm:ss')
    }
}

function buildUserStamp(user) {
    return {
        keyId: user._id,
        name: (user.profile) ? user.profile.name || '' : '',
        email: user.emails[0].address
    }
}