const mongoose = require("mongoose");
const { createTemporaryFileURL } = require("../utils/urls");
const { User } = require("./user");

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      require: true,
    },
    path: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: User,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: {
      virtuals: true,
    },
  }
);

const File = mongoose.model("File", fileSchema);

module.exports = {
  File,
};
