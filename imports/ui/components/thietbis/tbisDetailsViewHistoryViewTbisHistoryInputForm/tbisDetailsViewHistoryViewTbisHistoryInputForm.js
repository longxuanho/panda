import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisDetailsViewHistoryViewTbisHistoryInputForm.html';
// import { name as TbisListPageSettingsService } from '../../../services/thietbis/tbisListPageSettingsService';


class TbisDetailsViewHistoryViewTbisHistoryInputForm {
    constructor($scope) {
        'ngInject';


        this.now = new Date();

        $scope.$watch('tbisDetailsViewHistoryViewTbisHistoryInputForm.viewModel.isDone', (newVal, oldVal) => {
            if (!newVal && oldVal)
                this.viewModel.thoi_gian.ket_thuc = {};
        });

        $scope.$watch('tbisDetailsViewHistoryViewTbisHistoryInputForm.viewModel.phan_loai.nhom', (newVal) => {
            if (newVal != 'Sửa chữa nhỏ')
                this.viewModel.phan_loai.loai = '';
        });

        $scope.$watch('tbisDetailsViewHistoryViewTbisHistoryInputForm.viewModel.thoi_gian.bat_dau.refDate', (newVal) => {
            if (this.viewModel && this.viewModel.isDone && this.kDateTimePickerEndDate)
                this.kDateTimePickerEndDate.min(newVal);
        });
    }
}

const name = 'tbisDetailsViewHistoryViewTbisHistoryInputForm';

// create a module
export default angular.module(name, [
    angularMeteor,
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        viewModel: '=',
        isEditorActive: '<'
    },
    controller: TbisDetailsViewHistoryViewTbisHistoryInputForm
});