const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  photoURL: {
    type: String,
    require: false,
  },
  uid: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
