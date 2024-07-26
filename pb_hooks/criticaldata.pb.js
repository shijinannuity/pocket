routerAdd("POST", "/critical_alert", (c) => {
	let info = $apis.requestInfo(c)
	let data = info.data
	console.log(data)
	let collection = $app.dao().findCollectionByNameOrId("critical_alerts")
	let rec = new Record(collection, { "message": data.message })
	$app.dao().saveRecord(rec)
	c.noContent(204)

})
