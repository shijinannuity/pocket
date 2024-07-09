routerAdd("POST","/addRlog",(c)=>{
	let info=$apis.requestInfo(c)
	let data=info.data
	console.log(data)
	let collection=$app.dao().findCollectionByNameOrId("r_access_log")
	let rec=new Record(collection,{"app":data.app,"user":data.user,"server_connected":data.server_connected,"sessionid":data.sessionid,"server_disconnected":data.server_disconnected,"user_agent":data.user_agent,"screen_res":data.screen_res,"browser_res":data.browser_res,"pixel_ratio":data.pixel_ratio,"browser_connected":data.browser_connected,"ip":data.ip})	
	$app.dao().saveRecord(rec)
	c.noContent(204)
	
})
