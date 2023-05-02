// import express router
const router = require("express").Router();

// User model functions
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../../controllers/userControllers");

// http methods
router.route("/").post(createUser).get(getAllUsers);
router.route("/").get(getUserById).put(updateUserById);

// export module
module.exports = router;
