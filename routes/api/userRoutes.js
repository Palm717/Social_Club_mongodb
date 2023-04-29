const { User } = require("../../models/User");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
