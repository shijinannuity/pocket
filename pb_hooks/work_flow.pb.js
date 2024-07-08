routerAdd("DELETE","/wf_clear_app/:id",(c)=>{
	let  id=c.pathParam("id");
	console.log("Inside wf_clear_app::"+id);
	if(id!="" && id!=" "){
		 $app.dao().db().newQuery("DELETE FROM workflow_app where wf_id = {:id}").bind({"id":id}).execute()
                return c.noContent(204);

		
	}
	//let where_condition=`wf_id:${id}`;
	//let 
	//let exp=$dbx.exp("workflow_app_duplicate.wf_id=$id",{"id":id});
	
	//console.log(`exp::${exp}`)
	//$app.dao().concurrentDB().delete("workflow_app_duplicate",exp).execute();
	else{
	
		return c.json(400,{"message":"Please give id"});
	}

})


routerAdd("PUT","/modifyworkflow",(c)=>{
	
        let data=$apis.requestInfo(c).data
        //let collection=$app.dao().findCollectionByNameOrId("try")
	let wf_id=data.wf_id
	let name=data.name
        let apps=data.apps
        var values=""
        console.log(`Type  ::  ${typeof apps}`)
	if(apps.length>0){
		let url=`http://localhost:8092/wf_clear_app/${wf_id}`
		let res=$http.send({
			url:url,
			method:"delete",
		})
        	apps.forEach(a);
        	console.log(`Apps :: ${apps} values::${values}`)
        	let newquery=`INSERT INTO workflow_app(wf_id,app,app_order) VALUES${values}`
        	 console.log(`Newquery ::: ${newquery}`)
        	$app.dao().db().newQuery(newquery).execute()
	}
        $app.dao().db().newQuery("UPDATE workflow SET wfname={:name} WHERE id={:id}").bind({"name":name,"id":wf_id}).execute()
        return c.json(200,{"message":"Success"})
        /*}catch(e){
                console.log(`Error in addsample::: ${e}`)
                return c.json(400,{"message":e})
        }*/
        function a(v,i) {
                if(values==""){
                values+=`('${wf_id}','${v}',${i+1})`;
                }
                else{
                        values+=`,('${wf_id}','${v}',${i+1})`;
                }
        }

	
})
