// import Though schema / model
const Thought = require("../models/Thought");

// create a though function
const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get all thoughts function
const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find().populate("reactions");
    res.json(thoughts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getThoughtById = async (req, res) => {
  const thoughtId = req.params.id;
  try {
    const thought = await Thought.findById(thoughtId).populate("username");

    if (!thought) {
      res.status(404).json({ error: `No thoughts found with ID ${thoughtId}` });
    } else {
      res.status(200).json({ thought: `Thought found` });
      res.send(thought);
    }
  } catch (err) {
    console.log(err);
  }
};

const updateThoughtById = async (req, res) => {
  const thoughtId = req.params.id;
  const thoughtBody = req.body;

  try {
    const thought = await User.findByIdAndUpdate(thoughtId, thoughtBody, {
      new: true,
    });
    if (!thought) {
      res.status(404).json({ error: `Cannot find thought by ID ${thoughtId}` });
    } else {
      res.status(200).json(thoughtBody);
    }
  } catch (err) {
    console.log(err);
  }
};

cons;

// export thought fucntion
module.exports = {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
};
