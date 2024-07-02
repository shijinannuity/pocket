routerAdd("GET","/fetchworkflow",(c)=>{
	let userid=c.queryParam("user_id")
	//console.log(`user_id :: ${userid}`)
	/* const result=arrayOf(
		new DynamicModel({
			wfid:"",
			wfname:"",
			wfisactive:true
			wfaid:"",
			app_order:0,
			app_id:""
		})
	) 
	$app.dao().db().newQuery("SELECT wf.id as wfid,wf.wfname,wfa.id as wfaid, wfa.app_order ,(SELECT apps.app_id FROM apps WHERE apps.id = wfa.app ) as app_id from workflow as wf  join workflow_app as wfa ON wf.id=wfa.wf_id WHERE wf.user_id={:uid}").bind({"uid":userid}).all(result) */
	 const result=arrayOf(
                new DynamicModel({
                        wfid:"",
                        wfname:"",
			user_id:"",
			isactive:true,
                        wfapps:[
				/*{
					id:"",
					app_order:0,
					app_id:""
				}*/
			]
                }))
	$app.dao().db().newQuery("SELECT wf.id as wfid,wf.wfname,wf.user_id,wf.isactive,( SELECT json_group_array(json_object('id', workflow_app.id,'app_order', workflow_app.app_order,'app_id', (SELECT apps.app_id FROM apps WHERE apps.id = workflow_app.app)))FROM workflow_app WHERE workflow_app.wf_id = wf.id ORDER BY workflow_app.app_order) as wfapps FROM workflow as wf WHERE wf.user_id = {:uid} ORDER BY -wf.isactive,-wf.updated").bind({"uid":userid}).all(result)
	//let result=$app.dao().db().newQuery("SELECT wf.id,wf.wfname,wf.description,wf.isactive,wfa.id,(select app_id from apps where id=wfa.app),wfa.app_order from workflow as wf join workflow_app as wfa on wf.id=wfa.wf_id WHERE wf.user_id = {:uid} ").bind({ "uid" : userid}).execute();
	//console.log(`res::${result}`)
	c.json(200,{"res":result})
})
