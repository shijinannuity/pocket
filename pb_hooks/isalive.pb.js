/// <reference path="../pb_data/types.d.ts" />

// cronAdd("isalive", "*/1 * * * *", () => {
//     console.log('isalive s')
//    let collection=$app.dao().findCollectionByNameOrId("isalive")
//    let time=new DateTime()
//    let record=new Record(collection,{"datetime":time.time()})
//    $app.dao().saveRecord(record);
//    console.log('isalive t')
// })