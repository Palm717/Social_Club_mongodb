// import all routes from the routes file
const router = require("express").Router();
const thoughtRoutes = require("../api/thoughtRoutes");
const userRoutes = require("../api/userRoutes");

// route middleware
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

// export routes
module.exports = router;
