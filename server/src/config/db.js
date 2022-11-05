const mongoose = require("mongoose");

module.exports.createConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/fileUploadTask")
    .then(() => {
      console.log("Mongo DB Connection Created");
    })
    .catch((error) => {
      console.error(error.message);
    });
};
