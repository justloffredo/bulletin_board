
const pg = require("pg");
const config = {
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT ||  5432,
};

const express = require("express");
const app = express();



const pool = new pg.Pool(config);




pool.on("error", function(err) {
    console.error ("Postgres query pool encountered an error", err);
});

module.exports = function(queryString, values, cb) {
	return pool.query(queryString, values, cb);
};
