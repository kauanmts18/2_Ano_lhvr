const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("deu certo");
  res.render("home");
});

module.exports = router;
