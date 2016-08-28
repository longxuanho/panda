import { Meteor } from "meteor/meteor";
import { DataHelpers } from "../../api/datahelpers";

Meteor.startup(() => {

    if (DataHelpers.find().count() === 0) {

        console.log("start creating seed DataHelpers db...");

        // Khởi tạo đơn vị Kỹ thuật vật tư trước để admin có thể đăng ký tài khoản
        const donvis = [
            {
                "ma": "TCT",
                "ten": "Tổng công ty Tân cảng Sài Gòn",
                "nhom": "Tổng công ty"
            }, {
                "ma": "KTVT",
                "ten": "Phòng Kỹ thuật Vật tư",
                "nhom": "Tổng công ty"
            }
        ];


        donvis.forEach((donvi) => {
            DataHelpers.insert({
                "module" : "commons",
                "stateName" : "dhelpsList",
                "subject" : "donvis",
                "dataSource": donvi,
                "isPublic" : true
            });
        });

        console.log("Seeding db - done, total of ", donvis.length, "items inserted!");

    }
});