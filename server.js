// import modules
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

// app instances
const app = express();

// require connection from mongoDB
const connect = require("./config/connection");

// local port
const PORT = process.env.PORT || 3001;

// middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

// mongoDB connection
mongoose.connection.once("open", () => {
  console.log("SocialClub Running");
  app.listen(PORT, () => {
    console.log(`Listening for API on http://localhost:${PORT}`);
  });
});
