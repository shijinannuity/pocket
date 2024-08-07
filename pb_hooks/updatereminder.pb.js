onRecordBeforeUpdateRequest((e) => {
	let info = $apis.requestInfo(e.httpContext);
	let data = info.data;
	let oldrecord = e.record.originalCopy();
	let record = e.record;
	let id = record.get("id");
	let old_isdeleted = oldrecord.get("is_deleted");
	let new_isdeleted = record.get("is_deleted");
	let old_isrepeating = oldrecord.get("isrepeating");
	let new_isrepeating = record.get("isrepeating");
	let old_email_notification = oldrecord.get("email_notification");
	let new_email_notification = record.get("email_notification");
	let type = record.get("type")
	console.log(`0:${old_isdeleted}  n:${new_isdeleted}`)
	// let duedate = oldrecord.get("duedate");
	if (type == "task") {
		console.log("triggered")
		let al_rec = $app.dao().findFirstRecordByData("alert", "reminder", id)
		al_rec.set("secondary_user", record.get("secondary_user_id"))
		al_rec.set("title", record.get("title"))
		al_rec.set("description", record.get("description"))
		al_rec.set("app", record.get("app"))
		al_rec.set("triggdate", record.get("duedate"))
		al_rec.set("triggtime", record.get("duetime"))
		al_rec.set("wfname", record.get("wfname"))
		$app.dao().saveRecord(al_rec)
	}
	else {
		let old_repeat_interval = oldrecord.get("repeat_interval")
		let old_duedate = oldrecord.get("duedate").toString()
		let old_duetime = oldrecord.get("duetime");
		let old_terminatedate = oldrecord.get("terminatedate").toString().substring(0, 10)
		let old_secondary = oldrecord.get("secondary_user_id")
		let old_title = oldrecord.get("title")
		let old_description = oldrecord.get("description")
		let duedate = record.get("duedate").toString()
		let repeat_interval = record.get("repeat_interval")
		let duetime = record.get("duetime");
		let terminatedate = record.get("terminatedate").toString().substring(0, 10)
		let secondary_user = record.get("secondary_user_id")
		let owner = record.get("owner_user_id")
		let title = record.get("title")
		let description = record.get("description")
		let old_app = oldrecord.get("app")
		let app = record.get("app")
		let old_wf = oldrecord.get("wfname")
		let wf = record.get("wfname")
		let email = record.get("email_notification")
		let old_repeat_freq = oldrecord.get("repeatfreq")
		let repeat_freq = record.get("repeatfreq")
		let old_repeatday = oldrecord.get("repeat_day")
		let repeatday = record.get("repeat_day")
		if (old_duedate.length > 10) {
			old_duedate = old_duedate.substring(0, 10)
		}
		if (duedate.length > 10) {
			console.log(`d inside if:::${duedate}`)
			duedate = duedate.substring(0, 10)
			console.log(`d inside if:::${duedate}`)
		}
		console.log(`date ${old_duedate} ${old_duetime}   new ${duedate} ${duetime}`)
		console.log(`repeat_interval :: ${old_repeat_interval} ${repeat_interval}`)
		console.log(`trminatedate:: ${old_terminatedate}  ${terminatedate}`)
		console.log(`old_duedate :: ${old_duedate}  ${duedate}`)
		console.log(`repfreq:: ${old_repeat_freq}  ${repeat_freq}`)
		console.log(`rep_day :: ${old_repeatday}  ${repeatday}`)
		console.log(`typr rep_day :: ${typeof old_repeatday}  ${typeof repeatday}`)
		console.log(`typr rep_day[0] :: ${typeof old_repeatday[0]}  ${typeof repeatday[0]}`)
		console.log(`len rep_day :: ${old_repeatday.length}  ${repeatday.length}`)
		console.log(`typr rep_day[0] :: ${typeof old_repeatday[0]}  ${typeof repeatday[0]}`)
		let areEqual = old_repeatday.length === repeatday.length &&
               old_repeatday.every((value, index) => value === repeatday[index]);
		// console.log(`condition oldrepeatday :: ${areEqual}`)
		if(old_repeatday==null){
			console.log(`inside old_repeatday`)
			old_repeatday=[]
		}
		if(repeatday==null){
			console.log(`inside old_repeatday`)
			repeatday=[]
		}
		if (old_repeat_freq != repeat_freq || old_repeat_interval != repeat_interval || old_duetime != duetime || old_terminatedate != terminatedate || old_duedate != duedate || !areEqual) {
			console.log("Inside time,date,interval,terminate")
			let query = `DELETE FROM alert where reminder='${id}'`
			if (duedate.length > 10) {
				console.log(`d inside if:::${duedate}`)
				duedate = duedate.substring(0, 10)
				console.log(`d inside if:::${duedate}`)
			}
			$app.dao().db().newQuery(query).execute()
			//let startdate=new DateTime(duedate+" "+duetime)
			let dtt = `${duedate} ${duetime}:00.000Z`
			console.log(`dtt   ::: ${dtt}`)
			let startdate = new DateTime(dtt)
			let s_time = startdate.time();
			// let termdate = data["terminatedate"];
			//console.log("Termination_date::", termdate)
			let enddate = new DateTime(terminatedate)
			let e_time = enddate.time();
			e_time = e_time.addDate(0, 0, 1);
			console.log("start:" + startdate)
			console.log("end:"+enddate)
			//console.log("Repeat_intervel:"+data["repeat_interval"])
			console.log("s_time:" + s_time)
			//console.log("e_time:"+e_time)
			if (repeat_interval == "Daily") {
				while (s_time.before(e_time)) {
					//console.log("Repeat_intervel:"+data["repeat_intervel"])
					console.log("s_time inside loop:" + s_time)
					let collection = $app.dao().findCollectionByNameOrId("alert");
					//	console.log("before add")
					const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf })
					$app.dao().saveRecord(record);
					//	 console.log("after add")
					s_time = s_time.addDate(0, 0, repeat_freq);
				}
			}
			else if (repeat_interval == "Weekly") {
				let dayslist = record.get("repeat_day")
				if (dayslist.length==0) {
					while (s_time.before(e_time)) {
						//console.log("Repeat_intervel:"+data["repeat_intervel"])
						console.log("s_time inside loop:" + s_time)
						//const data={ "id": id,"owner":data["owner_user_id"],"secondary_user":data["secondary_user_id"], "type": type, "title": data["title"], "description": data["description"], "app": data["app"], "duedate":s_time ,"duetime":date["duetime"]};
						let collection = $app.dao().findCollectionByNameOrId("alert");
						const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
						$app.dao().saveRecord(record);
						s_time = s_time.addDate(0, 0, 7*repeat_freq);
					}
				}
				else {
					
					// console.log(`type of daylist  ${typeof dayslist[0]}    ${dayslist[0]}`)
					function strtonum(value, index) {
						return Number(value);
					}
					if (typeof dayslist[0] == "string") {
						dayslist = dayslist.map(strtonum)
					}
					console.log("DAylist" + dayslist)
					while (s_time.before(e_time)) {
						//console.log("Repeat_intervel:"+data["repeat_intervel"])
						console.log("s_time inside loop:" + s_time)
						var s_time_weekday = s_time.weekday();
						if (s_time_weekday == 0) {
							s_time_weekday = 7;
						}
						console.log("s_week_day::::" + s_time_weekday)
						console.log("Condition::", dayslist.indexOf(Number(s_time_weekday)))

						if (dayslist.indexOf(Number(s_time_weekday)) != -1) {
							let collection = $app.dao().findCollectionByNameOrId("alert");
							const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
							$app.dao().saveRecord(record);
							if (dayslist.indexOf(Number(s_time_weekday)) == (dayslist.length - 1)) {
								s_time = s_time.addDate(0, 0, 7 * (repeat_freq-1));
							}



						}
						s_time = s_time.addDate(0, 0, 1);
					}
				}

			}
			else if (repeat_interval == "Monthly") {
				while (s_time.before(e_time)) {
					let collection = $app.dao().findCollectionByNameOrId("alert");
					const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
					$app.dao().saveRecord(record);
					s_time = s_time.addDate(0, repeat_freq, 0);
				}
			}
			else if (repeat_interval == "Annually") {
				while (s_time.before(e_time)) {
					let collection = $app.dao().findCollectionByNameOrId("alert");
					const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
					$app.dao().saveRecord(record);
					s_time = s_time.addDate(repeat_freq, 0, 0);
				}


			}
			else {
				let collection = $app.dao().findCollectionByNameOrId("alert");
				const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf })
				$app.dao().saveRecord(record)
			}
		}
		else
		 if (old_app != app || old_description != description || old_secondary != secondary_user || old_title != title || old_wf != wf) {
			let now = new DateTime()
			let query = `UPDATE alert SET secondary_user='${secondary_user}',title='${title}',description='${description}',app='${app}',wfname='${wf}',updated='${now}' WHERE reminder='${id}'`
			$app.dao().db().newQuery(query).execute()
		}
		else if (old_isdeleted != new_isdeleted) {
			if (new_isdeleted == false && old_isrepeating == false) {
				console.log(`new_isdeleted == false && old_isrepeating==false  date::${duedate}`)
				$app.dao().db().newQuery("UPDATE alert set active=true,updated=DATE()  WHERE alert.reminder = {:id} AND DATE(alert.triggdate)=DATE({:date})").bind({ "id": id, "date": duedate }).execute();
			}
			else {
				$app.dao().db().newQuery("UPDATE alert set active={:newvalue},updated=DATE() WHERE reminder = {:id}").bind({ "newvalue": !new_isdeleted, "id": id }).execute();
			}
			console.log("After update");
		}
		else if (old_isrepeating != new_isrepeating) {
			console.log(`Inside isrepeat::: duedate : ${duedate}`)
			if (old_isdeleted == false) {
				$app.dao().db().newQuery("UPDATE alert set active={:newvalue},updated=DATE() WHERE reminder = {:id} AND DATE(triggdate) <> DATE({:date})").bind({ "newvalue": new_isrepeating, "id": id, "date": duedate }).execute();
			}
			console.log("After update");
		}
		else if (old_email_notification != new_email_notification) {
			$app.dao().db().newQuery("UPDATE alert set email={:newvalue} WHERE reminder = {:id}").bind({ "newvalue": new_email_notification, "id": id }).execute();
			console.log("After update");
		}
		console.log(`is_deleted ${data["is_deleted"]}`)
		console.log(`is_email ${data["email_notification"]}`)
		console.log(`isrepeating ${data["isrepeating"]}`)
		//console.log(e.httpContext.)
		console.log(e.record.get("isrepeating"));
	}
}, "reminder")


