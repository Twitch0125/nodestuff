const https = require("https");
const fs = require("fs");

let options = {
  hostname: "en.wikipedia.org",
  port: "443",
  path: "/wiki/George_Washington",
  method: "GET"
};

let request = https.request(options, response => {
  let responseBody = "";
  console.log("response from server started");
  console.log(`server status: ${response.statusCode}`);
  console.log(`Response Headers: %j`, response.headers); //%j will stringify JSON

  response.setEncoding("utf8");

  response.once("data", chunk => {
    console.log(chunk);
  });

  response.on("data", chunk => {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  response.on("end", () => {
    fs.writeFile("george-washington.html", responseBody, err => {
      if (err) throw err;
      console.log("file downloaded");
    });
  });
});

request.end();
