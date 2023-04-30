// import express router
const router = require("express").Router();

// User model functions
const {
  createUser,
  getAllUsers,
} = require("../../controllers/userControllers");

// http methods
router.route("/").post(createUser).get(getAllUsers);

// export module
module.exports = router;
