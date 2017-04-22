// * Your `apiRoutes.js` file should contain two routes:
// 	* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// 	* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


//dependencies


var friend = require("../data/friends.js")''



//Routing
module.export = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friend);
    });

    app.post("/api/friends", function(req, res) {

    	var user = req.body;
    	var name = req.body.name;
    	var img = req.body.img;

    	var userScores = req.body.scores;
        console.log(userScores);

        var userS1 = req.body.scores[0];
        console.log("User Score 1: " + userS1);

        for(var i = 0, i < friend.length; i++) {
        	console.log(friend[i]);
        };


        friend.push(req.body);
        res.json(true);
        
    });
};
