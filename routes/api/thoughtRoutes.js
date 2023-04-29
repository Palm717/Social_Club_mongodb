const router = require("express").Router();
const thoughtControllers = require("../../controllers/thoughtControllers");

router.get("/", thoughtControllers);

module.exports = router;
