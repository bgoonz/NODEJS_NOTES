//core modules
const http = require("http");

//third party modules
const express = require("express");
const bodyParser = require("body-parser");
//custom modules

// --------------------------CODE-------------------------

const app = express();


app.use(bodyParser.urlencoded({extended: false}));




app.listen(3000);
