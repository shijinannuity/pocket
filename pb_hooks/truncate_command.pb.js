$app.rootCmd.addCommand(new Command({
	use:"truncate",
	run:(cmd,args)=>{
		//console.log("cmdarg::"+args[0])
		if(args[0]=="alert"){
			$app.dao().db().newQuery("DELETE FROM alert").execute()
		}
	}

}))
