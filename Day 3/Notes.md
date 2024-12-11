- Middleware
  Middleware in Express is a function that has access to the request (req), response (res), and the next middleware function in the application’s request-response cycle. It allows to modify or process the request and response objects, execute code, handle errors, or even terminate the request-response cycle.

  Middleware functions are executed sequentially in the order they are defined in the Express application, with each middleware having the ability to either:
   - Call the next middleware in the stack using next()
   - Send a response to the client using, effectively ending the cycle

  - The order in which middleware functions are defined in the app impacts how they are executed.

- body-parser
  The body-parser middleware is used to parse the incoming request bodies in a middleware before route handlers.

- express.static()
  express.static() is a built-in middleware to serve static files like images, HTML files, JavaScript files, etc., directly from the file system. This middleware allows to map a directory to serve static files.

