const http = require('http');

function requestListener(req, res) {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // Exits event loop after 1st request

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Checkout our products!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>What do you want?</h1></body>');
        res.write('</html>');
        return res.end();
    }
}

const server = http.createServer(requestListener);
server.listen(3000);