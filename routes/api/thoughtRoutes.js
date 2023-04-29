const { Thought, reactionSchema } = require("../../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find().populate("reactions");
    res.json(thoughts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
