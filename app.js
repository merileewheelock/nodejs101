// Include the HTTP module
var http = require("http");
// Incude the fs module. fs = file system. Part of core! Yay!
var fs = require("fs");


var server = http.createServer((req, res)=>{
	console.log("Someone connected to the server!");
	console.log(req.url);

	
	if (req.url == '/'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./homePage.html');
		res.end(theHomePageHTML);
	}else if (req.url == '/movie-app'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./movie-app.html');
		res.end(theHomePageHTML);
	}else if(red.url == 'js/scripts.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./js/scripts.js');
		res.end(theHomePageHTML);
	}else if(red.url == 'js/config.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./js/scripts.js');
		res.end(theHomePageHTML);
	}else if(red.url == '/css/styles.css'){
		var theHomePageHTML = fs.readFileSync('./css/styles.css');
		res.end(theHomePageHTML);
	}else{
		res.writeHead(200,{'content-type': 'text/html'});
		res.end("<h1>404 ERROR</h1>")
	}
});

// Tell the server we created above to liten to port 8000
// Whenever someone makes a HTTP request to port 8000,
// our callback (with req and res) will file.
var port = 8001;
server.listen(port);
console.log("Server is listening to HTTP traffic on port " + port + "...");