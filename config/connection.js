// import mongoose
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialClubDb";

// connect to mongoDB and create new db file
const connect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export connection
module.exports = connect;
