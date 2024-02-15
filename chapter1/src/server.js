const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world from express !");
}); // Add a closing parenthesis here

module.exports = app;
