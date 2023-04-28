const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (value) {
      return new Date(value).toLocaleDateString(`en_us`, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    // replies
    // array of documents created with reactionSchema
  },
});

const Thoughts = model("thought", thoughtSchema);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thoughts;
