const net = require("net"); // Client Code  .
const client = net.createConnection({ port: 3000 }, () => {
  // once connected .
  console.log("connected to server!");
  client.write("1 ... Anyone there!\r\n");
  client.write("2 ... What did you say!\r\n");
});
client.on("data", data => {
  console.log("Msg from server:" + data.toString());
  client.end();
});
client.on("end", () => {
  console.log("End of Message");
});
