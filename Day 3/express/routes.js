const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

router.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

module.exports = router;
