const express = require("express");
const multer = require("multer");

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
fileRouter.get("/", (request, response) => {
  response.json({
    message: "Files Router is Working...",
  });
});

// api/files/upload
fileRouter.post(
  "/upload",
  fileUploadMiddleware.any(),
  async (request, response) => {
    console.log(request.headers);

    response.json({
      message: "Uploading File...",
      files: "File....",
    });
  }
);

module.exports = {
  fileRouter,
};
