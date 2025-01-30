const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 3001;

http.createServer((req,res) => {
    res.writeHead(200, "Connection is successful", {"Content-type": "text/html"});

    const fullpath = url.parse(req.url, true)

    if (fullpath.pathname === "/") {
        res.write("<h1>Add insttructions in an HTML file on how to operate this site! :)</div>")
        res.end();
    } else if (fullpath.pathname === "/mood") {
        res.write("Hello there")
        res.end();
        console.log("Hi");
    } else if (fullpath.pathname === "/dark") {
        console.log("Hi");
    } else if (fullpath.pathname === "/light") {
        console.log("hi");
    } else if (fullpath.pathname === "/dogs") {
        console.log("hi");
        res.write("Billie")
        res.end();
    }

}).listen(PORT, () => console.log(`Connecting on port ${PORT}`))