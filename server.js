const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

const app = express();

// require connection from mongoDB
const connection = require("./config/connection");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

mongoose.connection.once("open", () => {
  console.log("SocialClub Running");
  app.listen(PORT, () => {
    console.log(`Listening for API on http://localhost:${PORT}`);
  });
});
