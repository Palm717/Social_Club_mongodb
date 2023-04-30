// import mongoose
const mongoose = require("mongoose");

// connect to mongoDB and create new db file
const connect = mongoose.connect("mongodb://127.0.0.1:27017/socialClubDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export connection
module.exports = connect;
