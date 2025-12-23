const http = require('http');
const fs = require('fs');

function requestListener(req, res) {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Taking Input</title></head>');
        res.write('<body><h1>Enter Your Details:</h1></body>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" id="name" name="username" placeholder="Enter your name"><br><br>');
        res.write('<label for="gender">Gender:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="Female">Female</label><br><br>');
        res.write('<button type=s"submit">Submit</button>');
        res.write('</form>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url.toLowerCase() === '/submit-details' && req.method == "POST") {
        fs.writeFileSync('user.txt','Writing File');
        res.statusCode = 302;
        res.setHeader('Location','/');
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