const path = require('path');
const http = require('http');
const fs   = require('fs');


const server = http.createServer((req, res) => {

    //build file path

    let filePath = path.join(__dirname, "/public", 
    req.url === "/" ? "index.html" : req.url);


    //file extension
    let extname = path.extname(filePath);

    let contentType = "text/html";
    //check extension 
    switch(extname){
        case ".js":
            contentType = "text/javascript";
            break;
        case ".html":
            contentType = "text/html";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
    }

    //read file
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            if(err.code == "ENOENT"){
                fs.readFile(path.join(__dirname, "/public", "404.html"), "utf-8", (err, content) => {
                    if(err) throw err;
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(content);
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
        
    })
        
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));