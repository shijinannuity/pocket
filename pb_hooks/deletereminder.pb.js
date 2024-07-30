/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeDeleteRequest((e)=>{
    let record=e.record
    let id=record.get("id")
    let query=`DELETE FROM alert WHERE reminder='${id}'`
    $app.dao().db().newQuery(query).execute()


},"reminder")