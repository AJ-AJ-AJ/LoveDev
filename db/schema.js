const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    username: String
})

const DeveloperSchema = new Schema({
    photo: String,
    firstName: String,
    lastName: String,
    description: String

})

