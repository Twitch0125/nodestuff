var express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
var app = express();
app.use(express.static("public")); //makes it so you don't have to do app.get for everything. Just put files you want public in the public folder.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/recipe.txt", "utf8", err => {
    if (err) throw err;
  });
});

app.post("/saveUser", (req, res) => {
  let reqBody = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    timestamp: Date()
  };
  users.push(reqBody);
  for (property in reqBody) {
    console.log(reqBody[property]);
  }
  fs.writeFile("user.txt", JSON.stringify(reqBody), err => {
    if (err) throw err;
    console.log("file saved");
  });

  console.log("saved");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
