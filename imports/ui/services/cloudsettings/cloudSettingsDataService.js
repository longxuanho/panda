import { CloudSettings } from '../../../api/cloudsettings';

import { Random } from 'meteor/random';

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

class CloudSettingsDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.selectedCloudSetting = {
            cloudSetting: {
                _id: ''
            }
        };
    }

    queryForDescriptionList(selector) {
        let options = {
            fields: {
                'dataSource.description': 1,
                'order': 1,
                'icon': 1
            }
        };
        if (!selector)
            return CloudSettings.find({}, options).fetch();
        return CloudSettings.find(selector, {options}).fetch();
    }

    queryOne(cloudSettingId) {
        return CloudSettings.findOne({_id: cloudSettingId});
    }

    initNewCloudSettingData(moduleName, stateName, subjectName) {
        let currentUser = Meteor.user();
        return {
            module: moduleName,
            stateName: stateName,
            subject: subjectName,
            user: {
                _id: currentUser._id,
                name: currentUser.profile.name,
                email: currentUser.emails[0].address
            },
            dataSource: {
                _id: Random.id()
            },
            order: 100,
            isPublic: false
        }
    }

    validateCloudSettingData(data) {
        if (!data.module)
            throw Error('Chưa có thông tin về module');
        if (!data.stateName)
            throw Error('Chưa có thông tin về sateName');
        if (!data.subject)
            throw Error('Chưa có thông tin về subject');
        if (!data.user._id)
            throw Error('Chưa có thông tin tham chiếu người dùng');
        if (!data.dataSource._id || !data.dataSource.description || !data.dataSource.options)
            throw Error('Chưa có thông tin cấu hình hiện tại');
    }

    addNew(data) {
        let defer = this.$q.defer();
        CloudSettings.insert(data, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateSelectedCloudSettingDescription(cloudSetting) {
        let defer = this.$q.defer();
        CloudSettings.update({
            _id: cloudSetting._id
        }, {
            $set: {
                'dataSource.description': cloudSetting.dataSource.description,
                'order': cloudSetting.order,
                'icon': cloudSetting.icon
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    getSelectedCloudSetting() {
        return this.selectedCloudSetting;
    }

    setSelectedCloudSetting(cloudSettingId) {
        this.selectedCloudSetting.cloudSetting = this.queryOne(cloudSettingId);
    }

    removeSelectedCloudSetting(cloudSettingId) {
        let defer = this.$q.defer();
            CloudSettings.remove(cloudSettingId, (error) => {
                if (error)
                    defer.reject(error);
                else
                    defer.resolve();
            });
        return defer.promise;
    }
}

const name = 'cloudSettingsDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, CloudSettingsDataService);
