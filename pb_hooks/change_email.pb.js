onRecordAfterUpdateRequest((e)=>{
	let record=e.record
	let id=record.get("user")
	let userdata=$app.dao().findRecordById("users",id)
	let email=record.get("newemail")
	if(record.get("approve")){
	userdata.setEmail(email)
	const html=$template.loadFiles(
		`${__hooks}/view/emailtemplate.html`,
		`${__hooks}/view/changemail.html`
	).render({
		"name":userdata.get("name"),
	})
	
	$app.dao().saveRecord(userdata)
	 const message = new MailerMessage({
                from: {
                        address: $app.settings().meta.senderAddress,
                        name:  $app.settings().meta.appName+" "+$app.settings().meta.senderName,

                },
                to: [{
                        address: email
                }],
                subject: "Email Changed",
                html:html,
 		        })
	$app.newMailClient().send(message)
	}
},"email_change_request")
