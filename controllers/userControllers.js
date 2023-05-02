// import User schema / model
const User = require("../models/User");

// create user function
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get all users function
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: `No user found with ID ${userId}` });
    } else {
      res.send(user);
    }
  } catch (err) {
    console.error(`Cannot find user with ID ${userId}`);
    res.status(500).json({ error: `Error finding user with ID ${userId}` });
  }
};

const updateUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(userId);
    if (!user) {
      res.status(400).json({ error: `Cannot find user by ID ${userId}` });
    } else {
      res.json({ found: `Found and updated user ID ${userId}` });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: `cannot find and update user by ID ${userId}` });
  }
};

// export functions
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
};
