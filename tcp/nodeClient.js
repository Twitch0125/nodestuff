const net = require("net");
process.stdin.setEncoding("utf8");
const client = net.createConnection({ port: 5000 }, () => {
  console.log("connected");
});
client.setEncoding("utf8");
client.on("data", data => {
  console.log(data);
});
process.stdin.on("readable", () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});
