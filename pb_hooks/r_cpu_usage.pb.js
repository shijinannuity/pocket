routerAdd("POST", "/cpu_usage", (c) => {
	let info = $apis.requestInfo(c)
	let data = info.data
	console.log(data)
	let collection = $app.dao().findCollectionByNameOrId("cpu_usage")
	console.log(`Inside r_cpu_usg :::: \n-------------------`)
	console.log(`isfile::: ${data.isfile}`)
	let message = c.formValue("text")
	let data_id = c.formValue('text_id')
	let type = c.formValue("type")
	if (c.formValue("isfile")) {
		try {
			console.log(`inside isfile::: `)
			let file = c.formFile("file")
			console.log(`file:: ${file}`)
			let rec = ""
			try {
				let filter = `data_id='${data_id}'`
				rec = $app.dao().findFirstRecordByFilter('cpu_usage', filter)
			} catch (e) {
				rec = new Record(collection)
			}
			const form = new RecordUpsertForm($app, rec)
			form.loadData({
				"data_id": data_id,
				"type": type,
				"text": message
			})
			let f = $filesystem.fileFromMultipart(c.formFile("file"))
			form.addFiles("file", f)
			form.submit()
			console.log(`-------------------`)
			return c.noContent(204)
		} catch (e) {

			console.log("Sendmessage::: Error :: ${e}")
			return c.json(400, { "message": "Bad request" })
		}
	}

})
