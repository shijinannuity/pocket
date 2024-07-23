routerAdd("GET","/report",(c)=>{
	let data=arrayOf(new DynamicModel({
			"id":"",
			"owner":"",
			"filename":"",
			"created":"",
			"file":""
	}))
	let company=c.queryParam("company")
	$app.dao().db().newQuery("SELECT r.id,u.name as owner,r.filename,r.created,(CASE WHEN r.password='' THEN r.file ELSE '' END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id={:company} ORDER By r.created DESC").bind({"company":company}).all(data)
	return c.json(200,{"data":data})

})


routerAdd("POST","/report",(c)=>{
	let data=$apis.requestInfo(c).data
	let password=data.password
	let id=data.id
	let record="";
	try{	
		let filter=`id='${id}' && password='${password}'`
		console.log(`filter from report:: ${filter}`)
		record=$app.dao().findFirstRecordByFilter("report",filter)
		
	}catch(e){
		console.log(`error from report:: ${e}`)
		return c.json(400,{"message":"Invalid password"})
	}
	return c.json(200,{"data":record.get("file")})
	console.log({})



})
