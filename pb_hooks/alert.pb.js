routerAdd("GET", "/notification", (c) => {
        //try{
        let id = c.queryParam("id")
        const result = arrayOf(new DynamicModel({
                "type": "",
                "title": "",
                "description": "",
                "app": "",
                "workflow": "",
                "triggdate": "",
                "triggtime": "",
                "owner": "",
                "secondary": "",
        }))
     //   $app.dao().db().newQuery("SELECT al.type,al.title,al.description,al.app,al.wfname,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,COALESCE((SELECT users.email FROM users where users.id=al.secondary_user),'') as secondary FROM alert as al WHERE (al.owner={:id} OR al.secondary_user={:id} ) AND al.active=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') <= strftime('%H:%M', 'now','localtime','+30 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') >= strftime('%H:%M', 'now','localtime','-30 minutes'))").bind({ "id": id }).all(result)
        //	     $app.dao().db().newQuery("SELECT al.type,al.title,al.description,al.app,al.wfname,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,COALESCE((SELECT users.email FROM users where users.id=al.secondary_user),'') as secondary FROM alert as al WHERE (al.owner={:id} OR al.secondary_user={:id} ) AND al.active=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime'))").bind({"id":id}).all(result)
        // let query=`
        // WITH original as (SELECT al.type,al.title,al.wfname,al.description,al.app,al.triggdate,al.triggtime,u.email as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),"") as secondary,u.company_id FROM alert as al join users as u on al.owner=u.id WHERE al.active=true AND al.email=true AND (al.owner='${id}' OR al.secondary_user='${id}' ) AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') < strftime('%H:%M', 'now','localtime','+10 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') > strftime('%H:%M', 'now','localtime'))) SELECT ol.type,ol.title,ol.description,ol.app,ol.wfname,ol.triggdate,ol.triggtime,ol.owner,ol.secondary from original as ol join apps as ap on ol.app=ap.name WHERE ap.company_id=ol.company_id and ap.isactive=TRUE`
        let query=`
        WITH original as (SELECT al.type,al.title,al.wfname,al.description,al.app,al.triggdate,al.triggtime,u.email as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),"") as secondary,u.company_id FROM alert as al join users as u on al.owner=u.id WHERE al.active=true AND al.email=true AND (al.owner='${id}' OR al.secondary_user='${id}' ) AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime'))) SELECT ol.type,ol.title,ol.description,ol.app,ol.wfname,ol.triggdate,ol.triggtime,ol.owner,ol.secondary from original as ol join apps as ap on ol.app=ap.name WHERE ap.company_id=ol.company_id and ap.isactive=TRUE`
        $app.dao().db().newQuery(query).all(result)
        c.json(200, { "res": result })
        //}catch(e){
        //	console.log(`ERR:::${e}`)
        //}



})
