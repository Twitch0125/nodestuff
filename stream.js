// const stream = require('stream');
// reduce memory usage, increase tiem efficiency

// 4 type of streams:
// Writable – use it to write out data (for example, fs.createWriteStream()).
// Readable – use it to read data (for example, fs.createReadStream()).
// Duplex – streams that are both Readable and Writable (for example, net.Socket).
// Transform – use it to modify or transform the data as it is written or read

const fs = require("fs");
let data = "";
const readableStream = fs.createReadStream("data.txt");
readableStream.setEncoding("UTF8");
readableStream.on("data", chunk => {
  data += chunk;
  console.log("reading");
});
readableStream.on("end", () => {
  console.log("done reading");
  console.log(data);
});
readableStream.on("error", err => {
  console.log(err.stack);
});
console.log("Done with readableStream");

const WritableStream = fs.createWriteStream("write.txt");
WritableStream.write(data, "UTF8");
WritableStream.end();
WritableStream.on("finish", function() {
  console.log("Writing completed: data has been flushed to the file");
});
WritableStream.on("error", function(err) {
  console.log(err.stack);
});
console.log("Done with all Streaming");
