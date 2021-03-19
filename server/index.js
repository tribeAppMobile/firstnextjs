const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express();
    const bodyParser = require('body-parser');
    const users = require("./routes/user.js");

	server.use(bodyParser.json());
    
    server.use("/user", users(server));    
	server.get('/api1', (req, res) => {
		// return app.render(req, res, '/a', req.query)
		return res.json({cmd: 'api1'});
	})

	server.get('/api2', (req, res) => {
		// return app.render(req, res, '/b', req.query)
		return res.json({cmd: 'api2'});
	})

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
	if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})