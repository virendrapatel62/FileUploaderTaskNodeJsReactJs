const mongoose = require("mongoose");
const { User } = require("./user");
// originalname,
//           mimetype,
//           filename,
//           path,
//           size,
const fileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  originalname: {
    type: String,
    require: true,
  },
  mimetype: {
    type: String,
    require: true,
  },
  filename: {
    type: String,
    require: true,
  },
  path: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = {
  File,
};
