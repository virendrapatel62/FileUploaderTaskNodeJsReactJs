const { verifyUserToken } = require("../utils/jwt");

module.exports.authMiddleware = (request, response, next) => {
  const token = request.headers.authorization;
  const payload = verifyUserToken(token);

  if (payload) {
    request.user = payload;
    return next();
  }

  return response.status(403).send();
};
