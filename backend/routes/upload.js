const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.post("/upload", (req, res, next) => {
  console.log("Invoked");
});
