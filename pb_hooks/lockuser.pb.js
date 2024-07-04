onRecordBeforeAuthWithPasswordRequest((e)=>{
	let c=e.httpContext
    let email=e.identity
    console.log(e.password)
	let record=$app.dao().findAuthRecordByEmail("users",email);
	let datetime=new DateTime()
        let validate=record.validatePassword(e.password);
	let locktime=record.get('locktime')
        if(!validate){
		console.log(`locktime:::${locktime}`)
		let message=""
		if(locktime==""){
			record.set("lock",1)
			record.set("locktime",datetime)
			$app.dao().saveRecord(record)
			message="Invalid password"
		}
		else{
		        let t=datetime.time().utc()
      			let u1=new DateTime(locktime)
    			let u=u1.time()
			let d=t.sub(u)
       			let min=d.minutes()
			let l=record.get("lock")+1
			if(min<15 || l>=10){
				record.set("lock",l)
	                        record.set("locktime",datetime)
        	                $app.dao().saveRecord(record)
				message="Invalid password "
				if(l>=10){
					message="Invalid password and  Account has been Locked!!! "
				}

			}
			else{
				record.set("lock",1)
                	        record.set("locktime",datetime)
        	                $app.dao().saveRecord(record)
				message="Invalid password"
	
			}
		}
		 return c.json("400",{"message":message});
        }
	if(record.get("lock")>=10){
		return c.json("400",{"message":"Account has been Locked!!! Please  Contact admin"});
	}
	if(record.get("active") == false){
                return c.json("400",{"message":"Your login has been blocked!!!  Contact admin"});
        }



},"users")
