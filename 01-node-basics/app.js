const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  const url = request.url;

  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>My First Page</title></head>");
    response.write(
      "<body><form action='/message' method='POST'><input type='text'></input><button type='submit></button></form></body>"
    );
    response.write("</html>");
    response.end();
  }
  response.write("<html>");
  response.write("<head><title>My First Page</title></head>");
  response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  response.write("</html>");
  response.end();
});

server.listen(3000);
