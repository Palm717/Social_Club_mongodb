const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

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
  reactions: [
    {
      type: reactionSchema,
      required: true,
    },
  ],
});

const Thoughts = model("thought", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thoughts;
