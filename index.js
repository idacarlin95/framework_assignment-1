const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 3001;

http.createServer((req,res) => {
    res.writeHead(200, "Connection is successful", {"Content-type": "text/html"});

    let fullpath = url.parse(req.url, true)
    let queries = fullpath.query;
    const mood = fullpath.query.mood;
    const name = fullpath.query.name;
    const food = fullpath.query.food;
    const hobby = fullpath.query.hobby;

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
        if (fullpath.query.theme === "dark") {
            res.write('<body style="background-color: #000; color: white;"></body>')
        } if (queries.name) {
        res.write(`<p>Here are some tips for you, ${name}</p>`);

        } if (queries.mood === "sad") {
            fs.readFile('./html/sad.html', (err, sadData) => {
                if (err) {
                    res.write('<h1>Error reading sad.html!</h1>');
                    res.end("Error");
                } else {
                    res.end(sadData);
                }
            }); 

        } else if (queries.mood === "happy") {
            fs.readFile('./txt/happy.txt', (err, data) => {
                if (err) {
                    res.write('<h1>Error reading text file.</h1>');
                    res.end("Error");
                } else {
                    res.end(data);  
                }
            });

        } else {
            fs.readFile('./html/mood.html', (err, data) => {
                if (err) {
                    res.write("<h1>Error reading html file</h1>");
                    res.end("Error");
                } else {
                    res.end(data);
                }
            });
        }
       
    } else if (fullpath.pathname.includes("/story")) {
        if (fullpath.query.name) {
            res.write(`<p>Your name is ${name}</p>`);
        } if (queries.food) {
            res.write(`<p>Your favorite food is ${food}</p>`);
        } if (queries.hobby) {
            res.write(`<p>Your favorite hobby is ${hobby}`);
        } else {
            fs.readFile('./html/story.html', (err, data) => {
                if (err) {
                    res.write("<h1>Error reading html file</h1>");
                    res.write("Error");
                } /// Countinue
            })
        }

        res.end();

        
        
    } else if (fullpath.pathname === "/light") {
        console.log("hi");
    } else if (fullpath.pathname === "/dogs") {
        console.log("hi");
        res.write("Bob & Qvintus")
        res.end();
    }

}).listen(PORT, () => console.log(`Connecting on port ${PORT}`))

    const readFile = async (fileName) => {
        let data = await read(fileName);
    }