routerAdd("POST", "/verifyuserusingmail", (c) => {
    const data = $apis.requestInfo(c).data
    const email = data.mail
    const record = $app.dao().findFirstRecordByData("users", "email", email)
    record.setVerified(true)
    $app.dao().saveRecord(record)
    return c.noContent(204)

});
