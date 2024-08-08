/// <reference path="../pb_data/types.d.ts" />

routerAdd("POST","/app_health",(c)=>{
    
    let val=""
    function changevalues(data) {
		let l = data.date.length
		for (let i = 0; i < l; ++i) {
			if (value == "") {
				value += `('${data.datetime[i]}','${data.app_name[i]}','${data.app_status[i]}')`
			} else {
				value += `, ('${data.datetime[i]}','${data.app_name[i]}','${data.app_status[i]}')`
			}
		}
	}
    let data=$apis.requestInfo(c).data
    let collection = $app.dao().findCollectionByNameOrId("app_health")

	let rec = new Record(collection, { "datetime": data.datetime, "app_name": data.app_name, "app_status":data.app_status})
	$app.dao().saveRecord(rec)
    // data.data.forEach(element => {
    //     console.log(`${element.datetime}  ${element.app_name}  ${lapp_status}`)
    // });
    return c.noContent(204)
})