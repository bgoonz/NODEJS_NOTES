const http = require("http");

function rqListener(req, res) {}
// the createServer method will execute the rqListener function for every request
http.createServer(rqListener);
