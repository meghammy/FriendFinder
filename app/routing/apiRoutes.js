// * Your `apiRoutes.js` file should contain two routes:
//  * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//  * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


//dependencies


var friendsList = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");



//Routing
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.status(200).json({ message: "connected" })
        res.json(friendsList);
    });
    //posting friend data and match
    app.post("/api/friends", function(req, res) {

        var plusFriend = req.body;
        for (var i = 0; i < plusFriend.userScores.length; i++) {
            if (plusFriend.userScores[i] == "1") {
                plusFriend.userScores[i] = 1;

            } else if (plusFriend.userScores[i] == "5") {
                plusFriend.userScores[i] = 5;
            } else {
                plusFriend.userScores[i] = parseInt(plusFriend.userScores[i]);
            }
        }

        var dArray = []
        for (var i = 0; i < friendsList.length; i++) {

            var likeFriend = friendsList[i];
            var difference = 0;

            for (var n = 0; k < likeFriend.scores.length; n++) {
                var difInScore = Math.abs(likeFriend.userScores[n] - plusFriend.userScores[n]);
                difference += difInScore;
            }

            dArray[i] = difference;
        }

        var bestMatch = dArray[0];
        var bestMatchIndex = 0;

        for (var i = 1; i < dArray.length; i++) {
            friendTotal = sum(friendsList[i].scores);
            if (dArray[i] < bestMatch) {
                bestMatch = dArray[i];
                bestMatchIndex = i;
            }
        }

        friendsList.push(plusFriend);
        res.json(friendsList[bestMatchIndex]);

    });

}
