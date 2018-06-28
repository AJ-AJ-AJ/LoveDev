var express = require('express');
var router = express.Router({ mergeParams: true });
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
  const editDeveloper = user.developers.id(devId)
  editDeveloper.photo = req.body.photo
  editDeveloper.firstName = req.body.firstName
  editDeveloper.lastName = req.body.lastName
  editDeveloper.description = req.body.description

  const savedUser = await user.save()
  res.send({
    user:savedUser
  })
})

//DELETE
router.delete('/:id', async (req,res) => {
  const user = await UsersModel.findById(req.params.userId)
  user.developers.id(req.params.id).remove()
  const savedUser = await user.save()
  res.send({
    user: savedUser
  })
})

module.exports = router
