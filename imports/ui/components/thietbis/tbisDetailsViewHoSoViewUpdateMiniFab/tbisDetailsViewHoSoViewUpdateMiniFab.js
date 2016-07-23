import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';

import fabTemplate from './tbisDetailsViewHoSoViewUpdateMiniFab.html';
import modalTemplate from './tbisDetailsViewHoSoViewUpdateModal.html';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
import { name as TbisDetailsUpdateThongSoTab } from '../tbisDetailsUpdateThongSoTab/tbisDetailsUpdateThongSoTab';
import { name as TbisDetailsUpdateViTriTab } from '../tbisDetailsUpdateViTriTab/tbisDetailsUpdateViTriTab';
import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';


class TbisDetailsViewHoSoViewUpdateMiniFab {
    constructor($mdDialog, $mdMedia, $timeout) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, metadataService, notificationService, tsktThongSoKyThuatDataService, $stateParams) {
                'ngInject';

                this.solveThongSoKyThuats = () => {
                    this.thongsokythuats = tbisDataService.getSelectedThongSoKyThuatGroupBy(this.thietbi.thong_so_ky_thuat);
                };

                this.solveThongSoHoatDong= () => {
                    this.newThongSo.thong_so_hoat_dong = this.thietbi.thong_so_hoat_dong;
                };

                this.tabSelected = '';
                this.tabModeSelected = 'thong_so_hoat_dong';      // Chỉ dùng cho mode ở tab thông số kỹ thuật (thong_so_hoat_dong || thong_so_ky_thuat)
                this.newThongSo = {
                    thong_so_hoat_dong: {},
                    thong_so_ky_thuat: {}
                };

                this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                this.solveThongSoKyThuats();
                this.solveThongSoHoatDong();


                
                this.save = () => {
                    try {
                        metadataService.buildUpdateMetadata(this.thietbi, Meteor.user());
                        tbisDataService.validateMajorInputThietBiData(this.thietbi);
                        tbisDataService.updateMajorForm(this.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.reset = () => {
                    this.thietbi = angular.copy(tbisDataService.getSelectedThietBi());
                    this.solveThongSoKyThuats();
                    this.solveThongSoHoatDong();
                };

                this.addNewThongSo = () => {
                    try {
                        this.newThongSo.thong_so_ky_thuat.addNew = true;
                        tsktThongSoKyThuatDataService.validateNewThongSoKyThuatInputData(this.newThongSo.thong_so_ky_thuat);
                        this.thietbi.thong_so_ky_thuat = this.thietbi.thong_so_ky_thuat || [];
                        this.thietbi.thong_so_ky_thuat.push(this.newThongSo.thong_so_ky_thuat);
                        this.solveThongSoKyThuats();
                        this.newThongSo.thong_so_ky_thuat = {};
                    }
                    catch (error) {                        
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.saveThongSo = () => {
                    metadataService.buildUpdateMetadata(this.thietbi, Meteor.user());
                    if (this.tabModeSelected === 'thong_so_hoat_dong') {
                        tbisDataService.updateThongSoHoatDong(this.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.solveThongSoHoatDong();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    if (this.tabModeSelected === 'thong_so_ky_thuat') {
                        // Lọc các thông số, bỏ đi các giá trị bị gắn cờ remove = true;
                        this.thietbi.thong_so_ky_thuat = _.reject(this.thietbi.thong_so_ky_thuat, (item) => {
                            return item.remove;
                        });
                        tbisDataService.updateThongSoKyThuat(this.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.solveThongSoKyThuats();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });    
                    }                    
                };

                this.saveLocation = () => {
                    tbisDataService.updateLocation(this.thietbi).then(() => {
                        notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                    }).catch((err) => {
                        notificationService.error(err.message, 'Cập nhật thất bại');
                    });
                };

                this.toggleRemoveThongSoKyThuat = (thongsokythuat) => {
                    if (thongsokythuat.addNew) {
                        // Xóa khỏi arr thông số kỹ thuật nếu thông số là mới thêm vào và chưa được lưu
                        this.thietbi.thong_so_ky_thuat = _.reject(this.thietbi.thong_so_ky_thuat, (item) => {
                            return item._id === thongsokythuat._id;
                        });
                        this.solveThongSoKyThuats();
                    } else {
                        thongsokythuat.remove = !thongsokythuat.remove;
                        _.each(this.thietbi.thong_so_ky_thuat, (item) => {
                            if (item._id === thongsokythuat._id)
                                item.remove = thongsokythuat.remove;
                        });
                    }
                };

                this.close = () => {
                    $mdDialog.hide();
                };


            },
            controllerAs: 'tbisDetailsViewHoSoViewUpdateModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'tbisDetailsViewHoSoViewUpdateMiniFab';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMessages,
    TbisListMajorInputForm,
    TbisDetailsUpdateThongSoTab,
    TbisDetailsUpdateViTriTab,
    TbisDataSerivce,
    MetadataService,
    TsktThongSoKyThuatDataService,
    NotificationService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewUpdateMiniFab
});