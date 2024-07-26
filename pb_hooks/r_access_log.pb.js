routerAdd("POST", "/addRlog", (c) => {
	let info = $apis.requestInfo(c)
	let data = info.data
	console.log(data)
	let collection = $app.dao().findCollectionByNameOrId("r_access_log")
	let rec = new Record(collection, { "app": data.app, "user": data.user, "sessionid": data.sessionid, "user_agent": data.user_agent, "screen_res": data.screen_res })
	$app.dao().saveRecord(rec)
	c.noContent(204)

})
