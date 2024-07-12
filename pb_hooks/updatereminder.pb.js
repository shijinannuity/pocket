onRecordBeforeUpdateRequest((e)=>{
	let info=$apis.requestInfo(e.httpContext);
	let data=info.data;
	let oldrecord=e.record.originalCopy();
	let record=e.record;
	let id=record.get("id");
	let old_isdeleted=oldrecord.get("is_deleted");
	let new_isdeleted=record.get("is_deleted");
	let old_isrepeating=oldrecord.get("isrepeating");
	let new_isrepeating=record.get("isrepeating");
	let old_email_notification=oldrecord.get("email_notification");
	let new_email_notification=record.get("email_notification");
	console.log(`0:${old_isdeleted}  n:${new_isdeleted}`)
	let duedate=oldrecord.get("duedate");
        if(record.get("type")=="task"){
		console.log("triggered")
                let al_rec=$app.dao().findFirstRecordByData("alert","reminder",id)
                al_rec.set("secondary_user",record.get("secondary_user_id"))
		al_rec.set("title",record.get("title"))
		al_rec.set("description",record.get("description"))
		al_rec.set( "app", record.get("app"))
		al_rec.set( "triggdate",record.get("duedate"))
		al_rec.set("triggtime",record.get("duetime"))
		al_rec.set( "wfname",record.get("wfname"))
		$app.dao().saveRecord(al_rec)
        }
	else{
		if(old_isdeleted != new_isdeleted){
			if(new_isdeleted == false && old_isrepeating==false){
				console.log(`new_isdeleted == false && old_isrepeating==false  date::${duedate}`)
			 	$app.dao().db().newQuery("UPDATE alert set active=true  WHERE alert.reminder = {:id} AND DATE(alert.triggdate)=DATE({:date})").bind({"id":id ,"date":duedate}).execute();
			}
			else{
		 	$app.dao().db().newQuery("UPDATE alert set active={:newvalue} WHERE reminder = {:id}").bind({ "newvalue":!new_isdeleted,"id":id}).execute();
			}
			console.log("After update");
		}
		else if(old_isrepeating != new_isrepeating){
			if(old_isdeleted==false){			
                		$app.dao().db().newQuery("UPDATE alert set active={:newvalue} WHERE reminder = {:id} AND DATE(triggdate) <> DATE({:date})").bind({ "newvalue":new_isrepeating,"id":id ,"date":duedate}).execute();
			}
			console.log("After update");
	        }
        	else if(old_email_notification != new_email_notification){
			 $app.dao().db().newQuery("UPDATE alert set email={:newvalue} WHERE reminder = {:id}").bind({ "newvalue": new_email_notification ,"id":id }).execute();
			console.log("After update");
		}
		console.log(`is_deleted ${data["is_deleted"]}`)
		console.log(`is_email ${data["email_notification"]}`)
		console.log(`isrepeating ${data["isrepeating"]}`)
	//console.log(e.httpContext.)
		console.log(e.record.get("isrepeating"));
	}
},"reminder")
