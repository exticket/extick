var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Hagay Kassa"
  },
  {
    "id": 2,
    "name": "Megi Mentesnot"
  },
  {
    "id": 3,
    "name": "yakov avraham"
  }
];
  res.send(users);
});

module.exports = router;
