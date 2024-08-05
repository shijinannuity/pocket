routerAdd("POST", "/mailMFA", (c) => {
	let data = $apis.requestInfo(c).data
	let email = data.email
	let otp = $security.randomStringWithAlphabet(6, "0123456789")
	const html = $template.loadFiles(
		`${__hooks}/view/emailtemplate.html`,
		`${__hooks}/view/otpmail.html`
	).render({
		"otp": otp,
	})


	const message = new MailerMessage({
		from: {
			address: $app.settings().meta.senderAddress,
			name: $app.settings().meta.appName + " " + $app.settings().meta.senderName,

		},
		to: [{
			address: email
		}],
		subject: "Two factor authentication OTP",
		// html: "<H1>2FA code</H1><DIV>Here is your verification code:</DIV>"+
		//	`<H3 background='#f0adc6' color='#f51b6e'>${otp}</H3>`+
		//	"<DIV>Please make sure you never share this code with anyone.</DIV>"
		html: html
	})
	$app.newMailClient().send(message)
	let time = new DateTime()
	let collection = $app.dao().findCollectionByNameOrId("mailtwofactor")

	const record = new Record(collection, { "otp": otp, "time": time.toString() })
	$app.dao().saveRecord(record)

	return c.json(200, { "id": time.toString() })

});




routerAdd("POST", "/mailverification", (c) => {
	let data = $apis.requestInfo(c).data
	let t1 = new DateTime();
	let t = t1.time().utc()
	let u1 = new DateTime(data.id)
	let u = u1.time()
	let d = t.sub(u)
	let min = d.minutes()
	if (min > 1) {
		return c.json(200, { "verification": false, "message": "OTP have expired!. Please click on resend to get new OTP" })

	}
	const record = $app.dao().findFirstRecordByData(
		"mailtwofactor", "time", data.id)

	if (record.get("otp") == data.otp.toString()) {
		return c.json(200, { "verification": true })
	}
	return c.json(200, {
		"verification": false, "message": "Invalid OTP"
	})



});
