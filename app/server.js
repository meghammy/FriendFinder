// 1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// 2. Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//config express

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//create server
var server = http.createServer(handleRequest);

function handleRequest (req, res) {
	var url = url.parse(pathname) {

	switch (url.pathname) {
		c
	}
	}
}