import angular from 'angular';
import angularMeteor from 'angular-meteor';

class MetadataService {

    constructor() {
    }

    buildNewMetadata(object, user) {
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
    return {
        ngay_tao_date: new Date(),
        ngay_tao_string: '',
        nam: '',
        thang: '',
        ngay: ''
    }
}

function buildUserStamp(user) {
    return {
        keyId: user._id,
        name: user.profile.name || '',
        email: user.emails[0].address
    }
}