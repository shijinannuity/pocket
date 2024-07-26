routerAdd("GET", "/time", (c) => {
	let t1 = new DateTime();
	let t = t1.time().utc()
	let u1 = new DateTime("2024-07-18 14:53:00.000Z")
	let u = u1.time()
	let d = t.sub(u)
	let min = d.minutes()
	let lt = "2024-07-18 12:00:00.000Z"
	let u2 = new DateTime(lt)
	let u3 = u1.time()
	let d2 = t.sub(u)
	let min2 = d.minutes()

	return c.json(200, { "time": t, "min": min, "u": u, "d": d, "u2": u1, "u3": u3, });

})
