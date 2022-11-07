const express = require("express");
const multer = require("multer");
const { getPayloadFromToken } = require("../utils/jwt");
const { File } = require("../models/file");
const e = require("express");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const name = `${Date.now()}_${file.originalname}`;
    cb(null, name);
  },
});

const fileUploadMiddleware = multer({ storage: storage });

// base URL : /api/files/
const fileRouter = express.Router();

// /api/files :
// TODO : return all the files
fileRouter.get("/", async (request, response) => {
  const files = await File.find();
  response.json({
    files,
  });
});

// api/files/upload
fileRouter.post(
  "/upload",
  fileUploadMiddleware.any(),
  async (request, response) => {
    const userId = request.user._id;
    const files = request.files.map(
      ({ originalname, mimetype, filename, path, size }) => {
        return {
          user: userId,
          originalname,
          mimetype,
          filename,
          path,
          size,
        };
      }
    );

    File.create(files)
      .then((result) => {
        response.json({ files: result });
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  }
);

module.exports = {
  fileRouter,
};
