const mongoose = require("mongoose");
const connect = require("../config/connection");
const User = require("../models/User");

const userSeeds = [
  {
    username: "rollover",
    email: "rollover2@123.com",
  },
  {
    username: "sitdog",
    email: "sitdog2@12345.com",
  },
  {
    username: "spinaround",
    email: "spinaround3@youspin.com",
  },
  {
    username: "getyourbone",
    email: "getyourbone7@bones.com",
  },
];

async function seed() {
  await User.insertMany(userSeeds);
  mongoose.connection.close();
  console.log(`socialClubDb seeded`);
}

seed().catch((err) => {
  console.error(`Error in seeding socialClubDb `, err);
});

module.exports = userSeeds;
