const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
}, {timestamp: true});

module.exports = mongoose.model("User", userSchema)
