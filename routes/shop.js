const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Home Page</h1>");
});

module.export = router;
