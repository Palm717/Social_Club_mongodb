const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
} = require("../../controllers/thoughtControllers");

router.post(createThought).get(getAllThoughts);

module.exports = router;
