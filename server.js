const express = require("express");
const mongoose = require("mongoose");
const app = express();

// require connection from mongoDB
const connection = require("./config/connection");

const PORT = process.env.PORT || 3001;

app.use(express());

mongoose.connection.once("open", () => {
  console.log("MongoDB Running");
  app.listen(PORT, () => {
    console.log(`Listening for API on http://localhost:${PORT}`);
  });
});
