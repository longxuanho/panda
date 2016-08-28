import { Mongo } from 'meteor/mongo';
import { ThietBis } from './collection';

ThietBis.before.insert((userId, doc) => {
    doc.metadata.searchField =  buildSearchField(doc);
});

ThietBis.before.update((userId, doc, fieldNames, modifier, options) => {
    modifier.$set.metadata.searchField =  buildSearchField(doc);
});

function buildSearchField(doc) {
    return `[id]${doc.ma_thiet_bi.keyId} : [id]${doc.ma_thiet_bi.topX} : [id]${doc.ma_thiet_bi.maximo} : [hsx]${doc.nguon_goc.hang_san_xuat} : [model]${doc.nguon_goc.model} : [sokhung]${doc.ho_so.so_khung} : [somay]${doc.ho_so.so_may} : [bienso]${doc.ho_so.bien_so}`;
}