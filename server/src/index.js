const express = require("express");

const app = express();

app.get("/ping", (request, response) => {
  response.json({
    message: "Pong",
  });
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000");
});
