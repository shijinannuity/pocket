$app.rootCmd.addCommand(new Command({
	use:"truncate",
	run:(cmd,args)=>{
		//console.log("cmdarg::"+args[0])
		if(args[0]=="alert"){
			if(args[1]!=null){
				$app.dao().db().newQuery("DELETE FROM alert WHERE alert.reminder={:reminder}").bind({"reminder":args[1]}).execute();
			}
			else{
				$app.dao().db().newQuery("DELETE FROM alert").execute()
			}	
		}
	}

}))
