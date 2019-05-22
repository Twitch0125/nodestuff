const http = require("http");
const path = require("path");
const fs = require("fs");

let server = http
  .createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    if (req.url === "/") {
      fs.readFile("./public/index.html", "UTF-8", (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url.match(/.css$/)) {
      let cssPath = path.join(__dirname, "public", req.url);
      let fileStream = fs.createReadStream(cssPath, "utf8");
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
    } else if (req.url.match(/.jpg$/)) {
      let jpgPath = path.join(__dirname, "public", req.url);
      let fileStream = fs.createReadStream(jpgPath);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fileStream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 File not found");
    }
  })
  .listen(3000);

console.log("Server listening on port 3000");
