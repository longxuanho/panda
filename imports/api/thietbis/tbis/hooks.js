import { Mongo } from 'meteor/mongo';
import { ThietBis } from './collection';

ThietBis.before.insert((userId, doc) => {
    doc.metadata.searchField =  buildSearchField(doc);
});

ThietBis.before.update((userId, doc, fieldNames, modifier, options) => {
    if (modifier.$set.metadata)
        modifier.$set.metadata.searchField =  buildSearchField(doc);
    // Nếu là cập nhật hình ảnh -> cập nhật staticstics cho thiết bị
    if (modifier.$set.hinh_anh && modifier.$set.hinh_anh.collections)
        modifier.$set['statistics.hinh_anh.count'] = modifier.$set.hinh_anh.collections.length;
});

function buildSearchField(doc) {
    return `[id]${doc.ma_thiet_bi.keyId} : [id]${doc.ma_thiet_bi.topX} : [id]${doc.ma_thiet_bi.maximo} : [hsx]${doc.nguon_goc.hang_san_xuat} : [model]${doc.nguon_goc.model} : [sokhung]${doc.ho_so.so_khung} : [somay]${doc.ho_so.so_may} : [bienso]${doc.ho_so.bien_so}`;
}