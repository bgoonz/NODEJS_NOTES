//core modules
const http = require("http");

//third party modules
const express = require("express");

//custom modules

// --------------------------CODE-------------------------

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("add product middleware");
  res.send("<h1>Add product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the home page middleware");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
