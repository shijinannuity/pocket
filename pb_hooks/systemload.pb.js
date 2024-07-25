routerAdd("POST","/systemload",(c)=>{
	try{
		let data=$apis.requestInfo(c).data
		let collection=$app.dao().findCollectionByNameOrId("systemload");
		let record=new Record(collection,{"data":data.data})
		$app.dao().saveRecord(record)
		return c.noContent(204)
	}catch(e){
		console.log(`c::: ${e}`)
		return c.noContent(400)
	}
})


routerAdd("POST","/systemload2",(c)=>{
        let value=""
	try{
                let data=$apis.requestInfo(c).data
                //let collection=$app.dao().findCollectionByNameOrId("systemload");
                //let record=new Record(collection,{"data":data.data})
		changevalues(data.data)
		console.log(`value :: ${value}`)
		let query=`INSERT INTO systemload(date,systemload) VALUES${value}`
		 console.log(`query :: ${query}`)
                $app.dao().db().newQuery(query).execute()
                return c.noContent(204)
        }catch(e){
                console.log(`system2::: ${e}`)
                return c.noContent(400)
        }



	function changevalues(data){
		let l=data.date.length
		for(let i=0;i<l;++i){
			if(value==""){
				value+=`('${data.date[i]}','${data.systemload[i]}')`
			}else{
				value+=`, ('${data.date[i]}','${data.systemload[i]}')`
			}
		}
	}
})
