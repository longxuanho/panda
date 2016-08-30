/*
*   Các datahelper được tạo để fetch dữ liệu cho các Select trong Skynet. Bao gồm:
*
*   1. Module thietbis (Thiết bị):
*       a. tbisPhanLoaiDataService:
*           dhelpsDataService.query({
*               module: "thietbis",
*               stateName: "tbisList",
*               subject: "nhoms" / "chungloais" / "loais"
*           });
*
*      b. tbisNguonGocDataService:
*           dhelpsDataService.query({
*               module: "thietbis",
*               stateName: "tbisList",
*               subject: "hangsanxuats" / "models" / "vendors"
*           });
*
*      c. tbisPhanQuyenDataService:
*           dhelpsDataService.query({
*               module: "commons",
*               stateName: "dhelpsList",
*               subject: "donvis"
*           });
*           dhelpsDataService.query({
*               module: "thietbis",
*               stateName: "tbisList",
*               subject: "doivanhanhs"
*           });
*
*      d. tbisReferemceDataService:
*           dhelpsDataService.query({
*               module: "thietbis",
*               stateName: "tbisList",
*               subject: "tags"
*           });
*
*      e. tbisReferenceDataService:
*           dhelpsDataService.query({
*               module: "commons",
*               stateName: "dhelpsList",
*               subject: "quocgias"
*           });
*           dhelpsDataService.query({
*               module: "thietbis",
*               stateName: "tbisList",
*               subject: "khuvucs"
*           });
*
*   2. Module thongsokts (Thông số kỹ thuật):
*      a. tsktThongSoKyThuatDataService:
*           dhelpsDataService.query({
*               module: "thongsokts",
*               stateName: "tsktsList",
*               subject: "nhomtskts"
*           });
*           dhelpsDataService.query({
*               module: "thongsokts",
*               stateName: "tsktsList",
*               subject: "tentskts"
*           });
*           dhelpsDataService.query({
*               module: "thongsokts",
*               stateName: "tsktsList",
*               subject: "donvitinhs"
*           });
*

*
*
 */