onRecordBeforeCreateRequest((e) => {
    const record = e.record;
    let dt = new DateTime();
    let t = dt.time();
    let t_no = "tara-" + t.unix();
    record.set("ticket_no", t_no)
    $app.dao().saveRecord(record)
}, "support")
