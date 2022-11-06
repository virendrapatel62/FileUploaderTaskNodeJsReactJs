const express = require("express");
const { User } = require("../models/user");
const { createUserToken } = require("../utils/jwt");

// base URL : /api/auth
const authRouter = express.Router();

// /api/auth/test
authRouter.get("/test", (request, response) => {
  response.json({
    message: "Auth Router is Working...",
  });
});

// api/auth/sucsess
authRouter.post("/success", async (request, response) => {
  console.log(request.body);

  try {
    let user = await User.findOne({ email: request.body.email });
    if (!user) {
      user = await new User({
        ...request.body,
      }).save();
    }

    const token = createUserToken({
      uid: user.uid,
      _id: user._id,
    });

    response.json({
      message: "Login Success",
      accessToken: token,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      meta: error,
    });
  }
});

module.exports = {
  authRouter,
};
