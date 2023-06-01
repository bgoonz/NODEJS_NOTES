# NodeJS

**Main Core Modules**

- http - create a web server, send requests, etc.
- https - create a secure web server, send requests, etc.
- fs - file system, read/write files, etc.
- path - path to files, etc.
- os - operating system, etc.

**http.createServer()** - create a web server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});
```

**server.listen()** - listen to a port

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
```

- the server.listen() method takes a port number as an argument and will keep the server running while it listens for requests on that port number.

**Node.js Program Lifecycle**

- Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks.

- the **Event Loop** is a single thread that performs all I/O operations asynchronously.

- The function we pass to createServer is an event listener, and the server object will emit events when a request is made, but it will not execute the event listener function right away. Instead, it will wait for the event loop to be free, and then it will execute the event listener function.

`process.exit();` - exit the event loop... this is not recommended, but it is possible, and will terminate the program.

`response.setHeader( "Content-Type", "text/html" );` - set the header of the response, this represents the type of data that is being sent back to the client.

`response.write( "<h2> Hello </h2>" );` - write data to the response, this is the data that will be sent back to the client.

`response.end();` - end the response, this will send the response back to the client.

**Complete Code To Send Basic HTML to Client**

```js
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>My First Page</title></head>");
  response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  response.write("</html>");
  response.end();
});

server.listen(3000);
```

> Shortcut to open developer tools in Chrome: `Ctrl + Shift + I`

> How to view the request in the network tab of the developer tools in Chrome:
> ![developer tools network tab](./0-images/2023-06-01-12-24-14.png)

- as you can see there are some default headers set by the browser in addition to the headers we set in our code.

- If we view the response we see the response body is

```html
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello from my Node.js Server!</h1>
  </body>
</html>
```

[Available Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

**GET Requests** - GET requests are the most common type of request, and they are used to fetch data from a server.

**POST Requests** - POST requests are used to send data to a server.

**PUT Requests** - PUT requests are used to send data to a server to create or update a resource.

**DELETE Requests** - DELETE requests are used to delete a resource from a server.

**PATCH Requests** - PATCH requests are used to update a resource.

**OPTIONS Requests** - OPTIONS requests are used to fetch information about a server.
