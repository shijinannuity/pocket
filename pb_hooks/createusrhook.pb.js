onRecordAfterCreateRequest((e)=>{
	let email=e.record.email()
	const data = $apis.requestInfo(e.httpContext).data
	let password=data.password
	const html=$template.loadFiles(
	`${__hooks}/view/emailtemplate.html`,
	`${__hooks}/view/firstcredential.html`
	).render({"password":password})
	   const message = new MailerMessage({
                from: {
                        address: $app.settings().meta.senderAddress,
                        name:  $app.settings().meta.appName

                },
                to: [{
                        address: email
                }],
                subject: "Login Credential",
                // html: "<H1>2FA code</H1><DIV>Here is your verification code:</DIV>"+
                //      `<H3 background='#f0adc6' color='#f51b6e'>${otp}</H3>`+
                //      "<DIV>Please make sure you never share this code with anyone.</DIV>"
                html:html
	});

	//$app.newMailClient().send(message)
	
},"users");
