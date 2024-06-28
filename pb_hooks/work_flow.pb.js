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
