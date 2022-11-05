const express = require("express");
const { User } = require("../models/user");
const { createTokenForUser } = require("../utils/jwt");
const loginRouter = express.Router();

// api/login/success : POST
loginRouter.post("/success", async (request, response) => {
  let user = await User.findOne({ email: request.body.email });
  if (!user) {
    user = await new User({
      ...request.body,
    }).save();
  }

  const token = createTokenForUser({
    _id: user._id,
    uid: user.uid,
  });

  return response.json({ message: "success", token });
});

module.exports = {
  loginRouter,
};
