var express = require('express');
var router = express.Router();
const {DeveloperModel} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
