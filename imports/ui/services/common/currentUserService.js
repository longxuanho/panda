import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Roles } from 'meteor/alanning:roles';

import { name as TbisDataService } from '../../services/thietbis/tbisDataService';

import _ from 'underscore';

class CurrentUserService {

    constructor(tbisDataService) {
        'ngInject';

        this.currentUser = {
            user: {}
        };

        this.currentUserRights = {
            tbis: {
                isAllowView: false,
                isAllowInsert: false,
                isAllowUpdate: false,
                isAllowRemove: false,
                availableFields: ['ma_thiet_bi', 'phan_loai', 'trang_thai', 'nguon_goc', 'dia_diem', 'phan_quyen', 'ho_so', 'bao_hanh', 'kiem_dinh', 'tags', 'ghi_chu', 'mo_ta'],
                fieldsCanUpdate: []
            }
        };

        this.selectedThietBi = tbisDataService.getSelectedThietBi();
    }

    setCurrentUser(user) {
        this.currentUser.user = angular.copy(user);
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getCurrentUserRights() {
        return this.currentUserRights;
    }

    resolveCurrentUserRights(moduleName) {
        // Hàm reactive được gọi trong <auth> để cập nhật lại ui hiển thị theo phân quyền người dùng
        this.currentUserRights[moduleName].isAllowView = this.resolveCurrentUserAllowView(moduleName);
        this.currentUserRights[moduleName].isAllowInsert = this.resolveCurrentUserAllowInsert(moduleName);
        this.currentUserRights[moduleName].isAllowUpdate = this.resolveCurrentUserAllowUpdate(moduleName);
        this.currentUserRights[moduleName].fieldsCanUpdate = this.resolveFieldsCanUpdate(moduleName);
        this.currentUserRights[moduleName].isAllowRemove = this.resolveCurrentUserAllowRemove(moduleName);
    }

    resolveCurrentUserAllowView(moduleName) {
        if (this.currentUser.user && this.currentUser.user._id) {
            if (Roles.userIsInRole(this.currentUser.user._id, 'admin', 'sky-project'))
                return true;

            if (moduleName === 'tbis')
                return Roles.userIsInRole(this.currentUser.user._id, ['tbis:viux','tbis:viu', 'tbis:vi', 'tbis:vu', 'tbis:v'], 'rights');
        }

        return false;
    }

    resolveCurrentUserAllowInsert(moduleName) {
        if (this.currentUser.user && this.currentUser.user._id) {
            if (Roles.userIsInRole(this.currentUser.user._id, 'admin', 'sky-project'))
                return true;

            if (moduleName === 'tbis')
                return Roles.userIsInRole(this.currentUser.user._id, ['tbis:viux','tbis:viu', 'tbis:vix','tbis:vi'], 'rights');
        }

        return false;
    }

    resolveCurrentUserAllowRemove(moduleName) {
        if (this.currentUser.user && this.currentUser.user._id) {
            if (Roles.userIsInRole(this.currentUser.user._id, 'admin', 'sky-project'))
                return true;

            if (moduleName === 'tbis')
                return Roles.userIsInRole(this.currentUser.user._id, ['tbis:viux','tbis:vix', 'tbis:vux', 'tbis:vx'], 'rights');
        }
        return false;
    }

    resolveCurrentUserAllowUpdate(moduleName) {
        if (this.currentUser.user && this.currentUser.user._id) {
            if (Roles.userIsInRole(this.currentUser.user._id, 'admin', 'sky-project'))
                return true;

            if (moduleName === 'tbis')
                return Roles.userIsInRole(this.currentUser.user._id, ['tbis:viux','tbis:viu', 'tbis:vux', 'tbis:vu'], 'rights');
        }
        return false;
    }

    resolveFieldsCanUpdate(moduleName) {
        // Hàm reactive được gọi từ tbisDisplayListView, dùng cho UI để khóa các vùng không được cập nhật
        if (moduleName === 'tbis') {

            if (this.currentUser.user && this.currentUser.user.roles) {
                let allowedUpdateFields = _.find(this.currentUser.user.roles.updatefields, (item) => {
                    return item.match(/^tbis:/g)
                });
                if (allowedUpdateFields) {
                    let allowedUpdateFieldsArr = allowedUpdateFields.replace('tbis:', '').split('|');

                    // Trường hợp user được cấp quyền 'tbis:all' trong group 'updatefields', anh ta được cập nhật không giới hạn
                    if (_.contains(allowedUpdateFieldsArr, 'all')) {
                        return angular.copy(this.currentUserRights.tbis.availableFields);
                    } else {
                        return _.intersection(this.currentUserRights.tbis.availableFields, allowedUpdateFieldsArr);
                    }
                }
            }
            return [];
        }

    }

}

const name = 'currentUserService';

// create a module
export default angular.module(name, [
    angularMeteor,
    TbisDataService
])
    .service(name, CurrentUserService);
