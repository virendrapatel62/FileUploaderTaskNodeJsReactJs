const express = require("express");
const cors = require("cors");
const { createConnection } = require("./db");
const { authRouter } = require("./routers/auth-router");
const { fileRouter } = require("./routers/file-router");
const { authMiddleware } = require("./middlewares/auth-middleware");

createConnection(() => console.log("Connected Mongo DB..."));
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (request, response) => {
  response.json({
    message: "Pong",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/files", authMiddleware, fileRouter);
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}`);
});
