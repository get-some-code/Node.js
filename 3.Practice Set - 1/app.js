const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Practice Set</title></head>');
        res.write('<body>');
        res.write('<nav><div id="nav-container">');
        res.write('<ul id="nav-links">');
        res.write('<li><a href="/home">Home</a></li>');
        res.write('<li><a href="/men">Men</a></li>');
        res.write('<li><a href="/women">Women</a></li>');
        res.write('<li><a href="/kids">Kids</a></li>');
        res.write('<li><a href="/electronics">Electronics</a></li>');
        res.write('</ul>');
        res.write('</div>');
        res.write('</nav>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Welcome to Home Page!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/men') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Welcome to Authentic Male section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/women') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Welcome to Authentic Female section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/kids') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Welcome to Authentic Kids section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/electronics') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js Begin</title></head>');
        res.write('<body><h1>Welcome to Authentic Electronics section</h1></body>');
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
})

server.listen(3000);