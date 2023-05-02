// import express router
const router = require("express").Router();

// User model functions
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  updateFriendList,
  deleteUserById,
} = require("../../controllers/userControllers");

// http methods
router.route("/").post(createUser).get(getAllUsers);
router.route("/:id").get(getUserById).put(updateUserById);
router.route("/:id/friendsList").post(updateFriendList);
router.route("/:id").delete(deleteUserById);

// export module
module.exports = router;
