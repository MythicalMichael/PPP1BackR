var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next)=> {
  res.json( "data");
});


router.get("/hello",(req, res, next)=> {
  res.send("SECRET PAGE");
});

module.exports = router;
