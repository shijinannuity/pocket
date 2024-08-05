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