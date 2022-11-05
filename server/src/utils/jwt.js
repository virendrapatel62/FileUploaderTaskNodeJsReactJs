const jwt = require("jsonwebtoken");
const SECRET_KEY = "anySecretKey@123"; // TODO: It shoud be in env

const createTokenForUser = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

const verifyUserToken = (token = "") => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

module.exports = {
  createTokenForUser,
  verifyUserToken,
};
