const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeveloperSchema = new Schema({
    photo: String,
    firstName: String,
    lastName: String,
    description: String

})

const UsersSchema = new Schema({
    username: String,
    developers: [DeveloperSchema]
})



const UsersModel = mongoose.model('User',UsersSchema)
const DeveloperModel = mongoose.model('Developer',DeveloperSchema)

module.exports = {
    UsersModel,
    DeveloperModel
  }