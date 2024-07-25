routerAdd("POST","/sendmessage",(c)=>{
	let info=$apis.requestInfo(c)
	let data=info.data
//	console.log(`message from R  ::: ${data.message}`)
	//let req=c.request()
	console.log(data)
	let collection=$app.dao().findCollectionByNameOrId("r_data")
//	console.log(`isfile::: ${data.isfile}`)
	//let message=c.formValue("message")
	if(c.formValue("isfile")){
		try{
		console.log(`inside isfile::: `)
		//req.ParseMultipartForm()
		//console.log(`sdfdsfs::${req.multipartForm}`)
		let file=c.formFile("file")
		console.log(`file:: ${file}`)
		//let rec=new Record(collection,{"message":message,"file":file})
		//let filter=`message='fe'`
		//let rec=$app.dao().findFirstRecordByFilter("r_data",filter)
		let rec=new Record(collection)
		const form =new RecordUpsertForm($app,rec)
		form.loadData({
			//"message":message,
			"data":data
		})
		let f=$filesystem.fileFromMultipart(c.formFile("file"))
		form.addFiles("file",f)
		form.submit()
		//let query=`INSERT INTO r_data(data,file) values('${data}','${f}')`
		//$app.dao().db().newQuery(query).execute()
		//$app.dao().saveRecord(rec)
		c.noContent(204)
		}catch(e){
			console.log(`Sendmessage::: Error :: ${e}`)
		}
	}
	else{
	let rec=new Record(collection,{"message":message,"data":data})
	$app.dao().saveRecord(rec)
	c.noContent(204)
	}
})
