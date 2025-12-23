const fs = require('fs');

const requestHandler = (req, res) => {
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
        const body = [];
        // reading chunks with buffer
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // buffer to readable string
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            // const jsonObject = {};
            // for (const [key,val] of params.entries()) {
            //     jsonObject[key] = val;
            // }
            const jsonObject = Object.fromEntries(params);
            console.log(jsonObject);
            fs.appendFileSync("user.txt", JSON.stringify(jsonObject));
            console.log("File written successfully!");
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
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

module.exports = requestHandler;