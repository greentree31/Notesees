const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/npm sindex.html"));
});

module.exports = router;
