routerAdd("GET","/time",(c)=>{
	let t1=new DateTime();
	let t=t1.time().utc()
	let u1=new DateTime("2024-07-01T07:42:07.171629919Z")
	let u=u1.time()
	let d=t.sub(u)
	let min=d.minutes()
	return  c.json(200, { "time": t ,"min":min});

})
