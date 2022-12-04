var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("got bird list");
});

module.exports = router;