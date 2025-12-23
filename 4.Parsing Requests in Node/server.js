const http = require('http');
const handler = require('./requestHandler')

const server = http.createServer(handler);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});