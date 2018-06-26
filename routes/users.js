var express = require('express');
var router = express.Router();
const {UsersModel} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//send me the users

// router.get(':/id', (req,res) => {
//   UsersModel.findById(req.params.id).then((user) => {
//     res.send({user})
//   }
// )})

module.exports = router;
