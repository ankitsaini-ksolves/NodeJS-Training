- File System (fs) Module
  The fs module allows to perform operations on files and directories.

  fs.readFile: Asynchronously reads the content of a file.
  fs.readFileSync: Reads file content synchronously.
  fs.writeFile: Asynchronously writes data to a file, creating it if it doesn't exist.
  fs.writeFileSync: Synchronously writes data to a file.
  fs.appendFileSync: Synchronously append the data to a file, instead of overwriting the content.
  fs.copyFileSync: Make copy the file.

  Synchronous calls of read and write returns the result but Asynchronous doesn't written anything.

- Path Module
  The path module provides utilities for working with file and directory paths.

  - path.join():
    Joins all given path segments into a single path string.
    Resolves .. and . segments but does not resolve the path to an absolute one unless the first segment is absolute.

  - path.resolve():
    Resolves a sequence of paths into an absolute path.
    If the first path segment is not absolute, path.resolve() uses the current working directory as the starting point.

- Callback
  A function passed as an argument to another function.

  - Callback Hell (Pyramid of Doom)
    Nested Callback stacked below one another forming a pyramid structure.

- Promise
  A promise is an object representing the eventual completion or failure of an asynchronous operation. It has 3 states pending, resolve, reject.
  promise.then((res)=>{})
  promise.catch((err)=>{})
  fs module provides a Promise-based API in fs.promises.

- async/await
  Makes asynchronus programming simple
  aync function always return a promise.
  await pauses the execution of its surroundingds async function until the promise is settled.
  await uses only inside the async function

- Working of NodeJs
  NodeJs is consists of v8(c++,JS) and LibUV(Eventloop + Thread pool), a library with a focus on asynchronous I/O.
  Each request goes to the event queue if it is non-blocking it gets executed immediately and if its blocking then it moves to threadpool by event loop and worker/thread is assigned to that request.

- HTTP Module
  It is used to create HTTP servers and handle HTTP requests and responses. It is built into Node.js and provides a simple API for handling web-based communications.

  - The server listens for HTTP requests on a specified port and processes them.
  - The req (request) object contains details of the incoming request, such as the HTTP method, URL, and headers.
  - The res (response) object is used to send data back to the client, including setting HTTP status codes and response headers.

- Express
  Express.js is a web application framework for Node.js. It provides a robust set of features to build web and mobile applications efficiently.

  - It simplifies the process of creating routes for handling different HTTP methods and endpoints.
  - Allows the use of middleware functions to handle requests, responses, and errors efficiently.
  - Integrates with templating engines (like EJS, Pug) to render dynamic HTML pages.
  - Supports the creation of modular applications by organizing routes and middleware into separate files.
