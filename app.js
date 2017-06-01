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

app.get("/list", function(req, res) {
	query("SELECT * FROM messages")
	.then(function(data) {
		// res.json(data);
			res.render("./pages/list", {
			input: data.rows,
			});
		});

	});


















	app.listen(3000, function() {
		console.log("Your server is available at 3000");
	});
