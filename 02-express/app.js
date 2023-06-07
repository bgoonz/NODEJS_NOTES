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
  next();
});

const server = http.createServer(app);

server.listen(3000);
