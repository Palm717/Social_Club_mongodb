const { Schema } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    // Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
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
});

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

module.exports = reactionSchema;
