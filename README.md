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
