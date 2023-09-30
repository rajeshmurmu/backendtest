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

app.get("/youtube", (req, res) => {
  res.send("<h2>Welcome to youtube</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
