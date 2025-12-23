const http = require('http');
const handler = require('./requestHandler');

const server = http.createServer(handler);
server.listen(3000);