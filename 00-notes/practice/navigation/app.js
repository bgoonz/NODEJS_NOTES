const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

app.use("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
});
app.listen(3000);
