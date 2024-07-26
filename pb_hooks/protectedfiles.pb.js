/**
		Endpoint: report
		Method: PUT
		Description: To add files from R app into pocketbase 
		Parameters:
				body:
						email:String
			file:multipart
			description:string
			password:stringg
		response:
				Success:
						StatusCode:204
				Error:
						StatusCode:400
						message:'Bad request'



*/
routerAdd("PUT", "/report", (c) => {
	let info = $apis.requestInfo(c)
	let data = info.data
	console.log(data)
	let collection = $app.dao().findCollectionByNameOrId("report")
	try {
		let file = c.formFile("file")
		console.log(`file:: ${file}`)
		let rec = new Record(collection)
		const form = new RecordUpsertForm($app, rec)
		let f = $filesystem.fileFromMultipart(c.formFile("file"))
		form.loadData({
			"email": data.email,
			"filename": f.originalName,
			"password": data.password,
			"description": data.description
		})
		form.addFiles("file", f)
		form.submit()
		const html = $template.loadFiles(
			`${__hooks}/view/emailtemplate.html`,
			`${__hooks}/view/filepassword.html`
		).render({
			"filename": f.originalName,
			"password": data.password
		})
		const message = new MailerMessage({
			from: {
				address: $app.settings().meta.senderAddress,
				name: $app.settings().meta.s
			},
			to: [{ address: data.email }],
			subject: "File Uploaded",
			html: html
		})

		$app.newMailClient().send(message)
		return c.noContent(204)
	} catch (e) {
		console.log(`add report::: Error :: ${e}`)
		return c.noContent(400)
	}

})




routerAdd("GET", "/report", (c) => {
	let data = arrayOf(new DynamicModel({
		"id": "",
		"owner": "",
		"filename": "",
		"description": "",
		"created": "",
		"file": ""
	}))
	let company = c.queryParam("company")
	$app.dao().db().newQuery("SELECT r.id,u.name as owner,r.filename,r.description,r.created,(CASE WHEN r.password='' THEN r.file ELSE '' END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id={:company} ORDER By r.created DESC").bind({ "company": company }).all(data)
	return c.json(200, { "data": data })

})


routerAdd("POST", "/report", (c) => {
	let data = $apis.requestInfo(c).data
	let password = data.password
	let id = data.id
	let record = "";
	try {
		let filter = `id='${id}' && password='${password}'`
		console.log(`filter from report:: ${filter}`)
		record = $app.dao().findFirstRecordByFilter("report", filter)

	} catch (e) {
		console.log(`error from report:: ${e}`)
		return c.json(400, { "message": "Invalid password" })
	}
	return c.json(200, { "data": record.get("file") })
	console.log({})



})
