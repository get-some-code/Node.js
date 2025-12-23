const add = require('./addition');

const handler = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Home Page</h1>');
        res.write('<p><a href="/calculator">Calculator</a></p>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>')
        res.write('<h1>Welcome to the Calculation Page</h1>')
        res.write('<form action="/calculate-result" id="calculation-form" method="POST">')
        res.write('<input type="number" id="input-box" name="var1" placeholder="Enter first number">');
        res.write('<input type="number" id="input-box" name="var2" placeholder="Enter second number">');
        res.write('<button type="submit">Add</button>');
        res.write('</form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    else if (req.url.toLowerCase() === '/calculate-result' && req.method == "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            console.log(params);
            const jsonObject = Object.fromEntries(params);
            console.log(jsonObject);
            const result = add(Number(jsonObject['var1']),Number(jsonObject['var2']));
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Calculator</title></head>');
            res.write('<body>');
            res.write('<h1>Welcome to the Result Page</h1>');
            res.write(`<p>${result}</p>`)
            res.write('</body>');
            res.write('</html>');
            return res.end();
        })
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>What do you want?</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
};

module.exports = handler;