var express = require("express");
const multer = require("multer");
var router = express.Router();

const fs = require("fs");

const { promisify } = require("util");

const pipeline = promisify(require("stream").pipeline);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const upload = multer();

router.post("/upload", upload.single("file"), async (req, res, next) => {
  const {
    file,
    body: { name },
  } = req;

  const fileName = name + Date.now() + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../public/images/${fileName}`)
  );
  res.send("file uploaded as " + fileName);
});

module.exports = router;
