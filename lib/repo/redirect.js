var request = require('request');
var personal_api =  require('../api/personal_api')
var redirect = (app,url) => {
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
				
				var content = JSON.stringify(body);
				var prd = body;
				personal_api.personal_api(app,body)
				
				
			}
			else
			{
				console.log(error);
				console.log(response.statusCode)
			}
		
			
			
        })};
      
module.exports = redirect;
