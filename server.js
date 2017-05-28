// require is a built-in nodejs method tha tincludes a module
// that module can be:
// 1. part of core, in which case we do nothing (HTTP is an example)
// 2. from the npm store, written by someone else. require will look inside of node_modules
// 3. a module WE wrote, which requires a path
var http = require("http");
// console.log(http);
var server = http.createServer(function(request, response){
	// console.log(request);
	// Write a header for a 200 response (OKAY)
	response.writeHead(418,{
		'content-type': 'text/html'
	});
	response.write("<h1>Hello, visitor. This is YOUR node server.</h1>");
	response.end();
});

// server is created above. It came fromo htt object, the createServer method.
// It includes a request and response in the callback, but ALSO has a listen method.
// The function will only run if someone makes a request on port 8000 (listening for request)
server.listen(8000);
console.log("NodeJS is listening for connections on port 8000...");