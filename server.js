// import modules
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api/index");

// app instances
const app = express();

// require connection from mongoDB
const connect = require("./config/connection");

// middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use routes
app.use("/api", routes);

// local port
const PORT = process.env.PORT || 3001;

// mongoDB connection
mongoose.connection.once("open", () => {
  console.log("SocialClub Running");
  app.listen(PORT, () => {
    console.log(`Listening for API on http://localhost:${PORT}`);
  });
});
