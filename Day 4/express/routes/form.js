const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});


router.get("/", (req, res) => {
  res.render("form");
});

router.post("/submit", upload.single("file"), (req, res) => {
  const userInput = req.body;

  if (req.file) {
    userInput.file = {
      originalName: req.file.originalname,
      path: `/uploads/${req.file.filename}`,
    };
  }

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;

    const parsedData = data ? JSON.parse(data) : [];

    parsedData.push(userInput);

    fs.writeFile("data.json", JSON.stringify(parsedData, null, 2), (err) => {
      if (err) throw err;
      res.redirect("/display");
    });
  });
});


router.get("/display", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;

    const parsedData = data ? JSON.parse(data) : [];
    res.render("display", { data: parsedData });
  });
});

module.exports = router