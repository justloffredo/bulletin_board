const query = require("./query");



const Bulletin = {
	getAll: function() {
		return query("SELECT * FROM messages")
		.then(function(res) {
			return res.rows;
		});
	},

	addInput: function(note) {
		console.log(note);
		// return query("INSERT INTO messages (title, body) VALUES (1$, 2$)", note);
	},

};








module.exports = Bulletin;
