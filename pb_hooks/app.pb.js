/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeCreateRequest((e)=>{
    let record=e.record
    let company_id=record.get("company_id")
    
    let datamodel=new DynamicModel({
        "company_id":"",
        "count":0
    })
    let query=`SELECT company.company_id,count(*) as count from apps join company on apps.company_id=company.id  where apps.company_id='${company_id}'`
    $app.dao().db().newQuery(query).one(datamodel)
    let app_id=`${datamodel['company_id']}_${datamodel['count']+1}`
    record.set("app_id",app_id)
    $app.dao().saveRecord(record)
},"apps")


onRecordBeforeUpdateRequest((e)=>{
    let oldrecord=e.record.originalCopy()
    let record=e.record
    if(record.get("isactive")!=oldrecord.get("isactive")){
       let query=`UPDATE reminder SET is_deleted='${!record.get("isactive")}' where app='${record.get("name")}'`
       $app.dao().db().newQuery(query).execute()
    //    let is_deleted=!record.get("isactive")
    //    $app.dao().db().update("reminder",{"is_deleted":is_deleted},$dbx.exp(`app='${record.get("name")}'`))
    }
},"apps")

onModelAfterUpdate((e) => {
    console.log(e.model.tableName())
    console.log(e.model.id)
}, "reminder")