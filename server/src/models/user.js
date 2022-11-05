const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      unique: true,
      type: String,
      require: true,
    },
    displayName: {
      type: String,
      require: true,
    },
    photoURL: {
      type: String,
      require: true,
    },
    uid: {
      unique: true,
      type: String,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
