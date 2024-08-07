cronAdd("checking alert", "*/10 * * * *", () => {
	try {
		const result = arrayOf(new DynamicModel({
			"type": "",
			"title": "",
			"description": "",
			"app": "",
			"workflow": "",
			"triggdate": "",
			"triggtime": "",
			"owner": "",
			"secondary": "",
		}))
		console.log("hello from cron:: checking alert")
		//$app.dao().db().newQuery("SELECT al.type,al.title,al.description,al.app,al.wfname,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,COALESCE((SELECT users.email FROM users where users.id=al.secondary_user),'') as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime')=strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') <= strftime('%H:%M', 'now','localtime','+10 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') >= strftime('%H:%M', 'now','localtime'))").all(result)
		let query=`WITH original as (SELECT al.type,al.title,al.wfname,al.description,al.app,al.triggdate,al.triggtime,u.email as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),'') as secondary,u.company_id FROM alert as al join users as u on al.owner=u.id WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') <= strftime('%H:%M', 'now','localtime','+10 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') >= strftime('%H:%M', 'now','localtime'))) SELECT ol.type,ol.title,ol.description,ol.app,ol.wfname,ol.triggdate,ol.triggtime,ol.owner,ol.secondary from original as ol join apps as ap on ol.app=ap.name WHERE ap.company_id=ol.company_id and ap.isactive=TRUE`
		//console.log("checking alert :: before while")
		$app.dao().db().newQuery(query).all(result)
		let l = result.length
		let i = 0
		while (i < l) {
			//console.log(`Inside while`)
			//console.log(`a::${result[i]["title"]}  ${result[i].owner}`)
			let html = $template.loadFiles(
				`${__hooks}/view/emailtemplate.html`,
				`${__hooks}/view/notify.html`
			).render({ "type": result[i].type, "title": result[i].title, "description": result[i].description, "app": result[i].app, "workflow": result[i].workflow, "date": result[i].triggdate, "time": result[i].triggtime })
			let mail = new MailerMessage({
				from: {
					address: $app.settings().meta.senderAddress,
					name: $app.settings().meta.senderName
				},
				to: [{ address: result[i].owner }],
				cc: [{ address: result[i].secondary }],
				subject: "Notification",
				html: html

			})
			$app.newMailClient().send(mail)
			i += 1
		}
		//console.log("checking alert :: after while")
	} catch (err) {
		//console.log(`Error inside cron alert::${err}`)
	}

})
console.log("outside cron")
