const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    userId: Number,
    name: String,
    userName: String,
    lastName: String,
    dateBirth: String,
    password: String,
    registeredDate: String,
    role: String,
    email: String
})

module.exports = mongoose.model('Users',UserModel);