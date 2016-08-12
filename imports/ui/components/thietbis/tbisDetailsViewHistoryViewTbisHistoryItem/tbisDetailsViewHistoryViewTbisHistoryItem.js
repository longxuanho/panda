import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewTbisHistoryItem.html';

import { name as DisplayRelativeTimeFilter } from '../../../filters/common/displayRelativeTimeFilter';
import { name as DisplayCustomDateTimeFilter } from '../../../filters/common/displayCustomDateTimeFilter';
import { name as TbisHistoriesDataService } from '../../../services/thietbis/tbisHistoriesDataService';

class TbisDetailsViewHistoryViewTbisHistoryItem {
    constructor() {
        'ngInject';

        this.displayIcon = resolveDisplayIcon(this.viewModel.phan_loai);
    }
}

const name = 'tbisDetailsViewHistoryViewTbisHistoryItem';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayRelativeTimeFilter,
    DisplayCustomDateTimeFilter,
    TbisHistoriesDataService
]).component(name, {
    template,
    bindings: {
        viewModel: '<'
    },
    controllerAs: name,
    controller: TbisDetailsViewHistoryViewTbisHistoryItem
});

function resolveDisplayIcon(phanLoai) {
    if (phanLoai.nhom != 'Sửa chữa nhỏ') {
        let mapIcons = {
            'Sửa chữa lớn': 'not_interested.svg',
            'Sửa chữa cụm': 'widgets.svg',
            'Bảo dưỡng': 'event.svg',
            'Đại tu': 'exit_to_app.svg'
        };
        return mapIcons[phanLoai.nhom];
    } else {
        let mapIcons = {
            'Đột xuất': 'error_outline.svg',
            'Kế hoạch': 'playlist_add_check.svg'
        };
        return mapIcons[phanLoai.loai];
    }
}