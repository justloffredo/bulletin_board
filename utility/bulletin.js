const query = require("./query");



const Bulletin = {
	getAll: function() {
		return query("SELECT * FROM messages")
		.then(function(res) {
			return res.rows;
		});
	},
};







module.exports = Bulletin;
