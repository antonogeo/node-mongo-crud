const port = 8000;
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(port);

module.exports = server;
