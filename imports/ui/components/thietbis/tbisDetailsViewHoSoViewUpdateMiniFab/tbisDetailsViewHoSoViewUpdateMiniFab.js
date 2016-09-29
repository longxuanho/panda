import angular from 'angular';
import angularMeteor from 'angular-meteor';

import ngMessages from 'angular-messages';
import _ from 'underscore';

import fabTemplate from './tbisDetailsViewHoSoViewUpdateMiniFab.html';
import modalTemplate from './tbisDetailsViewHoSoViewUpdateModal.html';

import { name as MetadataService } from '../../../services/common/metadataService';
import { name as TbisListMajorInputForm } from '../tbisListMajorInputForm/tbisListMajorInputForm';
import { name as TbisDetailsUpdateThongSoTab } from '../tbisDetailsUpdateThongSoTab/tbisDetailsUpdateThongSoTab';
import { name as TbisDetailsUpdateViTriTab } from '../tbisDetailsUpdateViTriTab/tbisDetailsUpdateViTriTab';
import { name as TbisDetailsDarkZoneTab } from '../tbisDetailsDarkZoneTab/tbisDetailsDarkZoneTab';

import { name as TbisDataSerivce } from '../../../services/thietbis/tbisDataService';
import { name as NotificationService } from '../../../services/common/notificationService';
import { name as TsktThongSoKyThuatDataService } from '../../../services/thietbis/tsktThongSoKyThuatDataService';

import { name as CurrentUserService } from '../../../services/common/currentUserService';


class TbisDetailsViewHoSoViewUpdateMiniFab {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog, tbisDataService, metadataService, notificationService, tsktThongSoKyThuatDataService, currentUserService) {
                'ngInject';


                this.cloneSelectedThietBi = angular.copy(tbisDataService.getSelectedThietBi());

                this.currentUserRights = currentUserService.getCurrentUserRights();

                this.solveThongSoKyThuats = () => {
                    if (this.cloneSelectedThietBi.thietbi)
                        this.thongsokythuats = tbisDataService.getSelectedThongSoKyThuatGroupBy(this.cloneSelectedThietBi.thietbi);
                };

                this.solveThongSoHoatDong = () => {
                    if (this.cloneSelectedThietBi.thietbi)
                        this.newThongSo.thong_so_hoat_dong = this.cloneSelectedThietBi.thietbi.thong_so_hoat_dong;
                };

                this.tabSelected = '';
                this.tabModeSelected = 'thong_so_hoat_dong';      // Chỉ dùng cho mode ở tab thông số kỹ thuật (thong_so_hoat_dong || thong_so_ky_thuat)
                this.newThongSo = {
                    thong_so_hoat_dong: {},
                    thong_so_ky_thuat: {}
                };

                this.solveThongSoKyThuats();
                this.solveThongSoHoatDong();


                this.reset = () => {
                    this.cloneSelectedThietBi.thietbi = angular.copy(tbisDataService.getSelectedThietBi().thietbi);
                };

                this.save = () => {
                    try {
                        metadataService.buildUpdateMetadata(this.cloneSelectedThietBi.thietbi, Meteor.user());
                        tbisDataService.buildSearchField(this.cloneSelectedThietBi.thietbi);
                        tbisDataService.validateMajorInputThietBiData(this.cloneSelectedThietBi.thietbi);
                        tbisDataService.updateMajorForm(this.cloneSelectedThietBi.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.reset();
                            this.solveThongSoKyThuats();
                            this.solveThongSoHoatDong();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    catch (error) {
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.addNewThongSo = () => {
                    // Hàm được gọi từ trong ThongSoTab thông qua tham chiếu &
                    try {
                        this.newThongSo.thong_so_ky_thuat.addNew = true;
                        tsktThongSoKyThuatDataService.validateNewThongSoKyThuatInputData(this.newThongSo.thong_so_ky_thuat);
                        this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat = this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat || [];
                        this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat.push(this.newThongSo.thong_so_ky_thuat);
                        this.solveThongSoKyThuats();
                        this.newThongSo.thong_so_ky_thuat = {};
                    }
                    catch (error) {                        
                        notificationService.error(error.message, 'Thiếu thông tin');
                    }
                };

                this.saveThongSo = () => {
                    metadataService.buildUpdateMetadata(this.cloneSelectedThietBi.thietbi, Meteor.user());
                    if (this.tabModeSelected === 'thong_so_hoat_dong') {
                        tbisDataService.updateThongSoHoatDong(this.cloneSelectedThietBi.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.solveThongSoHoatDong();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });
                    }
                    if (this.tabModeSelected === 'thong_so_ky_thuat') {
                        // Lọc các thông số, bỏ đi các giá trị bị gắn cờ remove = true;
                        this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat = _.reject(this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat, (item) => {
                            return item.remove;
                        });
                        tbisDataService.updateThongSoKyThuat(this.cloneSelectedThietBi.thietbi).then(() => {
                            notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                            this.solveThongSoKyThuats();
                        }).catch((err) => {
                            notificationService.error(err.message, 'Cập nhật thất bại');
                        });    
                    }                    
                };

                this.saveLocation = () => {
                    tbisDataService.updateLocation(this.cloneSelectedThietBi.thietbi).then(() => {
                        notificationService.success('Thay đổi của bạn đã được ghi nhận vào Skynet.', 'Cập nhật thành công');
                    }).catch((err) => {
                        notificationService.error(err.message, 'Cập nhật thất bại');
                    });
                };

                this.toggleRemoveThongSoKyThuat = (thongsokythuat) => {
                    if (thongsokythuat.addNew) {
                        // Xóa khỏi arr thông số kỹ thuật nếu thông số là mới thêm vào và chưa được lưu
                        this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat = _.reject(this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat, (item) => {
                            return item._id === thongsokythuat._id;
                        });
                        this.solveThongSoKyThuats();
                    } else {
                        thongsokythuat.remove = !thongsokythuat.remove;
                        _.each(this.cloneSelectedThietBi.thietbi.thong_so_ky_thuat, (item) => {
                            if (item._id === thongsokythuat._id)
                                item.remove = thongsokythuat.remove;
                        });
                    }
                };

                this.close = () => {
                    this.reset();
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
    TbisDetailsDarkZoneTab,
    TbisDataSerivce,
    MetadataService,
    TsktThongSoKyThuatDataService,
    NotificationService,
    CurrentUserService
]).component(name, {
    template: fabTemplate,
    controllerAs: name,
    controller: TbisDetailsViewHoSoViewUpdateMiniFab
});