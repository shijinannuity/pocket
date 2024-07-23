routerAdd("POST","/cpu_usage",(c)=>{
	let info=$apis.requestInfo(c)
	let data=info.data
	console.log(data)
	let collection=$app.dao().findCollectionByNameOrId("cpu_usage")
//	console.log(`isfile::: ${data.isfile}`)
	let message=c.formValue("text")
	if(c.formValue("isfile")){
		try{
		console.log(`inside isfile::: `)
		let file=c.formFile("file")
		console.log(`file:: ${file}`)
		let rec=new Record(collection)
		const form =new RecordUpsertForm($app,rec)
		form.loadData({
			"text":message,
		})
		let f=$filesystem.fileFromMultipart(c.formFile("file"))
		form.addFiles("file",f)
		form.submit()
		c.noContent(204)
		}catch(e){
			console.log("Sendmessage::: Error :: ${e}")
		}
	}
	
})
