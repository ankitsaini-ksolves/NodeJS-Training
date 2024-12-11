const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

app.use(express.static("public"));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
