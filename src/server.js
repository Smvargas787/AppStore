var express = require('express');
var body_parser = require('body-parser');

// Beginning of Adding hello world feature 
var app = express();

var port = 3000;

app.get('/', function(req,res){
	res.json({hello:true})
});

// Ending of Adding hello world feature 
app.listen(3000, function() {
	console.log("Our Server is Running on port 3000.");
})

// // Dot Env File Loader
// if (!process.env.PORT) dotenv = require('dotenv').load();

// // Config
// var port = process.env.PORT || 3000;

// // Enable body-parser
// app.use(body_parser.json());

// // Routes
// app.use('/', require('./routes')(express));

// // Start up the Server
// var server = app.listen(port, function() {
//   if (process.env.DEBUG) console.log('Server Active On', port);
// });

// module.exports = server;
