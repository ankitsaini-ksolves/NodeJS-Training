const express = require("express");
const path = require("path");
const itemRoutes = require('./routes/item')
const formRoutes = require("./routes/form");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Set EJS as the view engine
app.set("view engine", "ejs");


app.use("/api", itemRoutes);
app.use("/", formRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

