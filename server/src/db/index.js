const mongoose = require("mongoose");

const createConnection = (successCallback, errorCallback) => {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then(() => {
      typeof successCallback === "function" && successCallback();
    })
    .catch((error) => {
      console.log(error);
      typeof errorCallback === "function" && errorCallback();
    });
};

module.exports = {
  createConnection,
};
