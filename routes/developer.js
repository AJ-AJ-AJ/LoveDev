var express = require('express');
var router = express.Router({ mergeParams: true });
const {DeveloperModel} = require('../db/schema')
const {UsersModel} = require('../db/schema')


//GET ALL DEVS
router.get('/', function(req, res, next) {
  console.log("USER PARAM", req.params.userId)
  UsersModel.findById(req.params.userId)
  .then((user)=>{
    console.log("USER FROM GET ROUTE", user)
    res.send({
      developers: user.developers
    })
  })
});


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
// router.delete('/:id', async (req,res) => {
//   const user = await UsersModel.findById(req.params.userId)
//   user.developers.id(req.params.id).remove()
//   const savedUser = await user.save()
//   res.send({
//     user: savedUser
//   })
// })
router.delete('/:id', (req,res)=>{
  Users.findByIdAndRemove(req.params.id)
  .then((oneUser)=>{
    res.send('Deleted')
  })
})
module.exports = router
