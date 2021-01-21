
var user_data_api = (app, resp) => {
	
	
		console.log("okk")
		try{
			app.get('',(req,res) => {
				console.log('err')
			})
		}
		catch(e)
		{

			console.log("why")
		}


	
};



module.exports.user_data_api = user_data_api;
