var express = require('express');
var router = express.Router();
const {DeveloperModel} = require('../db/schema')
const {UsersModel} = require('../db/schema')


//CRUD FOR ADDING DEVELOPER INSPIRATION

//CREATE
router.post('/', (req,res) => {
  UsersModel.findById(req.params.userId)
  .then((user) => {
    const newDeveloper = new DeveloperModel(req.body)
    user.developers.push(newDeveloper)
    return user.save()
  })
  .then((savedUser) => {
    res.send({
      user: savedUser
    })
  })
})

//UPDATE
router.patch('/:id', async (req,res) => {
  const user = await UsersModel.findById(req.params.userId)

  const devId = req.params.id
})

//DELETE

module.exports = router;
