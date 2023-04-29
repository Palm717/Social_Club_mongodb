const router = require("express").Router();
const {
  createUser,
  getAllUsers,
} = require("../../controllers/userControllers");

router.post(createUser).get(getAllUsers);

module.exports = router;
