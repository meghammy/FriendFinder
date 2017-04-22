// * Your `htmlRoutes.js` file should include two routes:
//  * A GET Route to `/survey` which should display the survey page.
//  * A default USE route that leads to `home.html` which displays the home page.

//  Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.

//Dependencies
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");


//ROUTING   

var app = express();
module.exports = function(app) {


    //Home Page
    //GET Route
    app.get("/survey", function(req, res) {
        res.sendFile(__dirname + "/../public/survey.html");
    });


    //Defaul USE route to home.html
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};
