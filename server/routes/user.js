const express = require("express");
const router = express.Router();

function routes(app) {
	router.get("/list", (req, res) => {
		res.end("We made it! And it's great");
	});
	
	return router;
};

module.exports = routes;