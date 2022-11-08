const multer = require("multer");
const fs = require("fs/promises");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("uploads")
      .then(() => {
        cb(null, "uploads");
      })
      .catch(() => {
        cb(null, "uploads");
      });
  },
  filename: function (req, file, cb) {
    const name = `${new Date().toISOString()}_${file.originalname}`;
    cb(null, name);
  },
});

const multerMiddleware = multer({
  storage: storage,
});

module.exports.multerMiddleware = multerMiddleware;
