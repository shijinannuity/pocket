routerAdd("POST", "/sendpasswordresetotp", (c) => {
	let data = $apis.requestInfo(c).data
	let email = data.email
	let otp = $security.randomStringWithAlphabet(6, "123456789")
	const message = new MailerMessage({
		from: {
			address: $app.settings().meta.senderAddress,
			name:  $app.settings().meta.appName+" "+$app.settings().meta.senderName,

		},
		to: [{
			address: email
		}],
		subject: "Password reset OTP",
		// html: "<H1>2FA code</H1><DIV>Here is your verification code:</DIV>"+
		//	`<H3 background='#f0adc6' color='#f51b6e'>${otp}</H3>`+
		//	"<DIV>Please make sure you never share this code with anyone.</DIV>"
		html:`
		<body style='background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;'>

			<style>

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:660px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
<table class='nl-container' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;'>
		<tbody>
			<tr>
				<td>
					<table class='row row-1' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a8cafa;'>
						<tbody>
							<tr>
								<td>
									<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;' width='640'>
										<tbody>
											<tr>
												<td class='column column-1' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
													<div class='spacer_block block-1' style='height:15px;line-height:15px;font-size:1px;'>&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class='row row-2' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a8cafa;'>
						<tbody>
							<tr>
								<td>
									<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;' width='640'>
										<tbody>
											<tr>
												<td class='column column-1' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
													<table class='image_block block-1' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
														<tr>
															<td class='pad' style='padding-left:40px;padding-right:40px;width:100%;'>
																<div class='alignment' align='center' style='line-height:10px'>
																	<div style='max-width: 160px;'><img src='https://6e431f5ff6.imgdist.com/public/users/Integrators/BeeProAgency/1038954_1024055/Logo%20-%20Annuity%20RIsk%20India%20%28500%20%C3%97%20180%20px%29.png' style='display: block; height: auto; border: 0; width: 100%;' width='160' alt='I'm an image' title='I'm an image' height='auto'></div>
																</div>
															</td>
														</tr>
													</table>
													<table class='social_block block-2' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
														<tr>
															<td class='pad' style='padding-top:8px;text-align:center;padding-right:0px;padding-left:0px;'>
																<div class='alignment' align='center'>
																	<table class='social-table' width='156px' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;'>
																		<tr>
																			<td style='padding:0 10px 0 10px;'><a href='mailto:info@annuityrisk.com ' target='_blank'><img src='https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/mail@2x.png' width='32' height='auto' alt='E-Mail' title='E-Mail' style='display: block; height: auto; border: 0;'></a></td>
																			<td style='padding:0 10px 0 10px;'><a href='https://in.linkedin.com/in/annuity-risk-india' target='_blank'><img src='https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/linkedin@2x.png' width='32' height='auto' alt='LinkedIn' title='LinkedIn' style='display: block; height: auto; border: 0;'></a></td>
																			<td style='padding:0 10px 0 10px;'><a href='https://annuityrisk.in/' target='_blank'><img src='https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/website@2x.png' width='32' height='auto' alt='Web Site' title='Web Site' style='display: block; height: auto; border: 0;'></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<div class='spacer_block block-3' style='height:15px;line-height:15px;font-size:1px;'>&#8202;</div>
													<table class='paragraph_block block-4' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
														<tr>
															<td class='pad' style='padding-left:40px;padding-right:40px;padding-top:10px;'>
																<div style='color:#2e2e2e;font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;font-size:23px;font-weight:700;line-height:150%;text-align:left;mso-line-height-alt:34.5px;'>
																	<p style='margin: 0;'><strong>Two-Factor Authentication</strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class='paragraph_block block-5' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
														<tr>
															<td class='pad' style='padding-left:40px;padding-right:40px;padding-top:10px;'>
																<div style='color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:400;line-height:150%;text-align:left;mso-line-height-alt:24px;'>
																	<p style='margin: 0; word-break: break-word;'><span style='color: #808389;'>Here is your login verification code :</span><span style='color: #808389;'></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class='divider_block block-6' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
														<tr>
															<td class='pad' style='padding-top:15px;'>
																<div class='alignment' align='center'>
																	<table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
																		<tr>
																			<td class='divider_inner' style='font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;'><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class='row row-3' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a8cafa;'>
						<tbody>
							<tr>
								<td>
									<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #c8dcf9; color: #000000; width: 640px; margin: 0 auto;' width='640'>
										<tbody>
											<tr>
												<td class='column column-1' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 30px solid #FFFFFF; border-right: 30px solid #FFFFFF; vertical-align: top; border-top: 0px; border-bottom: 0px;'>
													<table class='paragraph_block block-1' width='100%' border='0' cellpadding='10' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
														<tr>
															<td class='pad'>
																<div style='color:#3064b2;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:22px;font-weight:900;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:26.4px;'>
																	<p style='margin: 0;'>${otp}</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class='row row-4' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a8cafa;'>
						<tbody>
							<tr>
								<td>
									<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;' width='640'>
										<tbody>
											<tr>
												<td class='column column-1' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
													<table class='paragraph_block block-1' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
														<tr>
															<td class='pad' style='padding-bottom:25px;padding-left:40px;padding-right:40px;padding-top:15px;'>
																<div style='color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:15px;font-weight:400;line-height:180%;text-align:left;mso-line-height-alt:27px;'>
																	<p style='margin: 0; word-break: break-word;'><span style='color: #808389;'>Please make sure you never share this code with anyone.</span><span style='color: #808389;'></span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class='row row-5' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a8cafa;'>
						<tbody>
							<tr>
								<td>
									<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px; margin: 0 auto;' width='640'>
										<tbody>
											<tr>
												<td class='column column-1' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
													<table class='paragraph_block block-1' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
														<tr>
															<td class='pad' style='padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;'>
																<div style='color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;font-weight:400;line-height:150%;text-align:center;mso-line-height-alt:18px;'>
																	<p style='margin: 0;'>You have received this email because you are registered at Annuity Risk India.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class='paragraph_block block-2' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
														<tr>
															<td class='pad' style='padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:10px;'>
																<div style='color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;font-weight:700;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;'>
																	<p style='margin: 0; word-break: break-word;'>Copyright © 2021-2024 Annuity Risk Inc.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class='row row-6' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;'>
						<tbody>
							<tr>
								<td>
									<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;' width='640'>
										<tbody>
											<tr>
												<td class='column column-1' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
													<table class='icons_block block-1' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;'>
														<tr>
															<td class='pad' style='vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;'>
																<table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
																	<tr>
																		<td class='alignment' style='vertical-align: middle; text-align: center;'><!--[if vml]><table align='center' cellpadding='0' cellspacing='0' role='presentation' style='display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;'><![endif]-->
																			<!--[if !vml]><!-->
																			<table class='icons-inner' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;' cellpadding='0' cellspacing='0' role='presentation'><!--<![endif]-->
																				<tr>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>
`
	})
	//$app.newMailClient().send(message)
	let time = new DateTime()
	let otp2 = $security.randomStringWithAlphabet(6, "123456789")
	//send mobile otp here
	let collection = $app.dao().findCollectionByNameOrId("passwordreset")

	const record = new Record(collection, { "mailotp": otp,'mobileotp':otp2, "time": time.toString() ,"email":email})
	$app.dao().saveRecord(record)

	return c.json(200, { "id": time.toString() })

});




