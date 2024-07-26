onRecordAfterCreateRequest((e) => {
	function addrecordintoalertintoalert(data) {
		console.log("Function called");
		let collection = $app.dao().findCollectionByNameOrId("alert");
		const record = new Record(collection, { "reminder": data["id"], "owner": data["owner"], "secondary_user": data["secondary_user"], "type": data["type"], "title": data["title"], "description": data["description"], "app": data["app"], "triggdate": data["duedate"], "triggtime": data["duetime"], active: true, email: data["email"] });
		$app.dao().saveRecord(record)
		return;

	}
	let id = e.record.getId()
	let email = e.record.get("email_notification")
	console.log(`emailnot:: ${email}`)
	let repeat_freq = e.record.get("repeatfreq")
	let id_copy = id
	console.log("\nReminder hook\n-------\n");
	let data = $apis.requestInfo(e.httpContext).data;
	let type = data["type"];
	let owner = data["owner_user_id"];
	let secondary_user = data["secondary_user_id"];
	let title = data["title"];
	let description = data["description"]
	let app = data["app"]
	let wf = data["wfname"]

	let duedate = data["duedate"];
	if (duedate.length > 10) {
		console.log(`d inside if:::${duedate}`)
		duedate = duedate.substring(0, 10)
		console.log(`d inside if:::${duedate}`)
	}
	let datearr = duedate.split("-");
	let duetime = data["duetime"];

	console.log("Id:", id)
	if (type == "task") {
		console.log("-----calling-------")
		console.log(`id:${id}`);
		//try{
		console.log(`owner:${owner}`);
		//}
		//catch(err){
		//	console.log(`err:${err}`)
		//}	
		console.log(`secondary_user":${secondary_user}`);
		console.log(` "type":${type}`)
		console.log(` "title": ${title},`)
		console.log(` "description": ${description}`)
		console.log(`"app": ${app},`);
		console.log(`"duedate":${duedate}`)
		console.log(`duetime:${duetime}`)
		//let data={ "id":id,"owner":owner,"secondary_user":secondary_user, "type": type, "title": title, "description": description,"app": app, "duedate":duedate ,"duetime":duetime,"active":true,"email":email};
		// console.log("before calling")

		//addrecordintoalert(data);
		//		catch(err){
		//console.log(`"Error:${err}`)
		let dtt = `${duedate} ${duetime}:00.000Z`
		let startdate = new DateTime(dtt)
		let s_time = startdate.time();
		let collection = $app.dao().findCollectionByNameOrId("alert");
		const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
		$app.dao().saveRecord(record)
		console.log("after calling")


	} else {

		let datearr = duedate.split("-");
		let duetime = data["duetime"];
		let time_arr = duetime.split(":");
		console.log("time_Arr:" + time_arr);
		console.log("duetime:" + duetime);
		console.log("datearr:" + datearr);
		console.log("duedate:" + duedate);
		let exp = "";
		if (data["isrepeating"] == false) {
			let dtt = `${duedate} ${duetime}:00.000Z`
			let startdate = new DateTime(dtt)
			let s_time = startdate.time();
			//const data={ "id": id,"owner":data["owner_user_id"],"secondary_user":data["secondary_user_id"], "type": type, "title": data["title"], "description": data["description"],"app": data["app"], "duedate":S_time ,"duetime":date["duetime"]};
			let collection = $app.dao().findCollectionByNameOrId("alert");
			const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf })
			$app.dao().saveRecord(record)
		}
		else {
			//let startdate=new DateTime(duedate+" "+duetime)
			let dtt = `${duedate} ${duetime}:00.000Z`
			let startdate = new DateTime(dtt)
			let s_time = startdate.time();
			let termdate = data["terminatedate"];
			//console.log("Termination_date::", termdate)
			let enddate = new DateTime(termdate)
			let e_time = enddate.time();
			e_time = e_time.addDate(0, 0, 1);
			console.log("start:" + startdate)
			//console.log("end:"+enddate)
			//console.log("Repeat_intervel:"+data["repeat_interval"])
			console.log("s_time:" + s_time)
			//console.log("e_time:"+e_time)
			if (data["repeat_interval"] == "Daily") {
				let dayslist = data["repeat_day"];
				console.log("Daylist" + dayslist)
				while (s_time.before(e_time)) {
					//console.log("Repeat_intervel:"+data["repeat_intervel"])
					console.log("s_time inside loop:" + s_time)
					let collection = $app.dao().findCollectionByNameOrId("alert");
					//	console.log("before add")
					const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf })
					$app.dao().saveRecord(record);
					//	 console.log("after add")
					s_time = s_time.addDate(0, 0, 1 + repeat_freq);
				}
			}
			else if (data["repeat_interval"] == "Weekly") {
				if (repeat_freq == 0) {
					while (s_time.before(e_time)) {
						//console.log("Repeat_intervel:"+data["repeat_intervel"])
						console.log("s_time inside loop:" + s_time)
						//const data={ "id": id,"owner":data["owner_user_id"],"secondary_user":data["secondary_user_id"], "type": type, "title": data["title"], "description": data["description"], "app": data["app"], "duedate":s_time ,"duetime":date["duetime"]};
						let collection = $app.dao().findCollectionByNameOrId("alert");
						const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
						$app.dao().saveRecord(record);
						s_time = s_time.addDate(0, 0, 7);
					}
				}
				else {

					let dayslist = data["repeat_day"];
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
							if (dayslist.indexOf(Number(s_time_weekday)) == (daylist.length - 1)) {
								s_time = s_time.addDate(0, 0, 7 * repeat_freq);
							}
						}
						s_time = s_time.addDate(0, 0, 1);
					}
				}

			}
			else if (data["repeat_interval"] == "Monthly") {
				while (s_time.before(e_time)) {
					let collection = $app.dao().findCollectionByNameOrId("alert");
					const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
					$app.dao().saveRecord(record);
					s_time = s_time.addDate(0, 1 + repeat_freq, 0);
				}
			}
			else {
				while (s_time.before(e_time)) {
					let collection = $app.dao().findCollectionByNameOrId("alert");
					const record = new Record(collection, { "reminder": id, "owner": owner, "secondary_user": secondary_user, "type": type, "title": title, "description": description, "app": app, "triggdate": s_time, "triggtime": duetime, "active": true, "email": email, "wfname": wf });
					$app.dao().saveRecord(record);
					s_time = s_time.addDate(1 + repeat_freq, 0, 0);
				}


			}
		}

	}
	console.log("\n\n-------\n");

}, "reminder")


