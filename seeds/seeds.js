const mongoose = require("mongoose");
const User = require("../models/User");
const Thought = require("../models/Thought");
const Reaction = require("../models/Reaction");
const userSeeds = require("./userSeeds");
const thoughtSeeds = require("./thoughtSeeds");

mongoose.connect("mongodb://127.0.0.1:27017/socialClubDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seed = async () => {
  await User.deleteMany({});
  await User.insertMany(userSeeds);
  console.log(`Users seeded`);

  await Thought.deleteMany({});
  await Thought.insertMany(thoughtSeeds);
  console.log(`Thoughts seeded`);

  mongoose.connection.close();
  console.log(`Database connection closed`);
};

seed().catch((err) => {
  console.error(`Error in seeding socialClubDb`, err);
});
