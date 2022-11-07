const { getPayloadFromToken } = require("../utils/jwt");

module.exports.authMiddleware = (request, response, next) => {
  const token = request.headers.authorization;
  const payload = getPayloadFromToken(token);
  if (!payload) {
    return response.status(401).json({
      message: "please login",
    });
  }

  request.user = payload;
  next();
};
