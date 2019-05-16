const net = require("net"); // Server Code .
const server = net.createServer(socket => {
  console.log("Welcome to Echo Server\r\n");
  socket.on("data", chunk => {
    console.log(`this is from the client" ${chunk}`);

    socket.write(chunk);
  });
  socket.on("end", socket.end);
});
server.listen(3000, () => {
  console.log("server is up");
});
