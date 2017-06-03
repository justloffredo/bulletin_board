require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const Bulletin = require('./utility/bulletin.js');


app.set('view engine', 'ejs');
app.use(express.static('assets'));


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

function renderList(res, message) {
	Bulletin.getAll()
	.then(function(input) {
		res.render("./pages/list", {
			input: input,
			message: message,
		});
	});
}

app.get("/", function(req, res) {
	renderList(res);
});



app.post("/", function(req, res) {
	if (req.body.title === "")
	res.redirect("/form?message=Please%20Enter%20the%20Day%20of%20Forecast=" + req.body.body);
else if (req.body.body === "")
	res.redirect("/form?message=Please%20Enter%20the%20Description%20of%20Forecast=" + req.body.title);
	Bulletin.add([req.body.title, req.body.body])
	.then(function() {
		renderList(res, "Saved " + req.body.title);
	});
});



		app.get("/form", function(req,res) {

			res.render("./pages/form", {
				title: req.query.title,
				body: req.query.body,
				message: req.query.message,
			});
		});














const port = process.env.PORT || 3000;




app.listen(port, function() {
	console.log("Listening at http://localhost:" + port);
});
