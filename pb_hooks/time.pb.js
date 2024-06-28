routerAdd("GET","/time",(c)=>{
	let t1=new DateTime("2024-06-27 11:37:00.000Z");
	let t=t1.time()
	return  c.json(200, { "milli": t.unix() });

})
