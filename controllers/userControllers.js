// import User schema / model
const User = require("../models/User");

const mongoose = require("mongoose");

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
    const user = await User.findById(userId)
      .populate("thoughts")
      .populate("friends");
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
  const updateBody = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updateBody, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ error: `Cannot find user by ID ${userId}` });
    } else {
      res.status(200).json(updateBody);
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: `cannot find and update user by ID ${userId}` });
  }
};

const updateFriendList = async (req, res) => {
  const userId = req.params.id;
  const friendId = new mongoose.Types.ObjectId();
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ error: `No user found by id ${userId}` });
    } else {
      res.send(`Added friend with ID ${friendId} to friends list`);
    }
  } catch (err) {
    console.error(
      `Error adding friend with ID ${friendId} to user with ID ${userId} `
    );
    res.status(500).json({
      error: `cannot add friend with ID ${friendId} to user with ID ${userId}`,
    });
  }
};

// export functions
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  updateFriendList,
};
