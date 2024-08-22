/// <reference path="../pb_data/types.d.ts" />

routerAdd("POST","/app_health",(c)=>{
    
    let value=""
    function changevalues(data) {
		let l = data.datetime.length
		for (let i = 0; i < l; ++i) {
			if (value == "") {
				value += `('${data.datetime[i]}','${data.appname[i]}','${data.appstatus[i]}')`
			} else {
				value += `, ('${data.datetime[i]}','${data.appname[i]}','${data.appstatus[i]}')`
			}
		}
	}
    let data=$apis.requestInfo(c).data
	
	console.log(`Inside app_health POST :::: \n-------------------`)
	console.log(`date :::: ${data}`)
	
	try {
		let json_stringify=JSON.stringify(data)
		//let json_val=JSON.parse(data)
		//console.log(`json value::: ${json_val}`)
		console.log(`json value::: ${json_stringify}`)
	} catch (error) {
		console.log(`Error in json parse   :::: ${error}`)
	}
	
	// console.log(`json :: ${json}`)
	// console.log()
	
	
	changevalues(data)
    // let collection = $app.dao().findCollectionByNameOrId("app_health")

	// let rec = new Record(collection, {"datetime": data.DateTime, "app_name": data.AppName, "app_status":data.AppStatus})
	// $app.dao().saveRecord(rec)
	
	console.log(`date :::: ${value}`)
    // data.data.forEach(element => {
	// 	if (value == "") {
	// 		value += `('${element.datetime}','${element.app_name}','${element.app_status}')`
	// 	} else {
	// 		value += `, ('${element.datetime}','${element.app_name}','${element.app_status}')`
	// 	}
    // });
	let query=`INSERT INTO app_health(datetime,app_name,app_status) VALUES${value}`
	$app.dao().db().newQuery(query).execute()
	console.log(`-------------------`)
    return c.noContent(204)
})

















routerAdd("GET","/app_health",(c)=>{
	console.log("Inside app_health \n-----------")
	let date=c.queryParam("date")
	console.log(`query  ::: ${date}`)
	let query=`WITH 
			filtered_data AS (
				SELECT 
					STRFTIME('%Y-%m-%d', datetime,'localtime') AS date,
					STRFTIME('%H', datetime,'localtime') AS hour,
					app_name,
					app_status
				FROM 
					app_health
				WHERE 
					STRFTIME('%Y-%m-%d', datetime) = '${date}'
			)
			SELECT 
				p.app_name,
				json_object(
					'00', MAX(CASE WHEN hour = '00' THEN app_status END),
					'01', MAX(CASE WHEN hour = '01' THEN app_status END),
					'02', MAX(CASE WHEN hour = '02' THEN app_status END),
					'03', MAX(CASE WHEN hour = '03' THEN app_status END),
					'04', MAX(CASE WHEN hour = '04' THEN app_status END),
					'05', MAX(CASE WHEN hour = '05' THEN app_status END),
					'06', MAX(CASE WHEN hour = '06' THEN app_status END),
					'07', MAX(CASE WHEN hour = '07' THEN app_status END),
					'08', MAX(CASE WHEN hour = '08' THEN app_status END),
					'09', MAX(CASE WHEN hour = '09' THEN app_status END),
					'10', MAX(CASE WHEN hour = '10' THEN app_status END),
					'11', MAX(CASE WHEN hour = '11' THEN app_status END),
					'12', MAX(CASE WHEN hour = '12' THEN app_status END),
					'13', MAX(CASE WHEN hour = '13' THEN app_status END),
					'14', MAX(CASE WHEN hour = '14' THEN app_status END),
					'15', MAX(CASE WHEN hour = '15' THEN app_status END),
					'16', MAX(CASE WHEN hour = '16' THEN app_status END),
					'17', MAX(CASE WHEN hour = '17' THEN app_status END),
					'18', MAX(CASE WHEN hour = '18' THEN app_status END),
					'19', MAX(CASE WHEN hour = '19' THEN app_status END),
					'20', MAX(CASE WHEN hour = '20' THEN app_status END),
					'21', MAX(CASE WHEN hour = '21' THEN app_status END),
					'22', MAX(CASE WHEN hour = '22' THEN app_status END),
					'23', MAX(CASE WHEN hour = '23' THEN app_status END)
				) AS data
			FROM 
				filtered_data p
			GROUP BY 
				p.app_name`
	let model = arrayOf(new DynamicModel({
			"app_name":"",
			"data":{}
	}))
	$app.dao().db().newQuery(query).all(model)
	c.json(200,{"data":model})


})