
routerAdd("POST","/mobileotp",(c)=>{

	let data = $apis.requestInfo(c).data
	let email = data.mobile
let otp=$security.randomStringWithAlphabet(6, "123456789")
// pass mobile number and this otp to A2P provider
//if request is success
let time = new DateTime()
let collection = $app.dao().findCollectionByNameOrId("mobile_otp")
const record = new Record(collection, { "otp": otp, "time": time.toString() })
$app.dao().saveRecord(record)
return c.json(200, { "id": time.toString() })
});


routerAdd("POST", "/mobileverification", (c) => {
        let info = $apis.requestInfo(c)
	let data=info.data
	let authrecord=info.authrecord;
        let t1=new DateTime();
        let t=t1.time().utc()
        let u1=new DateTime(data.id)
        let u=u1.time()
        let d=t.sub(u)
        let min=d.minutes()
        if(min>1){
                 return c.json(200, {"verification": false,"message":"Timeout!!!.OTP expired"})

        } 
        const record = $app.dao().findFirstRecordByData("mobile_otp", "time", data.id)
        console.log(`rec otp::${record.get("otp")}`)
	console.log(`data otp :: ${data.otp.toString()}`)
	console.log(`mobile::${data.mobile}`)
	if (record.get("otp") == data.otp.toString()) {
		//let collection=$app.dao().findCollectionByNameOrId("users");
		let rec=$app.dao().findFirstRecordByData("users","phone_number",data.mobile)
		//console.log(`mobile fromrec::${rec.get("phone_number")}`)
		rec.set("mobile_verified","true")
		$app.dao().saveRecord(rec)

		//authrecord.set("mobile_verified",true);
		//$app.dao().saveRecord(authrecord)
                return c.json(200, { "verification": true })
        }
        return c.json(200, {
                "verification": false,"message":"Invalid OTP"
        })



});









routerAdd("POST","/signupaftermobileverification",(c)=>{
const data = $apis.requestInfo(c).data
const password=data.password
const collection=$app.dao().findCollectionByNameOrId("users")
const record=new Record(collection,data)
record.setPassword(password)
$app.dao().saveRecord(record)
return c.noContent(204)

});


routerAdd("GET","/signin",(c)=>{
let mobile=c.queryParam("mobile")
const record=$app.dao().findFirstRecordByData("users","mobile",mobile)
return c.json(200,{"record":record})
});


routerAdd("GET", "/username", (c) => {
    let c1=false
    let c3=false
    let c2=false
    let userid1=""
    do{
        c3=c1
        let mid3=$security.randomStringWithAlphabet(3, "QWERTYUIOPASDFGHJKLZXCVBNM")
	let lasttwo=$security.randomStringWithAlphabet(2, "123456789")
    let userid="uid_"+mid3+lasttwo
    userid1=userid1+" "+userid
    // const record1 = $app.dao().findFirstRecordByData("profile", "userid", userid)
    // const record2 = $app.dao().findFirstRecordByData("profile", "userid", "uid_ALPE19")
     c1=$app.dao().isRecordValueUnique("profile", "userid", userid)
     c2=$app.dao().isRecordValueUnique("profile", "userid", "uid_ALPE19")
    }while(!c3)
    
    return c.json(200,{"username":userid1,"recordtrial":c1,"record":c2})

});
