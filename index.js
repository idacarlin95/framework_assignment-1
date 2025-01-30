const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 3001;

http.createServer((req,res) => {
    res.writeHead(200, "Connection is successful", {"Content-type": "text/html"});

    let fullpath = url.parse(req.url, true)
    const mood = fullpath.query.mood;
    let queries = fullpath.query;

    if (fullpath.pathname === "/") {
        fs.readFile('./html/home.html', (err, data) => {
            if (err) {
                res.write("<h1>Error reading HTML file.</h1>");
                res.end("Error");
            } else {
                res.write(data)
            }
            res.end();
        })

    } else if (fullpath.pathname === "/mood") {
        if (queries.mood === "sad") {
            fs.readFile('./html/sad.html', (err, sadData) => {
                if (err) {
                    res.write('<h1>Error reading sad.html!</h1>');
                    res.end("Error");
                } else {
                    res.end(sadData);
                }
            });

        } else {
            fs.readFile('./html/mood.html', (err, data) => {
                if (err) {
                    res.write("<h1>Error reading mood.html</h1>");
                    res.end("Error");
                } else {
                    res.end(data);
                }
            });
        }
       
    } else if (fullpath.pathname === "/dark") {
        console.log("Hi");
    } else if (fullpath.pathname === "/light") {
        console.log("hi");
    } else if (fullpath.pathname === "/dogs") {
        console.log("hi");
        res.write("Bob")
        res.end();
    }

}).listen(PORT, () => console.log(`Connecting on port ${PORT}`))

    const readFile = async (fileName) => {
        let data = await read(fileName);
    }