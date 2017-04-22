// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);


// //listener
// app.listen(PORT,function() {
	
// });


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// //router

// var htmlRouter = require("./app/routing/htmlRoutes");
// app.use("/", htmlRouter);

// var apiRouter = require("./app/routing/apiRoutes");
// app.use("/api", apiRouter);

// app.listen(port.function() {



// var express = require("express");
// var bodyParser = require("body-parser");

// //config express

// var app = express();
// var PORT = 8080;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname + "/public"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/json' }));

// var htmlRouter = require('./app/routing/htmlRoutes');
// app.use('/', htmlRouter);

// var apiRouter = require('./app/routing/apiRoutes');
// app.use('/api', apiRouter);

// app.listen(port, function() {console.log("App listening on PORT: " + PORT);
// });





// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');

// //express config.
// var app = express();
// var PORT = process.env.PORT || 8080;

// //using BodyParser to more easily interpret data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: 'application/vnd.api+json'}));
// app.use(express.static('app/public'));

// //router set-up
// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

// //listener
// app.listen(PORT, function(){
// 	console.log('Listening on port '+ PORT);
// });

