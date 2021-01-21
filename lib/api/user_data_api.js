var request = require('request');
var redirect = require('../repo/redirect')
var user_data_api = (app, resp) => {

   app.get('/api',(req,res,body) => {
	res.json({ message: 'This is Api base route navigate to /api/users to get the api' });
	
   })

	app.get('/api/users',(req,res,body) => {
		// console.log(`Products::${JSON.stringify(resp)}`);
		res.status(200).send(resp);
	})
	app.get('/api/users/:user_name',(req,res,body) => {
		
		var user_name = req.params.user_name;
		var data = JSON.parse(JSON.stringify(resp))
		var user = new Array();
		for (x in data)
		{
			if(data[x].login == user_name)
			{
				user.push(
					 data[x]
				)
			}
			else if(data[x].id == user_name)
			{
				user.push(
					data[x]
			   )
			}
		}
		res.status(200).send(user);
	})
	app.get('/api/users/:user_name/:value',(req,res,body) => {
		var user_name = req.params.user_name;
		var value = req.params.value
		var data = JSON.parse(JSON.stringify(resp))
		var user = new Array();
		for (x in data)
		{
			if(data[x].login == user_name)
			{
				user.push(
					 data[x]
				)
			}
			else if(data[x].id == user_name)
			{
				user.push(
					data[x]
			   )
			}
		}
		
		for(y in user)
		{
		   if(value == "received_events_url")
		   {
			   
             redirect(res,user[y].received_events_url)
		   }
		}
	})
	
};



module.exports.user_data_api = user_data_api;
