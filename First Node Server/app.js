const http = require('http');

function requestListener(req,res){
    console.log(req.url,req.method,req.headers);
    // process.exit(); // Exits event loop after 1st request
}

 const server = http.createServer(requestListener);
 server.listen(3000);