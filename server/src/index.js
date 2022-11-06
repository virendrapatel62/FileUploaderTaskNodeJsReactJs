const express = require("express");
const { createConnection } = require("./db");
const { authRouter } = require("./routers/auth-router");

createConnection(() => console.log("Connected Mongo DB..."));
const PORT = 3001;

const app = express();
app.use(express.json());

app.get("/ping", (request, response) => {
  response.json({
    message: "Pong",
  });
});

app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}`);
});
