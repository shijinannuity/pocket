routerAdd("GET", "/recentapps", (c) => {
	let info = $apis.requestInfo(c)
	let authrec = info.authRecord
	let data = arrayOf(new DynamicModel({
		"app": {},
		"date_time": ""
	}))
	let user_id = authrec.get("user_id")
	let query = `WITH RankedAccess AS (SELECT a1.id,(CASE a2.isactive
  WHEN TRUE THEN
    json_object(
      'table_id', a2.id,
      'app_id', a2.app_id,
      'name', a2.name,
      'logo', a2.file,
      'internalurl', a2.internalurl,
      'internalport', a2.internalport,
      'company_id', a2.company_id
    ) ELSE NULL END) as app ,a1.date_time,ROW_NUMBER() OVER (PARTITION BY a1.event ORDER BY a1.date_time DESC) as rn FROM access as a1 JOIN apps as a2 ON  a1.event = a2.app_id WHERE  a1.user = '${user_id}') SELECT  app, date_time FROM  RankedAccess WHERE rn = 1 ORDER BY date_time DESC LIMIT 5`
	$app.dao().db().newQuery(query).all(data)
	return c.json(200, { "data": data })
}, $apis.requireRecordAuth('users'))
