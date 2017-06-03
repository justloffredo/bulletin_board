const query = require("./query");



const Bulletin = {
	getAll: function() {
		return query("SELECT * FROM messages")
		.then(function(result) {
			return result.rows;
		});
	},

add: function(posting) {
	return query("INSERT INTO messages (title, body) VALUES ($1, $2)", posting);
	},


};








module.exports = Bulletin;
