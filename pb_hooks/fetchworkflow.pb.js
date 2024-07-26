/**
	Endpoint: /fetchworkflow
	Method: GET
	Description: To fetch workflow
	Parameters:
		Query Parameters: 
				user_id : String
	Responses:
		Success Responses: 
				StatusCode:200
				res:array<json>
	Authentication: Either admin or user token required
	Example:
		request: http://192.168.0.106:8026/fetchworkflow?user_id=3q8gebiwxes5hxo
		response: {
	"res": [
		{
			"wf_name": "Usage Analytics1",
			"user_id": "3q8gebiwxes5hxo",
			"description": "Usage Analytics",
			"isactive": true,
			"wf_apps": [
				{
					"app": {
						"app_id": "ar_3",
						"company_id": "wdyfaxu24v587e1",
						"internalport": 5001,
						"internalurl": "memory_fdfr254s2",
						"logo": "1lRRgbOVDjV_fpgZhiHlCO.png",
						"name": "Memory Usage",
						"table_id": "taiihudenwyejpt"
					},
					"app_order": 1,
					"wf_app_row_id": "r7595f87abfe3fc"
				},
				{
					"app": {
						"app_id": "ar_8",
						"company_id": "wdyfaxu24v587e1",
						"internalport": 12121,
						"internalurl": "Histogram",
						"logo": "1s044g8h4cG_Hjwu5x4Hvs.png",
						"name": "Histogram",
						"table_id": "65waayvpfq51d6i"
					},
					"app_order": 2,
					"wf_app_row_id": "ra58190e7c946a8"
				}
			],
			"wf_row_id": "frsr51nn1ezmuze"
		}] 
*/


routerAdd("GET", "/fetchworkflow", (c) => {
	let userid = c.queryParam("user_id")

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
	const result = arrayOf(
		new DynamicModel({
			wf_row_id: "",
			wf_name: "",
			user_id: "",
			description: "",
			isactive: true,
			wf_apps: [
				/*{
					id:"",
					app_order:0,
					app_id:""
				}*/
			]
		}))
	$app.dao().db().newQuery("SELECT wf.id as wf_row_id,wf.wfname as wf_name,wf.user_id,wf.description,wf.isactive,( SELECT json_group_array( json_object('wf_app_row_id', workflow_app.id,'app_order', workflow_app.app_order, 'app', (SELECT json_object('table_id',apps.id,'app_id',apps.app_id,'name',apps.name,'logo',apps.file,'internalurl',apps.internalurl,'internalport',apps.internalport,'company_id',apps.company_id) FROM apps WHERE apps.id = workflow_app.app))) FROM workflow_app WHERE workflow_app.wf_id = wf.id ORDER BY workflow_app.app_order) as wf_apps FROM workflow as wf WHERE wf.user_id = {:uid} ORDER BY -wf.isactive,-wf.updated").bind({ "uid": userid }).all(result)
	/*let result=$app.dao().db().newQuery("SELECT wf.id,wf.wfname,wf.description,wf.isactive,wfa.id,(select app_id from apps where id=wfa.app),wfa.app_order from workflow as wf join workflow_app as wfa on wf.id=wfa.wf_id WHERE wf.user_id = {:uid} ").bind({ "uid" : userid}).execute();
	console.log(`res::${result}`)*/
	c.json(200, { "res": result })
}, $apis.requireAdminOrRecordAuth())
