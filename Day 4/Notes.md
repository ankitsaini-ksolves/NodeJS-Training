- MongoDB
  MongoDB is a document database. It stores data in a type of JSON format called BSON.

  Key feature:
  - No-SQL Document Based Database
  - Strong Support for Aggregation pipes
  - MongoDb allows dynamic, schema-less, data structures.
  - Utilizes indexes to speed up the query execution.

  It is consist of multiple collections and each collection has multiple documents.
    Student ---> Collection
    [
        {
            "name": "John"
            "age": "22"            -----> Document
            "address": {
                "city": "USA"
            }
        }
    ]

- Working of MongoDB
  The backend sends requests to the MongoDB server to establish a connection for read and write operations. Within the MongoDB server, the "Storage Engine" is responsible for interacting with the database to perform these read and write operations.
  Client --> Server --> MongoDB server --> Storage Engine --> Database

  Storage Engine converts the JSON Data to BSON
  IN MongoDB we write in JSON format only, but behind the scene data is stored in BSON(Binary JSON) format.
  By utilizing BSON mongoDB can achieve higher read and write speed, reduce storage requirement, and improved data manipulation capabilities.

  Note: We cann't see the database with command "show dbs" until the database contains at least one collection in it.

- MongoDB Atlas
  It is a MongoDB's fully managed cloud database service.
  Atlas supports global cluster, enabling databases to be deployed across multiple regions for better data availability and reduced latency.

  A cluster refers to a group of interconnected servers(nodes) that work together to store and manage data.



- Template Engines
  Template Engines are used to serve static or dynamic html files using JavaScript.
  The Express application generator uses Pug as its default.

  The set method is used to set the setting name to a value app.set(name, value).
  app.set('view engine', 'ejs') ----> Means use EJS as view engine or template engine
  And use res.render() to render the template, render by default to look in views folder, thus no need to give path.
  <%- ...  %> for create path link external files

- Multer
  Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in web applications. It processes incoming data that includes both files and other form fields (like text inputs).
  The main advantage of using Multer is that it automatically manages the file upload process, handling things like file storage and metadata extraction.

  Multer allows you to specify where and how the file should be stored. You can either save it to disk or store it in memory.
  Multer automatically provides information about the uploaded files 
  - multer.diskStorage():
    Method that configures how Multer will store the files, and it takes two functions as arguments: destination and filename.

    destination: Where the uploaded files will be saved
    filename: How the uploaded file will be named.

  - upload.single("file"):
    Multer middleware function that handles the file upload.
    It accepts one argument, which is the name of the form field where the file is uploaded.
    This middleware processes the incoming file, stores it in the specified location, and attaches metadata about the file to the req.file object.
  - req.file:
    After the file is uploaded, Multer attaches the file metadata to the req.file object,