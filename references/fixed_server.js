const path = require('path');
const http = require('http');
const fs   = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        fs.readFile(path.join(__dirname, "/public", "index.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
        });
    }

    if(req.url === "/api/users") {
        users = [
            {
                "name": "John Doe",
                "age": 16
            },
            {
                "name": "Bob Smith",
                "age": 12
            }
        ];
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    }
});