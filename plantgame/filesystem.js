const fs = require("fs");
const path = require("path");

// const fileToRead = process.argv[2];
// const fileToWrite = process.argv[3];

// fs.readdir(".", (err, files) => {
//   if (err) throw err;
//   let fileArr = files.filter(item => item == fileToRead);
//   if (fileArr.length === 0) {
//     console.log("file not found");
//     throw "you messed up"
//   }
//   console.log(fileArr, "file found");

//   fs.readFile(fileArr[0], "utf8", (err, data) => {
//     if (err) throw err;
//     console.log("data found");
//     let baconRegex = /(^|\s)bacon[.!?,\s]/gi;
//     console.log(data.match(baconRegex).length, "bacons found");
//     let newData = data.replace(baconRegex, "tasty");
//     fs.writeFile(fileToWrite, newData, err => {
//       if (err) throw err;
//       console.log("Wrote to file! :)");
//     });
//   });
// });

// fs.stat("./docs", fs.constants.F_OK, err => {
//   console.log(err ? "it aint there" : "holy moly I found it!");
// });

// fs.readdir("./docs", (err, files) => {
//   if (err) throw err;
//   console.log("here are all of the files in /docs :", files);
//   files.forEach(file => {

//     fs.readFile(file, "utf8", (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   });
// });

let stream = fs.createWriteStream("sayings.txt");

process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  if (data.toLowerCase().trim() === "exit") {
    stream.close();
    process.exit();
  } else {
    stream.write(data);
  }
});
