var request = require('request');
var user_data_api = require('../api/user_data_api')
var user_data = app => {
const url = 'https://api.github.com/users';
let Agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75"
	request(
		{
			url: url,
			json: true,
			headers: {
				"user-Agent" : Agent
			},
		},
		(error, response, body) => {
			
			
            if (!error && response.statusCode === 200) {
				console.log('ok')
				var content = JSON.stringify(body);
				var prd = body;
				user_data_api.user_data_api(app,body)
				
			}
			else
			{
				console.log("error")
			}
		
			
			
        })};
      
module.exports= user_data;
