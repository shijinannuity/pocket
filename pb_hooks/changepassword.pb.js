routerAdd("POST","/validatepassword",(c)=>{
	 let info = $apis.requestInfo(c);
        let data=info.data;
        let record=$app.dao().findAuthRecordByEmail("users",data.email);
	let validate=record.validatePassword(data.currentpassword);
	if(!validate){
		return c.json("200",{"verification":false,"message":"Invalid current password"});
	}
	return c.json(200,{"verification":true});
})



routerAdd("POST","/changepassword",(c)=>{
	 let info = $apis.requestInfo(c);
	let data=info.data;
	let record=info.authRecord;
	//console.log("email:"+record.get("email"))
	//console.log("current:"+data.currentpassword)
	record.setPassword(data.newpassword);
	$app.dao().saveRecord(record);
	return c.json("200",{"message":"Password reset successfull.Please login again"});

})
routerAdd("POST","/changeadminpassword",(c)=>{
	 let info = $apis.requestInfo(c);
	let data=info.data;
	let record=info.admin;
	//console.log("email:"+record.get("email"))
	//console.log("current:"+data.currentpassword)
	record.setPassword(data.newpassword);
	$app.dao().saveAdmin(record);
	return c.json("200",{"message":"Password reset successfull.Please login again"});

})

routerAdd("POST","/checkadmin",(c)=>{
	let info = $apis.requestInfo(c);
        let data=info.data;
	$app.dao().findAdminByEmail(data.email)
	return c.noContent(204)


})


routerAdd("POST","/resetadminpassword",(c)=>{
	let info = $apis.requestInfo(c);
	let data=info.data;
	let record=$app.dao().findAdminByEmail(data.email)
	//console.log("email:"+record.get("email"))
	//console.log("current:"+data.currentpassword)
	
	record.setPassword(data.newpassword);
	$app.dao().saveAdmin(record);
	return c.json("200",{"message":"Password reset successfull.Please login again"});

})


