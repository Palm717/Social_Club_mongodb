const { Thought } = require("../models/Thought");

const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find().populate("reactions");
    res.json(thoughts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  createThought,
  getAllThoughts,
};
