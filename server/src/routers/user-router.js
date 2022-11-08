const express = require("express");
const { User } = require("../models/user");
const userRouter = express.Router();

// api/users
userRouter.get("/", async (request, response) => {
  const users = await User.find();

  response.json({
    users,
  });
});

module.exports = {
  userRouter,
};
