onRecordAfterAuthWithPasswordRequest((e)=>{
	let useragent=e.httpContext.request().userAgent();
	console.log(e.record.get("user_id")+"            login      "+DateTime().toString()+"    "+e.httpContext.realIP()+"        "+e.httpContext.request().userAgent() )
	if(useragent!="node" && useragent!="Dart/3.3 (dart:io)"){
		let collection=$app.dao().findCollectionByNameOrId("access");
		//let ip=e.httpContext.realIP()
		let ip="122.164.8.43"
		let url=`https://ipinfo.io/${ip}?token=53e6f88338659f`
		const res=$http.send({url:url,method:"get"})
		let geolocation={}
		console.log(`statuscode:: ${res.statusCode}`)
		if(res.statusCode==200){
			let body=res.json
			geolocation=body
			//console.log(`g:   {geolocation}`)
		}
		let record=new Record(collection,{"user":e.record.get("user_id"),event:"login",date_time:DateTime().toString(),ipaddr:e.httpContext.realIP(),useragent:useragent,geolocation:geolocation});
		$app.dao().saveRecord(record);
		//let newQuery=`INSERT INTO access(user,event,date_time,ipaddr,useragent) values('${e.record.get('user_id')}','login','${DateTime().toString()}','${e.httpContext.realIP()}','${useragent}')`
		//$app.dao().db().newQuery(newQuery).execute()
	}

},"users")

onRecordAfterCreateRequest((e)=>{
	let record=e.record
	//let ip=record.get("ipaddr")
	console.log(`Inside access method`)
	let ip="122.164.8.43"
        let url=`https://ipinfo.io/${ip}?token=53e6f88338659f`
        const res=$http.send({url:url,method:"get"})
        let geolocation={}
        console.log(`statuscode:: ${res.statusCode}`)
        if(res.statusCode==200){
             let body=res.json
             geolocation=body
                        //console.log(`g:   {geolocation}`)
	}
	record.set("geolocation",geolocation)
	$app.dao().saveRecord(record)

},"access")

routerAdd("POST","/logoutlog",(c)=>{
	let  useragent=c.request().userAgent();
	let data = $apis.requestInfo(c).data
        let user_id = data.user_id
	if(useragent!="node" && useragent!="Dart/3.3 (dart:io)"){
		let collection=$app.dao().findCollectionByNameOrId("access");
		let record=new Record(collection,{"user":user_id,event:"logout",date_time:DateTime().toString(),ipaddr:c.realIP(),useragent:useragent});
		$app.dao().saveRecord(record);
	}
	c.noContent(204);


})

routerAdd("POST","/appaccesslog",(c)=>{
        let  useragent=c.request().userAgent();
        let data = $apis.requestInfo(c).data
        let user_id = data.user_id
        if(useragent!="node" && useragent!="Dart/3.3 (dart:io)"){
                let collection=$app.dao().findCollectionByNameOrId("access");
                let record=new Record(collection,{"user":user_id,event:data['app_id'],date_time:DateTime().toString(),ipaddr:c.realIP(),useragent:useragent});
                $app.dao().saveRecord(record);
        }
        c.noContent(204);


})
