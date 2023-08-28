var express = require("express");
var app = express();

app.get("/addUser", function (req, res) {
  res.send("Hello World!");
});
