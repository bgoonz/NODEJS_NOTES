const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Create Users</title></head>"); // Added closing </head> tag
    res.write(
      '<body><div>Welcome to challenge</div><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>',
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>"); // Added closing </head> tag
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>",
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
