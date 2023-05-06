const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
} = require("../../controllers/thoughtControllers");

router.route("/").post(createThought).get(getAllThoughts);
router.route("/:id").get(getThoughtById).put(updateThoughtById);

module.exports = router;
