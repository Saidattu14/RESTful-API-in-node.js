var request = require('request');
var user_data_api = (app, resp) => {
	app.get('/api/users',(req,res,body) => {
		// console.log(`Products::${JSON.stringify(resp)}`);
		res.status(200).send(resp);
	})
	
};



module.exports.user_data_api = user_data_api;
