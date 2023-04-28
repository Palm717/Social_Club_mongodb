const express = require("express");
const app = express();

// require connection from mongoDB
const connection = require("./config/connection");

const PORT = process.env.PORT || 3001;

app.use(express());

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
