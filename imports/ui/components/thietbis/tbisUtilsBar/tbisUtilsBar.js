import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tbisUtilsBar.html';
import { name as UserLocalSettingsService } from '../../../services/common/userLocalSettingsService';

class TbisUtilsBar {
    constructor(userLocalSettingsService) {
        'ngInject';

        this.utilsBarIconsOptions = this.initUtilsBarIconsOptions();

        this.categoryOptions = this.initCategoryOptions();
        this.viewModeOptions = this.initViewModeOptions();
        this.searchFilterOptions = this.initSearchFilterOptions();

        this.componentOptions = userLocalSettingsService.getPageSettings('thietbis', 'tbisList').utilsBar;


    }

    $postLink() {
        $(window).scroll(() => {
            let navBarElem = $('navigation'),
                utilsBarElem = $('tbis-utils-bar');

            if (navBarElem.length && utilsBarElem.length) {
                if ($(window).scrollTop() > 64)
                    utilsBarElem.addClass("sky-sticky md-whiteframe-2dp");
                else {
                    if (navBarElem.offset().top == utilsBarElem.offset().top)
                        utilsBarElem.removeClass("sky-sticky md-whiteframe-2dp");
                }
            }
        })
    }

    initUtilsBarIconsOptions() {
        return {
            categories: {
                'Tất cả': 'img/icons/tbis/all.svg',
                'Thiết bị nâng': 'img/icons/tbis/tbn.svg',
                'Xe máy': 'img/icons/tbis/xmy.svg',
                'Tàu thuyền': 'img/icons/tbis/tth.svg',
                'Thanh lý': 'img/icons/tbis/thl.svg'
            },
            viewMode: {
                'list': 'img/icons/common/view_list.svg',
                'card': 'img/icons/common/view_module.svg',
                'grid': 'img/icons/common/view_table.svg'
            },
            searchFilterMode: {
                'search': 'img/icons/common/search.svg',
                'filter': 'img/icons/common/filter_list.svg',
                'search_filter': 'img/icons/common/all_out.svg'
            }          
        };
    }

    initCategoryOptions() {
        return [{
            text: 'Tất cả',
            icon: this.utilsBarIconsOptions.categories['Tất cả'],
            value: 'Tất cả'
        }, {
            text: 'Thiết bị nâng',
            icon: this.utilsBarIconsOptions.categories['Thiết bị nâng'],
            value: 'Thiết bị nâng'
        }, {
            text: 'Xe máy',
            icon: this.utilsBarIconsOptions.categories['Xe máy'],
            value: 'Xe máy'
        }, {
            text: 'Tàu thuyền',
            icon: this.utilsBarIconsOptions.categories['Tàu thuyền'],
            value: 'Tàu thuyền'
        }, {
            text: 'Thanh lý',
            icon: this.utilsBarIconsOptions.categories['Thanh lý'],
            value: 'Thanh lý'
        }];
    }

    initViewModeOptions() {
        return [{
            text: 'Dạng danh sách',
            icon: this.utilsBarIconsOptions.viewMode['list'],
            value: 'list'
        }, {
            text: 'Dạng thẻ tin',
            icon: this.utilsBarIconsOptions.viewMode['card'],
            value: 'card'
        }, {
            text: 'Dạng bảng biểu',
            icon: this.utilsBarIconsOptions.viewMode['grid'],
            value: 'grid'
        }];
    }

    initSearchFilterOptions() {
        return [{
                text: 'Chế độ tìm kiếm',
                icon: this.utilsBarIconsOptions.searchFilterMode['search'],
                value: 'search'
            }, {
                text: 'Chế độ lọc',
                icon: this.utilsBarIconsOptions.searchFilterMode['filter'],
                value: 'filter'
            }, {
                text: 'Cả hai',
                icon: this.utilsBarIconsOptions.searchFilterMode['search_filter'],
                value: 'search_filter'
            }
        ];
    }

    openFilterMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    setCategory(mode) {
        this.componentOptions.category = mode;
    }

    setSearchFilterMode(mode) {
        this.componentOptions.searchFilterMode = mode;
        
    }

    setGridSearchFilterMode(mode) {
        if (mode==='search') {
            $('#myGrid').data("kendoGrid").setOptions({
                filterable: {
                    mode: "row"
                }
            });
        }
        if (mode==='filter') {
            $('#myGrid').data("kendoGrid").setOptions({
                filterable: {
                    mode: "menu"
                }
            });
        }
    }

    setViewMode(mode) {
        this.componentOptions.viewMode = mode;
    }
}

const name = 'tbisUtilsBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    UserLocalSettingsService
]).component(name, {
    template,
    controllerAs: name,
    controller: TbisUtilsBar
});