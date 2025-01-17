routerAdd("POST", "/sendpasswordresetotp", (c) => {
	let data = $apis.requestInfo(c).data
	let email = data.email
	let otp = $security.randomStringWithAlphabet(6, "123456789")
	//let col=$app.dao().findCollectionByNameOrId("users")
	let rec = ""
	try {
		rec = $app.dao().findAuthRecordByEmail("users", email)
	} catch (e) {
		return c.json(400, { "message": "Email not exist   !!!" })
	}
	let html = $template.loadFiles(
		`${__hooks}/view/emailtemplate.html`,
		`${__hooks}/view/forgotmail.html`
	).render({
		"otp": otp,
	})
	let message = new MailerMessage({
		from: {
			address: $app.settings().meta.senderAddress,
			name: $app.settings().meta.appName + " " + $app.settings().meta.senderName,

		},
		to: [{
			address: email
		}],
		subject: "Password reset OTP",
		// html: "<H1>2FA code</H1><DIV>Here is your verification code:</DIV>"+
		//	`<H3 background='#f0adc6' color='#f51b6e'>${otp}</H3>`+
		//	"<DIV>Please make sure you never share this code with anyone.</DIV>"
		html: html
	})
	$app.newMailClient().send(message)
	let time = new DateTime()
	let otp2 = $security.randomStringWithAlphabet(6, "123456789")

	let res = $http.send({
		url: "http://localhost:3000/message",
		method: "POST",
		body: JSON.stringify({ "message": `Your one-time passcode (OTP) from Annuity Risk is ${otp2} .`, "to": rec.get("phone_number") })
	})
	//  html = $template.loadFiles(
	// 	`${__hooks}/view/emailtemplate.html`,
	// 	`${__hooks}/view/forgotmail.html`
	// ).render({
	// 	"otp": otp2,
	// })
	//  message = new MailerMessage({
	// 	from: {
	// 		address: $app.settings().meta.senderAddress,
	// 		name: $app.settings().meta.appName + " " + $app.settings().meta.senderName,

	// 	},
	// 	to: [{
	// 		address: email
	// 	}],
	// 	subject: "Password reset Mobile OTP",
	// 	// html: "<H1>2FA code</H1><DIV>Here is your verification code:</DIV>"+
	// 	//	`<H3 background='#f0adc6' color='#f51b6e'>${otp}</H3>`+
	// 	//	"<DIV>Please make sure you never share this code with anyone.</DIV>"
	// 	html: html
	// })
	// $app.newMailClient().send(message)
	let collection = $app.dao().findCollectionByNameOrId("passwordreset")

	const record = new Record(collection, { "mailotp": otp, 'mobileotp': otp2, "time": time.toString(), "email": email })
	$app.dao().saveRecord(record)

	return c.json(200, { "id": time.toString() })

});




routerAdd("POST", "/resetotpverification", (c) => {
	let data = $apis.requestInfo(c).data
	let t1 = new DateTime();
	let t = t1.time().utc()
	let u1 = new DateTime(data.id)
	let u = u1.time()
	let d = t.sub(u)
	let min = d.minutes()
	if (min > 1.5) {
		return c.json(200, { "verification": false, "message": "OTP have expired!. Please click on resend to get new OTPs" })

	}
	const record = $app.dao().findFirstRecordByData(
		"passwordreset", "time", data.id)
	if (record.get("mailotp") == data.otp1.toString() && record.get("mobileotp") == data.otp2.toString()) {
		return c.json(200, { "verification": true, "vid": record.get('id') });
	}
	if (record.get("mailotp") != data.otp1.toString() && record.get("mobileotp") != data.otp2.toString()) {
		return c.json(200, { "verification": false, "message": "Both email otp and mobile otp are incorrect" });
	}
	if (record.get("mailotp") != data.otp1.toString()) {
		return c.json(200, { "verification": false, "message": "Email OTP is incorrect" });
	}
	if (record.get("mobileotp") != data.otp2.toString()) {
		return c.json(200, { "verification": false, "message": "Mobile OTP is incorrect" });
	}



	return c.json(200, {
		"verification": false,
	})



});


routerAdd("POST", "/resetpassword", (c) => {
	let data = $apis.requestInfo(c).data
	const record = $app.dao().findRecordById("passwordreset", data.id)
	$app.logger().debug("got password reset")
	let authrecord = $app.dao().findAuthRecordByEmail("users", record.get("email"))
	$app.logger().debug("got users:" + authrecord)
	authrecord.setPassword(data.password)
	$app.logger().debug("password changed in record")
	$app.dao().saveRecord(authrecord)
	$app.logger().debug("record saved")
	return c.json(200, { "record": authrecord })
});


routerAdd("POST", "/resetpasswordofUser", (c) => {
	let data = $apis.requestInfo(c).data
	let authrecord = $app.dao().findAuthRecordByEmail("users", data.email)
	let password = $security.randomString(8)
	password = password + "@"
	authrecord.setPassword(password)
	$app.dao().saveRecord(authrecord)
	const html = $template.loadFiles(
		`${__hooks}/view/emailtemplate.html`,
		`${__hooks}/view/resetpasswordbyadmin.html`
	).render({ "password": password })
	const message = new MailerMessage({
		from: {
			address: $app.settings().meta.senderAddress,
			name: $app.settings().meta.appName

		},
		to: [{
			address: data.email
		}],
		subject: "New Password",
		// html: "<H1>2FA code</H1><DIV>Here is your verification code:</DIV>"+
		//      `<H3 background='#f0adc6' color='#f51b6e'>${otp}</H3>`+
		//      "<DIV>Please make sure you never share this code with anyone.</DIV>"
		html: html
	});

	$app.newMailClient().send(message)

	return c.json(200, { "password": password });



}, $apis.requireAdminAuth());
