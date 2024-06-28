
routerAdd("GET","/mobile",(c)=>{
let mobile=c.queryParam("mobile")
let otp=$security.randomStringWithAlphabet(6, "123456789")
// pass mobile number and this otp to A2P provider
//if request is success
return c.json(200,{"otp":otp})

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
