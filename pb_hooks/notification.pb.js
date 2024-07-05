cronAdd("checking alert", "*/1 * * * *", () => {
	const result=new DynamicModel({
		"type":"",
		"title":"",
		"description":"",
		"app":"",
		"triggdate":"",
		"triggtime":"",
		"owner":"",
		"secondary":"",
	})
	console.log("hello from cron:: checking alert")
	try{
	let rows=$app.dao().db().newQuery("SELECT al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification FROM users where users.id=al.owner)=true and DATE(al.triggdate)=DATE()").rows()
	console.log("checking alert :: befor while")
	while(rows.next()){
		console.log(`Inside while`)
		///var  type,title,description,app,triggdate,triggtime,owner,secondary;
		var a={}
		rows.scanMap(a)
		console.log(`a::${a["title"]}  ${a.title}`)
	}
	console.log("checking alert :: after while")
	}catch(err){
	  console.log(`Error inside cron alert::${err}`)
	}

})
console.log("outside cron")
