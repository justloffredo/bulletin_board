require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const bulletinBoardRoutes = require('./Routes/bulletin_board.js');
const query = require('./utility/query.js');
const Bulletin = require('./utility/bulletin.js');


app.set('view engine', 'ejs');
app.use(express.static('assets'));


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/form", function(req,res) {
	res.render("./pages/form");
});

app.get("/list", function(req, res) {
	Bulletin.getAll()
		.then(function(input) {
			res.render("./pages/list", {
			input: input,
			});
		});
	});

	app.post("/form", function(req, res) {
		Bulletin.addInput([req.body.title, req.body.body])
		.then(function(input) {
			res.render("./pages/list", {
				input: input,
			});
		});
	});


















	app.listen(3000, function() {
		console.log("Your server is available at 3000");
	});