routerAdd("POST", "/resetotpverification", (c) => {
	let data = $apis.requestInfo(c).data
	  let t1=new DateTime();
        let t=t1.time().utc()
        let u1=new DateTime(data.id)
        let u=u1.time()
        let d=t.sub(u)
        let min=d.minutes()
        if(min>1){
                 return c.json(200, {"verification": false,"message":"Timeout!!!.OTP expired"})

        }
	const record = $app.dao().findFirstRecordByData(
		"passwordreset", "time", data.id)
	if (record.get("mailotp") == data.otp1.toString() && record.get("mobileotp") == data.otp2.toString()) {
		return c.json(200, { "verification": true,"vid":record.get('id')});
	}
	 if (record.get("mailotp") != data.otp1.toString() && record.get("mobileotp") != data.otp2.toString()) {
                return c.json(200, { "verification": false,"message":"Both email otp and mobile otp are incorrect"});
        }
	 if (record.get("mailotp") != data.otp1.toString()){
                return c.json(200, { "verification": false,"message":"Email OTP is incorrect"});
        }
	 if (record.get("mobileotp") != data.otp2.toString()){
                return c.json(200, { "verification": false,"message":"Mobile OTP is incorrect"});
        }



	return c.json(200, {
		"verification": false,
	})



});


routerAdd("POST","/resetpassword",(c)=>{
	let data=$apis.requestInfo(c).data
	const record=$app.dao().findRecordById("passwordreset",data.id)
	$app.logger().debug("got password reset")
	let authrecord=$app.dao().findAuthRecordByEmail("users", record.get("email"))
	$app.logger().debug("got users:"+authrecord)
	authrecord.setPassword(data.password)
	$app.logger().debug("password changed in record")
	$app.dao().saveRecord(authrecord)
	$app.logger().debug("record saved")
	return c.json(200,{"record":authrecord})
});
