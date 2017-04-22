// * Your `apiRoutes.js` file should contain two routes:
// 	* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// 	* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


//Load Data
var friend = require("../data/friends");
var path = require("path");

//Routing
module.export = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friend);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        friend.push(req.body);
        // res.sendFile(path.join(__dirname + '/home.html'));
    })
}
