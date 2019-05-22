const http = require("http");

const data = require("./data/inventory.json");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/json" });
        res.end(JSON.stringify(data));
        break;
      case "/instock":
        {
          res.writeHead(200, { "Content-Type": "text/json" });
          let availData = data.filter(product => product.avail === "In stock");
          res.end(JSON.stringify(availData));
        }
        break;
      case "/onbackorder":
        {
          res.writeHead(200, { "Content-Type": "text/json" });
          let availData = data.filter(
            product => product.avail === "On backorder"
          );
          res.end(JSON.stringify(availData));
        }
        break;
      default:
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Error 404");
        break;
    }
  })
  .listen(3000);

console.log("Server listening on port 3000");
