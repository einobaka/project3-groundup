const router = require("express").Router();
const drinkRoutes = require("./drink");
const shopRoutes = require("./shop");
// const userRoutes = require("./user");

// drinks routes
router.use("/drink", drinkRoutes);

// shops routes
router.use("/shop", shopRoutes);

// login routes
// router.use("/user", userRoutes);

module.exports = router;
