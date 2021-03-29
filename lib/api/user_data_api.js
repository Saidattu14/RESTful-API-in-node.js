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
		   
		   if(value == "url")
		   {
			   
             redirect(res,user[y].url)
		   }
		   if(value == "html_url")
		   {
			   
             redirect(res,user[y].html_url)
		   }
		   if(value == "followers_url")
		   {
			   
             redirect(res,user[y].followers_url)
		   }
		   if(value == "following_url")
		   {
			   
             redirect(res,user[y].following_url)
		   }
		   if(value == "gists_url")
		   {
			   
             redirect(res,user[y].gists_url)
		   }
		   if(value == "starred_url")
		   {
			   
             redirect(res,user[y].starred_url)
		   }
		   if(value == "subscriptions_url")
		   {
			   
             redirect(res,user[y].subscriptions_url)
		   }
		   if(value == "organizations_url")
		   {
			   
             redirect(res,user[y].organizations_url)
		   }
		   if(value == "repos_url")
		   {
			   
             redirect(res,user[y].repos_url)
		   }
		   if(value == "events_url")
		   {
			   
             redirect(res,user[y].events_url)
		   }
		   if(value == "blog")
		   {
			   
             redirect(res,user[y].blog)
		   }
		   if(value == "login")
		   {
			   
            res.status(200).send(user[y].login);
		   }
		   if(value == "id")
		   {
			   
            res.status(200).send(user[y].id);
		   }
		   if(value == "node_id")
		   {
			   
            res.status(200).send(user[y].node_id);
		   }
		   if(value == "gravatar_id")
		   {
			   
            res.status(200).send(user[y].gravatar_id);
		   }
		   if(value == "name")
		   {
			   
            res.status(200).send(user[y].name);
		   }
		   if(value == "company")
		   {
			   
            res.status(200).send(user[y].company);
		   }
		   if(value == "location")
		   {
			   
            res.status(200).send(user[y].location);
		   }
		   if(value == "email")
		   {
			   
            res.status(200).send(user[y].email);
		   }

		}
	})
	
};



module.exports.user_data_api = user_data_api;
