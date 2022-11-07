const express = require("express");
const cors = require("cors");
const { loginRouter } = require("./routers/login-router");
const { createConnection } = require("./config/db");
const { userRouter } = require("./routers/user-router");
const { verifyUserToken } = require("./utils/jwt");
const { fileRouter } = require("./routers/file-router");
const { authMiddleware } = require("./config/middlewares");
const { getFileFromToken } = require("./utils/urls");
const { File } = require("./models/files");
const path = require("path");

createConnection();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);
app.use("/api/files", authMiddleware, fileRouter);

app.use(
  "/api/file/download/:fileid",
  authMiddleware,
  async (request, response, next) => {
    file = await File.findById(request.params.fileid);
    response.download(path.join(process.env.PWD, file.path));
  }
);

app.listen(3001, () => {
  console.log("Server is Listening on port 3001");
});
