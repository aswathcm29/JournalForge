const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: String,
  salt: String,
});

module.exports = mongoose.model("User", userSchema);
