const http = require("http");
const fs = require("fs");

let server = http
  .createServer((request, response) => {
    if (request.url === "/") {
      fs.readFile("./public/index.html", "utf8", (err, html) => {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "html" });
        response.end(html);
      });
    } else if (request.url.match(/.css$/)) {
      let cssPath = path.join(__dirname, "public", request.url);
      let fileStream = fs.createReadStream(cssPath, "utf8");

      response.writeHead(200, { "Content-Type": "text/plain" });
      fileStream.pipe(response);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 File not found");
    }
  })
  .listen(3000);

console.log("Server listening on port 3000");
