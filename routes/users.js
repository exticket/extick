var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Hagay Kassa"
  },
 ];
  res.send(users);
});

module.exports = router;
