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
    let name = c.queryParam("name")

    return c.json(200, { "message": "Hello " + name });
}, myCustomMiddleware() );
