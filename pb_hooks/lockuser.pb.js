onRecordBeforeAuthWithPasswordRequest((e)=>{
	let c=e.httpContext
    let email=e.identity
    console.log(e.password)
	let record=""
	try{
		record=$app.dao().findAuthRecordByEmail("users",email);
	}catch(e){
		return c.json("404",{"message":"Email not exist!!!"});
	}
	let datetime=new DateTime()
        let validate=record.validatePassword(e.password);
	let locktime=record.get('locktime')
	let t=datetime.time().utc()
	if(!validate){
		return c.json("400",{"message":"Invalid Password!!!"});
	}
        /*	if(!validate){
		console.log(`locktime:::${locktime}`)
		let message=""
		if(locktime==""){
			record.set("lock",1)
			record.set("locktime",datetime)
			$app.dao().saveRecord(record)
			message="Invalid password"
		}
		else{
			console.log(`locktime:::${locktime}`)
      			//let u1=new DateTime(locktime)
    			//let u=u1.time()
			let u=locktime.time()
			let d=t.sub(u)
       			let min=d.minutes()
			//console.log(`login lock ::${locktime} t::${t} min ${min}  u1:${u} u:${u} d:${d}`)
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
	}*/
	if(record.get("islock")==true){
		return c.json("400",{"message":"Your account has been Locked!!! Please  Contact admin"});
	}
	if(record.get("active") == false){
                return c.json("400",{"message":"Your login has been blocked!!!  Contact admin"});
        }
     	if(record.get("isonlyaccessfromwtlist")==true){
		let data=arrayOf(new DynamicModel({
			"ip_addr":""
		}))
		let realip=c.realIP()
		let cid=record.get("company_id")
		console.log(`ip ${realip}  cid=${cid}`)
		$app.dao().db().newQuery("SELECT ip_addr from whitelist_ip WHERE ip_addr={:ip} AND company={:cid}").bind({"ip":realip,"cid":cid}).all(data)
		if(data.length==0){
			return c.json("400",{"message":"Cannot login from this network"});
		}
	}
	if(record.get("multiple_login")==false){
		let access=$app.dao().findRecordsByFilter("access","event='login' || event='logout'","-created",4)
		if(access[0].get('event')=="login"){
			let login_time=new DateTime(access[0].get('date_time'))
			let lt=login_time.time()
			let d=t.sub(lt)
			let min=d.minutes()
			if(min<60){
				 return c.json("400",{"message":"Cannot perform multiple login for this account!!!"});
			}
		}
	}
	


},"users")
