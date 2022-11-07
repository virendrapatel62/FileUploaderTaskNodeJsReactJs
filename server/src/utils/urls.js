const jwt = require("jsonwebtoken");
const SECRET_KEY = "anySecretKey@123"; // TODO: It shoud be in env

const createTemporaryFileURL = (id) => {
  return jwt.sign(id, SECRET_KEY, {
    expiresIn: "50s", // TODO : valid for 5 seconds.
  });
};

const getFileFromToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

module.exports = {
  createTemporaryFileURL,
  getFileFromToken,
};
