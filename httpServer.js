const http = require('node:http');

const server = http.createServer(function(req, res){ // Create an HTTP server 
    res.end("Hello World");
})

server.listen(3000);