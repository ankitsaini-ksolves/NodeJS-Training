- NodeJS
  NodeJS is a runtime environment for JavaScript built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, creating server-side applications with JavaScript.
  NodeJS is mostly used for API

  We can interact with the operating system, access the file systems, and read and write to the files.

- Node.js REPL
  REPL in Node.js stands for Read-Eval-Print Loop. It is an interactive shell or console that allows developers to execute JavaScript code in a real-time environment, making it ideal for testing and debugging.
  _ stores the result of the last evaluated expression.

- Modules
  Modules are reusable blocks of code that encapsulate specific functionality.
  The require() function is used to load modules in Node.js. It supports loading core modules, user-defined modules, and third-party modules.
  Modules export objects, functions, or variables using module.exports or exports.

  - It loads the core module, immediately.
  - For a user-defined module, it resolves the path (e.g., ./module.js).
  - For third-party modules, it looks in the node_modules folder.

- Global objects
  In Node.js, global objects are objects that are available in all modules without the need to import or require them.

  - Variables attached to global are accessible anywhere in the application.

- Event Loop
  The Event Loop is a fundamental concept in Node.js that enables non-blocking, asynchronous programming. It is responsible for handling and coordinating operations like I/O, timers, and callbacks, allowing Node.js to perform efficiently even with a single-threaded architecture.
  The event loop has several phases:

  Timers Phase:
  Executes callbacks for setTimeout and setInterval.

  Pending Callbacks Phase:
  Executes I/O-related callbacks that were deferred from the previous cycle.

  Idle, Prepare Phase:
  Internal use by Node.js for managing the event loop.

  Poll Phase:
  Retrieves new I/O events.
  Executes callbacks for completed I/O operations.

  Check Phase:
  Executes callbacks scheduled by setImmediate.

  Close Callbacks Phase:
  Executes close event callbacks, such as socket.on('close').

  Promises (then callbacks) and other microtasks (e.g., process.nextTick) are executed immediately after the current operation, then setImmediate callbacks are executed during the Check Phase, and they are prioritized over timers if they are queued in the same cycle.
