/**
	Endpoint: adminnotification
	Method: GET
	Description: To get admin alerts such as if any user is locked,if any user or company not use the app  in last 20 days
	response:
		Success:
			StatusCode:200
			res:array<JSON>
	Example:
		Request: url/adminnotification
		Response:
			"res": [
     				   {
           				 "description": "Sharif Khan - BV Bank \n Bhimsen Kumar - BV Bank \n Vijay Kumar - BV Bank \n Mahesh Rao - Central Bank of Ooty and Erode \n Rakesh Singh - Central Bank of Ooty and Erode \n Gaurav Singhal - Annuity Risk \n bharathi - Central Bank of Ooty and Erode \n Bharathii - Central Bank of Ooty and Erode \n xxxx - Central Bank of Ooty and Erode \n Akash - BV Bank \n Vijay - Annuity Risk \n Bharath Junior - Central Bank of Ooty and Erode \n Bhaarat - Central Bank of Ooty and Erode \n Bharath Admin - Central Bank of Ooty and Erode \n JoeJoe - Annuity Risk \n ",
          				  "title": "There are some users that not logged in from last 20 days"
        				},
        				{
           					 "description": "Central Bank of Ooty and Erode \n ",
          					  "title": "There is some companies that not logged in from last 20 days"
        				}
    				]
*/



routerAdd("GET","/adminnotification",(c)=>{
	let notification=[]
	/*let model=arrayOf(new DynamicModel({
		"title":"",
		"description":""

	}))*/
	//let records=$app.dao().findRecordByViewFile("notloggedfor20",'name,company','')
	let res=$http.send({url:"http://localhost:8092/api/collections/users_not_loggedfor20/records",method:"get"})
	let rec=res.json
	console.log(`rescode: ${res.statusCode}`)
	let record=rec["items"]
	console.log(`itemcount::${rec["totalItems"]}`)
	if(rec["totalItems"]>0){
		let description=""
		console.log(`itemcount::${rec["items"]}`)
		for(let i=0;i<rec["totalItems"];++i){
			console.log(`item  :: ${record[i].name}  ${record[i].company}`)
			description=description+record[i].name+" - "+record[i].company+" \n "
		}
		notification.push({"title":"There are some users that not logged in from last 20 days","description":description})
	}
	let res2=$http.send({url:"http://localhost:8092/api/collections/company_not_loggedfor20/records",method:"get"})
        let rec2=res2.json
        console.log(`rescode: ${res2.statusCode}`)
        let record2=rec2["items"]
        console.log(`itemcount::${rec["totalItems"]}`)
        if(rec2["totalItems"]>0){
                let description=""
                console.log(`itemcount::${rec["items"]}`)
                for(let i=0;i<rec2["totalItems"];++i){
                        //console.log(`item  :: ${record[i].name}  ${record[i].company}`)
                        description=description+record2[i].company+" \n "
                }
                notification.push({"title":"There is some companies that not logged in from last 20 days","description":description})
        }
	let model=arrayOf(new DynamicModel({
		"name":"",
		"company":""
	}))
	$app.dao().db().newQuery("SELECT users.name,company.company_name as company from users join company on users.company_id=company.id where users.lock>=10").all(model)
	if(model.length>0){
		let description=""
                //console.log(`itemcount::${rec["items"]}`)
                for(let i=0;i<model.length;++i){
                        //console.log(`item  :: ${record[i].name}  ${record[i].company}`)
                        description=description+model[i].name+" - "+model[i].company+" \n "
                }
                notification.push({"title":"Locked Users","description":description})
	}
	return  c.json(200,{"res":notification})
})




routerAdd("GET","/adminlivenotification",(c)=>{
	let notification=[]
	let model=arrayOf(new DynamicModel({
		"name":"",
		"company":""
	}))
	$app.dao().db().newQuery("SELECT users.name,company.company_name as company from users join company on users.company_id=company.id where users.lock >=10 AND strftime('%Y-%m-%d %H:%M',users.locktime)>strftime('%Y-%m-%d %H:%M','now','-20 minutes')").all(model)
	if(model.length>0){
		let description=""
                //console.log(`itemcount::${rec["items"]}`)
                for(let i=0;i<model.length;++i){
                        //console.log(`item  :: ${record[i].name}  ${record[i].company}`)
                        description=description+model[i].name+" - "+model[i].company+" \n "
                }
                notification.push({"title":"Locked Users","description":description})
	}
	return  c.json(200,{"res":notification})
})
