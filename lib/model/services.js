var request = require('request');

var user_data = require('../repo/user_data.js')

var appRouter = async app => {
	// product API
	await user_data(app);
};

module.exports = appRouter;