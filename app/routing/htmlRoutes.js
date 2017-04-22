// * Your `htmlRoutes.js` file should include two routes:
// 	* A GET Route to `/survey` which should display the survey page.
// 	* A default USE route that leads to `home.html` which displays the home page.

// 	Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.

//Dependencies
var path = require("path");



//ROUTING	
module.exports = function(app) {
	//GET Route
    app.get("/survey", fucntion(req, res) {
        res.sendFile(__dirname + "/../public/survey.html");
    });
    //USE Route
    app.use(function(req.res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};
