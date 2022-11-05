const express = require("express");
const { multerMiddleware } = require("../config/fileupload");
const { File } = require("../models/files");
const fileRouter = express.Router();

fileRouter.post("/upload", multerMiddleware.any(), (request, response) => {
  const files = request.files.map((file) => {
    return {
      filename: file.originalname,
      path: file.path,
      size: file.size,
      user: request.user._id,
    };
  });

  File.create(files)
    .then((files) => {
      response.status(201).json({ files });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json(error);
    });
});

fileRouter.get("/", async (request, response) => {
  const page = request.query.page || 1;
  const files = await File.find()
    .sort("-createdAt")
    .skip(10 * (page - 1))
    .limit(10)
    .select("-path");
  response.json({ files });
});

module.exports = {
  fileRouter,
};
