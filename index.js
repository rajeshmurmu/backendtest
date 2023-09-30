require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/twitter", (req, res) => {
  res.send("You Now in twitter.");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at this website.");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
