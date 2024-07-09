routerAdd("GET","/fetchworkflow",(c)=>{
	let userid=c.queryParam("user_id")

	//userid=id
	/*if(id!=userid){
		throw new ForbiddenError()
	}*/
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
                        wf_row_id:"",
                        wf_name:"",
			user_id:"",
			description:"",
			isactive:true,
                        wf_apps:[
				/*{
					id:"",
					app_order:0,
					app_id:""
				}*/
			]
                }))
	$app.dao().db().newQuery("SELECT wf.id as wf_row_id,wf.wfname as wf_name,wf.user_id,wf.description,wf.isactive,( SELECT json_group_array( json_object('wf_app_row_id', workflow_app.id,'app_order', workflow_app.app_order, 'app', (SELECT json_object('table_id',apps.id,'app_id',apps.app_id,'name',apps.name,'logo',apps.logo,'internalurl',apps.internalurl,'internalport',apps.internalport,'company_id',apps.company_id) FROM apps WHERE apps.id = workflow_app.app))) FROM workflow_app WHERE workflow_app.wf_id = wf.id ORDER BY workflow_app.app_order) as wf_apps FROM workflow as wf WHERE wf.user_id = {:uid} ORDER BY -wf.isactive,-wf.updated").bind({"uid":userid}).all(result)
	//let result=$app.dao().db().newQuery("SELECT wf.id,wf.wfname,wf.description,wf.isactive,wfa.id,(select app_id from apps where id=wfa.app),wfa.app_order from workflow as wf join workflow_app as wfa on wf.id=wfa.wf_id WHERE wf.user_id = {:uid} ").bind({ "uid" : userid}).execute();
	//console.log(`res::${result}`)
	c.json(200,{"res":result})
},$apis.requireAdminOrRecordAuth())
