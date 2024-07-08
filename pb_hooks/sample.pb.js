function myCustomMiddleware(next) {
    return (c) => {
        // eg. inspect some header value before processing the request
        //const header = c.request().header.get("Some-Header")
	let name = c.pathParam("name")
        if (name!="shijin") {
            // throw or return an error
            throw new BadRequestError("Provide correct name")
        }
        return next(c) // proceed with the request chain
    }
}

//routerUse(myCustomMiddleware);
routerAdd("GET", "/hei/:name", (c) => {
    let name = c.pathParam("name")

    return c.json(200, { "message": "Hello " + name });
}, myCustomMiddleware($app));

routerAdd("GET", "/details", (c) => {
	try{
	let name = c.queryParam("name")
	let res=$http.send({
		url:"http://localhost:8092/time",
		method:"GET"
	})
	return c.json(200, { "message": "Hello " + name ,"resfromtime":res.json});
	}catch(e){
		console.log(`Error:: in details::: ${e}`)
		return c.json(400, { "message":e});
	}
} );



routerAdd("POST","/addsample",(c)=>{
	
	let data=$apis.requestInfo(c).data
	//let collection=$app.dao().findCollectionByNameOrId("try")

	let apps=data.apps
	var values=""
	console.log(`Type  ::  ${typeof apps}`)
	apps.forEach(a);
	console.log(`Apps :: ${apps} values::${values}`)
	let newquery=`INSERT INTO try(adv,bdv,no) VALUES${values}`
	 console.log(`Newquery ::: ${newquery}`)
	$app.dao().db().newQuery(newquery).execute()
	//$app.dao().db().newQuery("INSERT INTO try(adv,bdv,no) VALUES ('fdgfs','sfgsd',35),('fsdgf','sgdfsdf',45)").execute()
	return c.json(200,{"message":"Success"})
	/*}catch(e){
		console.log(`Error in addsample::: ${e}`)
		return c.json(400,{"message":e})
	}*/
	function a(v,i) {
                if(values==""){
                values+=`('${v}','${v}',${i+1})`;
		}
                else{
                        values+=`,('${v}','${v}',${i+1})`;
                }
        }
//2024/07/08 17:02:17 outside cron


})


