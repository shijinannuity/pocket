onRecordAfterUpdateRequest((e) => {
	console.log("change_email")
	let record = e.record
	let id = record.get("user")
	console.log(`from change_email ::: ${id}`)
	let userdata = $app.dao().findRecordById("users", id)
	console.log(`Userdata  :: ${userdata}`)
	let email = record.get("new_email")
	console.log(`email  :: ${email}`)
	if (record.get("status")=="Approved") {
		userdata.setEmail(email)
		const html = $template.loadFiles(
			`${__hooks}/view/emailtemplate.html`,
			`${__hooks}/view/changemail.html`
		).render({
			"name": userdata.get("name"),
		})

		$app.dao().saveRecord(userdata)
		const message = new MailerMessage({
			from: {
				address: $app.settings().meta.senderAddress,
				name: $app.settings().meta.appName + " " + $app.settings().meta.senderName,

			},
			to: [{
				address: email
			}],
			subject: "Email Changed",
			html: html,
		})
		$app.newMailClient().send(message)
	}
}, "email_change_request")
 