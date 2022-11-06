const jsonWebToken = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey@123"; // TODO : set this key to the env variable.
const createUserToken = (payload = {}) => {
  return jsonWebToken.sign(payload, SECRET_KEY);
};

module.exports = {
  createUserToken,
};
