const router = require("express").Router();
const thoughtRoutes = require("../api/thoughtRoutes");
const userRoutes = require("../api/userRoutes");

router.use("/", thoughtRoutes);
router.use("/", userRoutes);

module.exports = router;
