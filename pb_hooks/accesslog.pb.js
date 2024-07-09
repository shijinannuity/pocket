onRecordAfterAuthWithPasswordRequest((e)=>{
	let useragent=e.httpContext.request().userAgent();

	console.log(e.record.get("user_id")+"            login      "+DateTime().toString()+"    "+e.httpContext.realIP()+"        "+e.httpContext.request().userAgent() )
	if(useragent!="node" && useragent!="Dart/3.3 (dart:io)"){
		let collection=$app.dao().findCollectionByNameOrId("access");
		let record=new Record(collection,{"user":e.record.get("user_id"),event:"login",date_time:DateTime().toString(),ipaddr:e.httpContext.realIP(),useragent:useragent});
		$app.dao().saveRecord(record);
	}

},"users")


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
