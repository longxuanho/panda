import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

import { name as UserLocalSettingsService } from '../../services/common/userLocalSettingsService';


class SubscribeDataService {

    constructor(userLocalSettingsService) {
        'ngInject';

        this.userLocalSettingsService = userLocalSettingsService;

        this.currentSubscribeOptions = {
            subscribe: {}
        };
    }

    updateCurrentOptions(stateName) {
        // Check pandora.js - Hàm được gọi mỗi khi chuyển route thành công
        this.currentSubscribeOptions.subscribe = this.queryCurrentSubscribeOptions(stateName);
    }

    queryCurrentSubscribeOptions(stateName) {
        if (_.contains(['tbisList', 'tbisrepList', 'tbishisList'], stateName)) {
            let mapToModule = {
                tbisList: 'thietbis',
                tbisrepList: 'tbisreports',
                tbishisList: 'tbishistories'
            };
            return this.userLocalSettingsService.getPageSettings(mapToModule[stateName], stateName).suscribe;
        }
        return {};
    }

    getCurrentSubscribeOptions() {
        return this.currentSubscribeOptions;
    }

}

const name = 'subscribeDataService';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
])
    .service(name, SubscribeDataService);