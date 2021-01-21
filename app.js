// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express")
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST


var router = express.Router(); // get an instance of the express Router
var routes = require('./lib/model/services.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});



app.use('/api', router);


app.get('/',(req,res) => {
	res.json({ message: 'This is the Welcome page and There are /home and /api routes ' });
})

app.get('/home', function(req, res, next) {
	res.json({ message: 'This is a Home page' });
});



app.listen(3005,()=> {
    console.log("Server is listening at port 3001")
})