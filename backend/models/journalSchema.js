const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title: {type: String, require: true, default: ""},
    description: {type: String, require: true, default: ""},
    author: {type: String, require: true, default: ""},
    image: {type: String, require: true, default: ""},
    journalContent: {type: String, require: true, default: ""},
    date: {type: Date, require: true, default: Date.now()},
    userName: {type: String, require: true},
})

const journalModel = mongoose.model('webathon-journal', journalSchema);

module.exports = {journalModel};