- Cluster
  Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.
  Node.js uses an event-driven, non-blocking I/O model, running on a single thread but may struggle with CPU-intensive operations or high traffic on a single core.
  The cluster module allows to take advantage of multi-core systems by spawning multiple processes (workers) from a single Node.js application.
  Each worker is an independent process that shares the same codebase and listens on the same port.



- Rate limiting
  Rate limiting in Node.js is a technique used to control the number of requests a user can make to a server within a specific period.

  Token Bucket Stratiges
  This strategy has a store(bucket) which has tokens inside it and whenevr the request comes from the client it gives them a token from store(bucket) and send request to server and when all the tokens are utilized by the requests from client then we can either delay the other request or reject them until tokens are freed by the already using request.

  Advantage
  - Controlles how many user can access within give time.
  Disadvantage
  - A client can make use of all the tokens by sending multiple request and restrict other genuine user to wait to fullfill their request.

  Leaky Bucket
  - In this strategy all the request coming from client at any amount or rate first goes to the store or bucket then from store or bucket the request goes to the server in a controlled rate,  i.e. we can controll the rate of request to be sent to server like 5req/sec.


- Streams
  Streams are efficient way to handle reading or writing data in chunks, rather than loading the entire data into memory.
  The data is divided into smaller pieces called chunks. These chunks are temporarily stored in a buffer (a small piece of memory) before being processed.

  Node.js provides four main types of streams:
  - Readable: Streams from which data can be read (e.g., reading a file).
  - Writable: Streams to which data can be written (e.g., writing to a file).
  - Duplex: Streams that are both readable and writable (e.g., network sockets).
  - Transform: Streams that modify or transform data as it passes through (e.g., compressing data).


- req.body, req.params, req.query, 


- express.json();
  It enables the parsing of incoming JSON payloads in HTTP request bodies.

  Converts raw JSON data into a format the server can work with. Without this, we have to manually parse the JSON using libraries like body-parser or JSON.parse().

  By this we can access request data through req.body.
  It only parses requests with Content-Type: application/json header.

- express.urlencoded(): Parses URL-encoded payloads (e.g., key1=value1&key2=value2).


- Mongoose
  Mongoose is a library for Node.js. It is specifically designed to make it easier to work with MongoDB, which is a NoSQL database
  Mongoose adds a layer on top of MongoDB that
  - Allows us to define schema.
  - support middleware(pre and post hook)
  - To add validation


  Object Data Modeling (ODM) is a way to map the data in database to objects in the application code.

1. Find Query
   const {age} = req.params;
   const result = await User.find({age:{$gt:age}})

2. Projection
   const {age} = req.params;
   const result = await User.find({age:{$gt: 35}},'name email') 
  
3. Conditional Queries
   const {age} = req.params;
   const result = await User.find({$or:[
    {age:{$gt: 35}},
    {adress: "New York"}
    ]})

4. Aggregation
   Group users by their city and count the number of users in each city.

   User.aggregate([
    { $group: {_id: "city", count:{$sum: 1}}}
   ])

5. Text Search
   Retrieve users whose description contains the word "developer."

   User.find({description:{$regex: /developer/i }})

6. Updating Records
   Update the status of all users older than 35 to "Senior."

   User.updateMany({age: { $gt: 35}}, {$set: { status: "Senior"}})

7. Find and Modify
   Find a user by email and update their name, returning the updated document.

   const {mail} req.body;
   User.findOneAndUpdate(
    {email:mail}, 
    {$set:{name: req.body.name}}, 
    {$new: true}   // It return the updated document
    )

8. Middleware
   Implement a pre-save middleware

   userSchema.pre('save', async function (next) {

   })

9. Counting Documents
   Count the number of users with a specific status.

   User.countDocuments({status: "Active"})

10. Using $elemMatch
    Retrieve users who have a projects array containing a project with title equal to "MongoDB Tutorial" and status equal to "Completed."

    User.find({
      projects:{$elemMatch:{title:"MongoDB Tutorial", status: "Completed"}}
    })

- populate
  Allows to automatically replace references in documents with the actual documents they refer to.
  Use .populate when your Mongoose schema contains a field that references another schema.

  To populate sender field but only with the username.
  const populatedMessage = await message.populate("sender", "username");

1. $set
   Sets a value in a document. It is used to update specific fields without modifying the entire document.

2. $push
   Adds an element to an array field. If the field does not exist, it creates the array and then adds the element.
   Task.updateOne(
    { _id: taskId },
    { $push: { tags: "urgent" } } );

3. $each
   Used with $push to add multiple elements to an array.
   Task.updateOne( 
    {_id: taskId},
    {$push: {tags: {$each: ["urgent", "important"]}}}
   )

4. $pull
   Removes elements from an array that match a specified condition.
      Task.updateOne(
    { _id: taskId },
    { $pull: { tags: "urgent" } } );

5. $nin
   Matches values that are not in an array.

   Example: Find tasks that do not have specific tags:
   Task.find({ tags: { $nin: ["urgent", "priority"] } });

6. $all
   Matches documents where the array field contains all the specified elements.
   Task.find({ tags: { $all: ["urgent", "important"] } });

7. Updating Nested Arrays
   Use the positional operator $ to update elements in an array that match a condition.
   Task.updateOne(
    { _id: userId, "tasks._id": taskId },
    {
        $set: {
            "tasks.$.title": "Updated Task Title",
            "tasks.$.status": "In Progress",
        },
    }
);

8. $inc
   Increments the value of a field by a specified amount.

9. $unset
   Removes a field from a document
   Task.updateOne(
    {_id: taskId},
    {$unset: { status: "" } }
   )

10. $rename
   Renames a field.
   Task.updateOne(
    { _id: taskId },
    { $rename: { description: "details" } } );

- Schema
  A Schema is a blueprint or structure that defines how data is organized in a MongoDB collection. It defines the fields, their types, default values, and other configurations for documents in the collection.

- Model
  A Model is a constructor function that is created from the schema. It provides the interface through which we can interact with the MongoDB collection. The model is used to create, read, update, and delete documents in the database.










