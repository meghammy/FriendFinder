
// making node package requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app/public'));


//routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Listener
app.listen(PORT, function () {
    console.log("FriendFinder is listening on port 8080");

});