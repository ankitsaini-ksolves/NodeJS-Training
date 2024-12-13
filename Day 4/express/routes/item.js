const express = require("express");
const router = express.Router();

router.get("/items", (req, res) => {
  const items = ["Table", "Fan", "Chair", "Bed"];
  res.render("items", { items });
});


module.exports = router;