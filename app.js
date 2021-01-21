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

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Welocme to github user api' });
});



app.get('/api', router);

app.get('/home', function(req, res, next) {
	res.json({ message: 'This is a Home page' });
});
app.get("*",(req,res) => {
	res.json({ message: 'There is NO such route' });

})


app.listen(3001,()=> {
    console.log("Server is listening at port 3001")
})