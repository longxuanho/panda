import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { DataHelpers } from '../../../api/datahelpers';

class DhelpsDataService {

    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.selectedDataHelper = {
            dataHelper: {}
        };
    }

    query(selector, options) {
        if (!selector)
            return DataHelpers.find({}).fetch();
        if (!options)
            return DataHelpers.find(selector).fetch();
        return DataHelpers.find(selector, options).fetch();
    }

    queryOne(datahelperId) {
        return DataHelpers.findOne({_id: datahelperId});
    }

    initNewDataHelperData() {
        return {
            module: '',
            stateName: '',
            subject: '',
            dataSource: {},
            stringifiedDataSource: '', // Trường dữ liệu này sẽ không được ghi nhận vào Schema,
            isPublic: true
        }
    }

    validateInputDataHelper(data) {
        if (!data.module || !data.stateName || !data.subject)
            throw Error('Chưa có thông tin khởi tạo. Validate input data failed!');
        if (_.isEmpty(data.dataSource))
            throw Error('Chưa có thông tin về dataSource. Thông tin không hợp lệ.');
    }


    addNew(data) {
        let defer = this.$q.defer();
        DataHelpers.insert(data, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    updateDataHelper(data) {
        let defer = this.$q.defer();
        DataHelpers.update({
            _id: data._id
        }, {
            $set: {
                dataSource: data.dataSource,
                order: data.order,
                isPublic: data.isPublic
            }
        }, (error) => {
            if (error)
                defer.reject(error);
            else
                defer.resolve();
        });
        return defer.promise;
    }

    getSelectedDataHelper() {
        return this.selectedDataHelper;
    }

    setSelectedDataHelper(datahelperId) {
        if (!datahelperId)
            this.selectedDataHelper.dataHelper = {};
        else
            this.selectedDataHelper.dataHelper = this.queryOne(datahelperId);
    }

    queryUISelectOptionsDBData() {
        return queryUISelectOptionsDBData();
    }

}

const name = 'dhelpsDataService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, DhelpsDataService);


function queryUISelectOptionsDBData() {
    return {
        "modules": [
            "commons",
            "thietbis",
            "thongsokts"
        ],
        "stateNames": {
            "commons": [
                "dhelpsList"
            ],
            "thietbis": [
                "tbisList"
            ],
            "thongsokts": [
                "tsktList"
            ]
        },
        "subjects": {
            "dhelpsList": [
                "quocgias",
                "donvis",
            ],
            "tbisList": [
                "khuvucs",
                "hangsanxuats",
                "models",
                "vendors",
                "nhoms",
                "chungloais",
                "loais",
                "doivanhanhs",
                "tags"
            ],
            "tsktList": [
                "nhomtskts",
                "tentskts",
                "donvitinhs"
            ]
        }
    }
}