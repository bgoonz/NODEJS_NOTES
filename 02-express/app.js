//core modules
const http = require("http");

//third party modules
const express = require("express");

//custom modules

// --------------------------CODE-------------------------

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In the next middleware");
    res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);

