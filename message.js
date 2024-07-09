const express=require('express');
require('dotenv').config()
let port=3000
const app=express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for 
app.post("/message",(req,res)=>{
	try{
	let message=req.body["message"]
	let to=req.body["to"]
	console.log(`message:${message}  to:${to}`)
	const accountSid = process.env.TWILIO_ACCOUNT_SID;
	const authToken = process.env.TWILIO_AUTH_TOKEN;
	const mSid=process.env.TWILIO_messagingServiceSid;
	const client = require('twilio')(accountSid, authToken);
	//console.log(`sid::`)
	client.messages
  		.create({
    			body: message,
    			messagingServiceSid: mSid,
    			to: to
  		})
  	.then(message => console.log(message.sid));
	return res.sendStatus(204)	}catch(e){
		console.log(`Error from message::: ${e}`)
		 return res.sendStatus(404)
	}
	
})
app.listen(port)
