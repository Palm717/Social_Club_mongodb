const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: function (value) {
      return validator.isEmail(value);
    },
    message: "Invalid Email Address",
  },
  thoughts: {
    // Array of _id values referencing the Thought model
  },
  friends: {
    // Array of _id values referencing the User model (self-reference)
  },
});

const User = model("user", userSchema);

module.exports = User;
