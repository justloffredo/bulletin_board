const pg = require("pg");
const config = {
	user: "postgres",
	database: "bulletin",
	password:"tedleo420",
	host: "localhost",
	port: 5432,
};

const pool = new pg.Pool(config);

pool.query("SELECT * FROM messages")
	.then(function(res) {
		console.log("All messages", res.rows);
	})
	.catch(function(err) {
		console.error("Unable to get messages from database");
	});




pool.on("error", function(err) {
	console.error
} )
