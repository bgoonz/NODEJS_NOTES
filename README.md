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

> In the example below:

```js
response.write(
  "<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit></button></form></body>"
);
```

- The `name` set on the input does not have to be `message` , it will add any input data to the request and make it accessible via the assigned name.
- the form action is set to `/message` which means that when the form is submitted, the data will be sent to the `/message` route.

##### Streams & Buffers

- Streams are a way to read data from a source or write data to a destination in a continuous fashion, they break the data up into chuncks so we can start operating on some of the data while the rest is still streaming in.
- Buffers are a way to temporarily store data in a stream.
- Streams are used to read or write data in chunks, and they are used to handle large amounts of data in a memory-efficient way.
- A buffer is a data structure that allows you to hold multiple chuncks of a stream in memory and operate on them.

**In the following code**

```js
const parsedBody = Buffer.concat(body).toString();
```

- the `Buffer` object is available globally in Node.js, and it is used to construct a buffer from an array of chuncks.

In the code below:

```js
req.on("end", () => {
  const parsedBody = Buffer.concat(body).toString();
  console.log(parsedBody);
  //parsedBody: message=Hello+all
  const message = parsedBody.split("=")[1].replace(/\+/g, " ");
  //here the write file sync exicutes after the code that comes after it.
  fs.writeFileSync("message.txt", message);
});
```

- the annonymous function passed to the `req.on()` method is an event listener, and it will be executed when the `end` event is emitted.

- When the code reaches req.on it registers the event listeners but doesn't exicute the code in them until the event is emitted.


**Blocking & Non-Blocking Code**

- **Blocking code**, also known as synchronous code, executes one operation at a time and blocks further execution until the current operation is completed. When a blocking operation is encountered, the code pauses until the operation finishes, and during this time, the entire program is essentially "blocked" from executing other tasks.


- **Non-blocking code**, also known as asynchronous code, allows multiple operations to be executed concurrently without blocking the execution of the entire program. Instead of waiting for an operation to complete, non-blocking code delegates the task to another component (e.g., the operating system or a callback function) and continues executing other tasks.

**fs.writeFile vs fs.writeFileSync:** 

- `fs.writeFile` is an asynchronous function that allows you to write data to a file. It takes the file path, data to be written, an optional encoding (default is UTF-8), and a callback function that will be invoked once the operation is completed. Here's an example:

```js
const fs = require('fs');

fs.writeFile('file.txt', 'Hello, world!', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data written to file.txt');
});
```


`fs.writeFileSync`, on the other hand, is a synchronous function that writes data to a file. It takes the file path, data to be written, and an optional encoding. Unlike fs.writeFile, it doesn't require a callback function and returns undefined. Here's an example:

```js
const fs = require('fs');

try {
  fs.writeFileSync('file.txt', 'Hello, world!', 'utf8');
  console.log('Data written to file.txt');
} catch (err) {
  console.error(err);
}
```

The choice between `fs.writeFile` and `fs.writeFileSync` depends on the requirements of your application. If you need to perform other tasks or handle other events while the file is being written, then `fs.writeFile` is recommended because it is non-blocking and allows your code to continue executing. On the other hand, if writing the file is a critical operation and you want to ensure it completes before moving on, `fs.writeFileSync` can be used, but be aware that it will block the execution of further code until the file write is finished.



