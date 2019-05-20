const net = require("net");
const uuidv4 = require("uuid/v4");
const fs = require("fs");
let randomName = require("random-name");
process.stdin.setEncoding("utf8");
let clients = [];
const serverStuff = fs.createWriteStream("server.log");

function log(data) {
  serverStuff.write(data, "UTF8");
}

let server = net
  .createServer(client => {
    client.write("Hello! Welcome to the chat room! ");
    let newId = uuidv4();
    let newName = randomName();
    clients.forEach(currClient => {
      currClient.client.write(`new dude: ${newName}`);
      log(`new dude: ${newName}`);
    });
    clients.push({ id: newId, client: client, name: newName });
    client.write(`your id is: ${newId}\n your name is: ${newName}\n\n`);
    client.on("data", data => {
      clients.forEach(currClient => {
        if (currClient.client != client) {
          currClient.client.write(`${newName}: ${data}`);
          log(`${newName}: ${data}`);
        }
      });
    });
    client.on("close", (client, err) => {
      if (err) {
        return console.log("whoopsie");
      }
      clients = clients.filter(currClient => currClient.client != client);
      clients.forEach(currClient => {
        currClient.client.write(`${newName} has fled the server`);
        log(`${newName} has fled the server`);
      });
    });
  })
  .listen(5000);
console.log("listening on port 5000");
