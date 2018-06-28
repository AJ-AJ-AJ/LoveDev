var express = require('express');
var router = express.Router();
const {UsersModel} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  UsersModel.find()
  .then((user)=>{
    res.send({user})
  })
});

//send me the users

router.get('/:id', (req,res) => {
  UsersModel.findById(req.params.id).then((user) => {
    res.send({user})
  }
)})

router.post('/', (req,res) => {
  const newUser = new UsersModel(req.body)
  newUser.save()
  .then((user) => {
    res.send(user)
  })
})

router.put('/:id', async (req,res) => {
  
})

module.exports = router;
