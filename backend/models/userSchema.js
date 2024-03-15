const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true},
})

const userModel = mongoose.model('webathon-user', userSchema);

module.exports = {userModel};