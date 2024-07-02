routerAdd("POST","/sendmessage",(c)=>{
	//let info=$apis.requestInfo(c)
	//let data=info.data
//	console.log(`message from R  ::: ${data.message}`)
	//let req=c.request()
	let collection=$app.dao().findCollectionByNameOrId("r_data")
//	console.log(`isfile::: ${data.isfile}`)
	let message=c.formValue("message")
	if(c.formValue("isfile")){
		console.log(`inside isfile::: `)
		//req.ParseMultipartForm()
		//console.log(`sdfdsfs::${req.multipartForm}`)
		let file=c.formFile("file")
		console.log(`file:: ${file}`)
		//let rec=new Record(collection,{"message":message,"file":file})

		let rec=new Record(collection)
		const form =new RecordUpsertForm($app,rec)
		form.loadData({
			"message":message,
		})
		form.addFiles("file",file)
		form.submit()
		//$app.dao().saveRecord(rec)
		c.noContent(204)
	}
	else{
	let rec=new Record(collection,{"message":message,})
	$app.dao().saveRecord(rec)
	c.noContent(204)
	}
})
