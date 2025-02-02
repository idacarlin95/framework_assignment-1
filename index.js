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
    const fave = fullpath.query.fave;
    const first = fullpath.query.first;
    const second = fullpath.query.second;

    if (fullpath.pathname === "/") {
        fs.readFile('./html/home.html', (err, data) => {
            if (err) {
                res.write("<h1>Error reading HTML file.</h1>");
                res.end("Error");
            } else {
                res.write(data)
            }
            res.end();
        });

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
       
    } else if (fullpath.pathname === "/story") {
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
                } else {
                    res.end(data);
                }
            });
        }
  
    } else if (fullpath.pathname === "/colors") {
        if (queries.name) {
            res.write(`<p>Hello is this working, ${name}?</p>`)  
        } if (queries.fave) {
            res.write(`<p>Your favourite color is ${fave}, and you hate both green & red!</p>`)
        } if (queries.colors === "red") {
            fs.readFile('./html/red.html', (err, data) => {
                if (err) {
                    res.write("<h1>Error reading html file</h1>")
                    res.write("Error");
                } else {
                    res.end(data);
                }
            }); 
        } if (queries.colors === "green") {
            fs.readFile('./html/green.html', (err, data) => {
                if (err) {
                    res.write("<h1>Error reading html file</h1>")
                    res.write("Error");
                } else {
                    res.end(data);
                }
            });
        } else {
            fs.readFile('./html/colors.html', (err, data) => {
                if (err) {
                    res.write("<h1>Error reading html file</h1>")
                    res.write("Error");
                } else {
                    res.end(data);
                }
            });
        }
        
    } else if (fullpath.pathname === "/animals") {
        res.write("<h1>This page is about animals</h1>");
        res.write("<p>Here you can read a story about two animals.</p>");
        res.write("<h2>Choose two animals!</h2>");
        res.write("<p>first=' '</p>");
        res.write("<p>second=' '</p>");
        if (first && second) {
            res.write(`<p>One day, a ${first} and a ${second} decided to race.</p>`);
            res.write(`<p>But ${first} got distracted, and ${second} got lost.</p>`);
            res.write(`<p>Somehow, the both ended up at the snack stand instead.</p>`);
            res.write(`<p>They called it a win-win and the ${first} and ${second} has been friend since!</p>`);
        } else {
            res.write("<p>Please choose TWO animals using ?first=animal1&second=animal2 in the URL.</p>");
        }
        res.end();
    }
    

}).listen(PORT, () => console.log(`Connecting on port ${PORT}`))

    const readFile = async (fileName) => {
        let data = await read(fileName);
    }