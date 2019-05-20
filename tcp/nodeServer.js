const net = require("net");
const uuidv4 = require("uuid/v4");

let clients = [];

let server = net
  .createServer(client => {
    client.write("Hello! Welcome to the chat room! ");
    let newId = uuidv4();
    clients.push({ id: newId, client: client });
    client.write(`your id is: ${newId}`);
  })
  .listen(5000);

console.log("listening on port 5000");
