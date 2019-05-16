const fs = require("fs");
const readableStream = fs.createReadStream("data.txt");
const WritableStream = fs.createWriteStream("data2.txt");
readableStream.pipe(WritableStream);
console.log("Come and Go, Pip Stream ended");
