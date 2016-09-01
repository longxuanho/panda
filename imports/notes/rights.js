/*
*   Sau đây là các ghi chú về phân quyền người dùng
*
*   Rights | Zones | Assets | Donvis | UpdateFields | Exports
*
*   1. Quyền [admin, sky-project] có thể truy cập tất cả các tài nguyên
*   2. Quyền [module:right, rights] (required*)định danh các thao tác với dữ liệu của module được chọn của người dùng được cho phép:
*       [tbis:viux, rights] cho phép người dùng xem (view), thêm (insert), cập nhật (update) và xóa (remove) dữ liệu trong module thietbis (tbis)
*   Các quyền giới hạn vùng tương tác [sử dụng kết hợp OR operator]
    *   3a. Quyền [module:zone, zones] (required*) định danh các vùng dữ liệu trong module được chọn mà người dùng được phép tương tác:
    *       [tbis:tbn|xmy, zones] cho phép người dùng sử dụng các quyền ở mục (2) đối với các nhóm đối tượng Thiết bị nâng (tbn) và Xe máy (xmy)
    *       [tbis:all, zones] cho phép truy xuất tất cả các zone
    *   3b. Quyền [module:asset, assets] (optinal) giới hạn nhỏ hơn quyền Zone, chỉ cho phép người dùng tương tác lên một số đối tượng có mã thiết bị cụ thể
    *       [tbis:Q01|Q02|Q03, assets] cho phép người dùng áp dụng các quyền ở (2) đối với thiết bị có keyId Q01, Q02 và Q03
*   4. Quyền [module:donvi, donvis] (required*) giới hạn vùng tương tác mà người dùng được phép theo đơn vị quản lý và đơn vị sử dụng
*       [tbis:XNCG|TCT, donvis] cho phép người dùng tương tác các quyền ở (2) đối với các đối tượng do XNCG và TCT quản lý hoặc sở hữu
*   5. Quyền [module:fields, updatefields] (required*) xác định các trường (field) người dùng có thể update trong mudule được chọn (hooks only)
*       [tbis:bao_hanh|nguon_goc|ho_so] cho phép người dùng update các trường thông tin tương ứng trong modifier của Collection Hooks (before update)
*       [tbis:all, updatefields] cho phép người dùng update tất cả các trường thông tin
*   6. Quyền [module, exports] (required*) xác dịnh các module mà người dùng có thể export dữ liệu qua excel (client only)
*       [tbis:tbis, exports] cho phép người dùng trích xuất thông tin excel của module thiết bị (tbis)
*
 */