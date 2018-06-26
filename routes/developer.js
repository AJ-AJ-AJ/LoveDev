var express = require('express');
var router = express.Router();
const {DeveloperModel} = require('../db/schema')
const {UsersModel} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//CRUD FOR ADDING DEVELOPER INSPIRATION

//CREATE
router.post('/', (req,res) => {
  UsersModel.findById(req.params.userId)
  .then((user) => {
    const newDeveloper = new DeveloperModel(req.body)
    user.ideas.push(newDeveloper)
    return user.save()
  })
  .then((savedUser) => {
    res.send({
      user: savedUser
    })
  })
})

//UPDATE

//DELETE

module.exports = router;
